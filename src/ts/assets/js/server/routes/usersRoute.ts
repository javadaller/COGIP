import { Request, Response, Router } from 'express'
import { getAllUsers, loginUser, registerUser } from '../controllers/usersController.js'
import { Authenticated } from '../secure/secure.js'

const router = Router()



router.get('/api/users/getAllUsers', Authenticated, async (_req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ error: 'Error retrieving users' })
    }
});

router.get('/api/users/loged', async (req: Request, res: Response) => {
    try {
        if ((req.session as any).user) {
            res.status(200).json({ connected: true });
        } else {
            res.status(200).json({ connected: false });
        }
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ error: 'Error retrieving users' })
    }
});

router.post('/api/users/register', async (req: Request, res: Response) => {
    try {
        const { email, password, first_name } = req.body;
        const user = await registerUser(email, password, first_name);
        if (user) {
            (req.session as any).user = user;
            res.json(user);
        } else {
            res.status(400).json({ error: 'Could not register user' });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

router.post('/api/users/login', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        if (user) {
            (req.session as any).user = user;
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
});

router.get('/api/users/logout', Authenticated, (req: Request, res: Response) => {
    (req.session as any).user = null;
    res.status(200).send();
});


export default router

import { Request, Response, Router, NextFunction } from 'express'
import { getAllUsers, loginUser } from '../controllers/usersController.js'

const router = Router()

function Authenticated(req: Request, res: Response, next: NextFunction) {
    if ((req.session as any).user) {
        return next();
    }
    res.status(401).send('Veuillez vous connecter pour accéder à cette ressource');
}

router.get('/api/users/getAllUsers', Authenticated, async (_req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        res.json(users)
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ error: 'Error retrieving users' })
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

router.get('/test', async (_req: Request, res: Response) => {
    res.status(200).json({ message: 'Test route works' });
});

export default router

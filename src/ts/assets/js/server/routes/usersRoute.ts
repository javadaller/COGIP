import { Request, Response, Router } from 'express'
import { getAllUsers, loginUser } from '../controllers/usersController.js'

const router = Router()

router.get('/api/users/getAllUsers', async (res: Response) => {
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
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
});

export default router

import { Router } from 'express';
import { getAllUsers } from '../controllers/usersController.js';

const router = Router();

router.get('/api/users/getAllUsers', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Error retrieving users' });
    }
});

export default router;

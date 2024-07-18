var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import { getAllUsers, loginUser, registerUser, promoteUser, demoteUser } from '../controllers/usersController.js';
import { Authenticated, Admin } from '../secure/secure.js';
const router = Router();
router.get('/api/users/getAllUsers', Authenticated, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield getAllUsers();
        res.json(users);
    }
    catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Error retrieving users' });
    }
}));
router.get('/api/users/loged', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.session.user) {
            res.status(200).json({ connected: true });
        }
        else {
            res.status(200).json({ connected: false });
        }
    }
    catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Error retrieving users' });
    }
}));
router.post('/api/users/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, first_name } = req.body;
        const user = yield registerUser(email, password, first_name);
        if (user) {
            req.session.user = user;
            res.json(user);
        }
        else {
            res.status(400).json({ error: 'Could not register user' });
        }
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
}));
router.post('/api/users/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield loginUser(email, password);
        if (user) {
            req.session.user = user;
            res.json(user);
        }
        else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    }
    catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
}));
router.get('/api/users/logout', Authenticated, (req, res) => {
    req.session.user = null;
    res.status(200).send();
});
router.put('/api/users/:id/promote', Authenticated, Admin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield promoteUser(id);
    res.json(result);
}));
router.put('/api/users/:id/demote', Authenticated, Admin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield demoteUser(id);
    res.json(result);
}));
export default router;

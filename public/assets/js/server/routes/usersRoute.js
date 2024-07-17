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
import { getAllUsers, loginUser } from '../controllers/usersController.js';
const router = Router();
function Authenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.status(401).send('Veuillez vous connecter pour accéder à cette ressource');
}
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
router.get('/test', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: 'Test route works' });
}));
export default router;

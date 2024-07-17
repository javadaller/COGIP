var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connectToDatabase } from '../connect/connect.js';
export function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield connectToDatabase();
            const sql = 'SELECT * FROM users';
            const [rows] = yield connection.query(sql);
            console.log('Liste des utilisateurs :', rows);
            yield connection.end();
            return rows;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs :', error);
            throw error;
        }
    });
}
export function loginUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield connectToDatabase();
            const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
            const [rows] = yield connection.query(sql, [email, password]);
            console.log('User login:', rows);
            yield connection.end();
            return rows[0];
        }
        catch (error) {
            console.error('Error during user login:', error);
            throw error;
        }
    });
}

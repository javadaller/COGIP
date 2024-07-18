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
export function registerUser(email, password, first_name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if ((!email || !password || !first_name)) {
                console.error("entry not valid");
                return;
            }
            const connection = yield connectToDatabase();
            const checkSql = 'SELECT * FROM users WHERE email = ? OR first_name = ?';
            const [checkRows] = yield connection.query(checkSql, [email, first_name]);
            if (checkRows.length > 0) {
                console.error('Email or first name already exists');
                return;
            }
            const sql = 'INSERT INTO users (email, password, first_name, role_ID, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
            const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const [result] = yield connection.query(sql, [email, password, first_name, 2, now, now]);
            console.log('User registered:', result);
            yield connection.end();
            return result;
        }
        catch (error) {
            console.error('Error during user registration:', error);
            throw error;
        }
    });
}
export function promoteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'UPDATE users SET role_ID = ? WHERE ID_user = ?';
        const [result] = yield connection.query(sql, [1, id]); // supposons que 1 est le rôle d'administrateur
        yield connection.end();
        return result;
    });
}
export function demoteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'UPDATE users SET role_ID = ? WHERE ID_user = ?';
        const [result] = yield connection.query(sql, [2, id]); // supposons que 2 est le rôle d'utilisateur standard
        yield connection.end();
        return result;
    });
}

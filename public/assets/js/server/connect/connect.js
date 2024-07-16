var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'mydatabase',
};
export const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield mysql.createConnection(dbConfig);
        console.log('Connected to MySQL database.');
        return connection;
    }
    catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
});
export const closeDatabaseConnection = (connection) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection.end();
        console.log('Database connection closed.');
    }
    catch (error) {
        console.error('Error closing database connection:', error);
        throw error;
    }
});

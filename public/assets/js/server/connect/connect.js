"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeDatabaseConnection = exports.connectToDatabase = void 0;
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};
//
let connection = null;
const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        if (connection) {
            resolve(connection);
        }
        else {
            connection = mysql_1.default.createConnection(dbConfig);
            connection.connect((err) => {
                if (err) {
                    console.error('Error connecting to database:', err);
                    reject(err);
                }
                else {
                    console.log('Connected to MySQL database.');
                    if (connection) {
                        resolve(connection);
                    }
                    else {
                        reject(new Error('Connection object is null after successful connection.'));
                    }
                }
            });
        }
    });
};
exports.connectToDatabase = connectToDatabase;
const closeDatabaseConnection = () => {
    return new Promise((resolve, reject) => {
        if (connection) {
            connection.end((err) => {
                if (err) {
                    console.error('Error closing database connection:', err);
                    reject(err);
                }
                else {
                    console.log('Database connection closed.');
                    connection = null;
                    resolve();
                }
            });
        }
        else {
            resolve();
        }
    });
};
exports.closeDatabaseConnection = closeDatabaseConnection;

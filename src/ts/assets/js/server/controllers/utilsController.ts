import { connectToDatabase } from '../connect/connect.js'

export async function getLatestInvoices() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM invoices ORDER BY created_at DESC LIMIT 5';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

export async function getLatestUsers() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM users ORDER BY created_at DESC LIMIT 5';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

export async function getLatestCompanies() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM companies ORDER BY created_at DESC LIMIT 5';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

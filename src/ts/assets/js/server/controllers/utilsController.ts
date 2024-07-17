import { connectToDatabase } from '../connect/connect.js'

export async function getLatestInvoices() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM invoices ORDER BY created_at DESC LIMIT 5';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

export async function getLatestContacts() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5';
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

export async function editInvoice(id: number, newInvoiceData: any) {
    const { ref, company_ID } = newInvoiceData;
    const connection = await connectToDatabase();
    const sql = 'UPDATE invoices SET ref = ?, company_ID = ?, updated_at = ? WHERE ID_invoice = ?';
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const [result] = await connection.query(sql, [ref, company_ID, now, id]) as any;
    await connection.end();
    return result;
}

export async function editContacts(id: number, newContactsData: any) {
    const { name, email, phone, company_ID } = newContactsData;
    const connection = await connectToDatabase();
    const sql = 'UPDATE contacts SET name = ?, email = ?,phone = ?,company_ID = ?,updated_at = ? WHERE ID_contact = ?';
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const [result] = await connection.query(sql, [name, email, phone, company_ID, now, id]) as any;
    await connection.end();
    return result;
}

export async function editCompany(id: number, newCompanyData: any) {
    const { type_ID, name, country, tva } = newCompanyData;
    const connection = await connectToDatabase();
    const sql = 'UPDATE companies SET type_ID = ?, name = ?,country = ?,tva = ?, updated_at = ? WHERE ID_company = ?';
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const [result] = await connection.query(sql, [type_ID, name, country, tva, now, id]) as any;
    await connection.end();
    return result;
}

export async function getAllCompanies() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM companies ORDER BY name';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

export async function getAllInvoices() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM invoices ORDER BY created_at DESC';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

export async function getAllContacts() {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM contacts ORDER BY name';
    const [rows] = await connection.query(sql) as any;
    await connection.end();
    return rows;
}

export async function createInvoice(invoiceData: any) {
    const { ref, company_ID } = invoiceData;
    const connection = await connectToDatabase();
    const sql = 'INSERT INTO invoices (ref, company_ID,created_at, updated_at) VALUES (?, ?, ?, ?)';
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const [result] = await connection.query(sql, [ref, company_ID, now, now]) as any;
    await connection.end();
    return result;
}

export async function createContact(contactData: any) {
    const { name, email, phone, company_ID } = contactData;
    const connection = await connectToDatabase();
    const sql = 'INSERT INTO contacts (name, email, phone, company_ID, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const [result] = await connection.query(sql, [name, email, phone, company_ID, now, now]) as any;
    await connection.end();
    return result;
}

export async function createCompany(companyData: any) {
    const { type_ID, name, country, tva } = companyData;
    const connection = await connectToDatabase();
    const sql = 'INSERT INTO companies (type_ID , name, country, tva, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const [result] = await connection.query(sql, [type_ID, name, country, tva, now, now]) as any;
    await connection.end();
    return result;
}

export async function deleteInvoice(id: number) {
    const connection = await connectToDatabase();
    const sql = 'DELETE FROM invoices WHERE ID_invoice = ?';
    const [result] = await connection.query(sql, [id]) as any;
    await connection.end();
    return result;
}

export async function deleteContact(id: number) {
    const connection = await connectToDatabase();
    const sql = 'DELETE FROM contacts WHERE ID_contact = ?';
    const [result] = await connection.query(sql, [id]) as any;
    await connection.end();
    return result;
}

export async function deleteCompany(id: number) {
    const connection = await connectToDatabase();
    const sql = 'DELETE FROM companies WHERE ID_company = ?';
    const [result] = await connection.query(sql, [id]) as any;
    await connection.end();
    return result;
}

export async function getInvoice(id: number) {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM invoices WHERE ID_invoice = ?';
    const [rows] = await connection.query(sql, [id]) as any;
    await connection.end();
    return rows[0];
}

export async function getContact(id: number) {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM contacts WHERE ID_contact = ?';
    const [rows] = await connection.query(sql, [id]) as any;
    await connection.end();
    return rows[0];
}

export async function getCompany(id: number) {
    const connection = await connectToDatabase();
    const sql = 'SELECT * FROM companies WHERE ID_company = ?';
    const [rows] = await connection.query(sql, [id]) as any;
    await connection.end();
    return rows[0];
}
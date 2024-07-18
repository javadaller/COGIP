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
export function getLatestInvoices() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'SELECT * FROM invoices ORDER BY created_at DESC LIMIT 5';
        const [rows] = yield connection.query(sql);
        yield connection.end();
        return rows;
    });
}
export function getLatestContacts() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5';
        const [rows] = yield connection.query(sql);
        yield connection.end();
        return rows;
    });
}
export function getLatestCompanies() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'SELECT * FROM companies ORDER BY created_at DESC LIMIT 5';
        const [rows] = yield connection.query(sql);
        yield connection.end();
        return rows;
    });
}
export function editInvoice(id, newInvoiceData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ref, company_ID } = newInvoiceData;
        const connection = yield connectToDatabase();
        const sql = 'UPDATE invoices SET ref = ?, company_ID = ?, updated_at = ? WHERE ID_invoice = ?';
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = yield connection.query(sql, [ref, company_ID, now, id]);
        yield connection.end();
        return result;
    });
}
export function editContacts(id, newContactsData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, phone, company_ID } = newContactsData;
        const connection = yield connectToDatabase();
        const sql = 'UPDATE contacts SET name = ?, email = ?,phone = ?,company_ID = ?,updated_at = ? WHERE ID_contact = ?';
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = yield connection.query(sql, [name, email, phone, company_ID, now, id]);
        yield connection.end();
        return result;
    });
}
export function editCompany(id, newCompanyData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { type_ID, name, country, tva } = newCompanyData;
        const connection = yield connectToDatabase();
        const sql = 'UPDATE companies SET type_ID = ?, name = ?,country = ?,tva = ?, updated_at = ? WHERE ID_company = ?';
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = yield connection.query(sql, [type_ID, name, country, tva, now, id]);
        yield connection.end();
        return result;
    });
}
export function getAllInvoices(page, pageSize) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const offset = (page - 1) * pageSize;
        const sql = 'SELECT * FROM invoices ORDER BY created_at DESC LIMIT ?, ?';
        const [rows] = yield connection.query(sql, [offset, pageSize]);
        yield connection.end();
        return rows;
    });
}
export function getAllContacts(page, pageSize) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const offset = (page - 1) * pageSize;
        const sql = 'SELECT * FROM contacts ORDER BY created_at DESC LIMIT ?, ?';
        const [rows] = yield connection.query(sql, [offset, pageSize]);
        yield connection.end();
        return rows;
    });
}
export function getAllCompanies(page, pageSize) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const offset = (page - 1) * pageSize;
        const sql = 'SELECT * FROM companies ORDER BY created_at DESC LIMIT ?, ?';
        const [rows] = yield connection.query(sql, [offset, pageSize]);
        yield connection.end();
        return rows;
    });
}
export function createInvoice(invoiceData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { ref, company_ID } = invoiceData;
        const connection = yield connectToDatabase();
        const sql = 'INSERT INTO invoices (ref, company_ID,created_at, updated_at) VALUES (?, ?, ?, ?)';
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = yield connection.query(sql, [ref, company_ID, now, now]);
        yield connection.end();
        return result;
    });
}
export function createContact(contactData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, phone, company_ID } = contactData;
        const connection = yield connectToDatabase();
        const sql = 'INSERT INTO contacts (name, email, phone, company_ID, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = yield connection.query(sql, [name, email, phone, company_ID, now, now]);
        yield connection.end();
        return result;
    });
}
export function createCompany(companyData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { type_ID, name, country, tva } = companyData;
        const connection = yield connectToDatabase();
        const sql = 'INSERT INTO companies (type_ID , name, country, tva, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const [result] = yield connection.query(sql, [type_ID, name, country, tva, now, now]);
        yield connection.end();
        return result;
    });
}
export function deleteInvoice(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'DELETE FROM invoices WHERE ID_invoice = ?';
        const [result] = yield connection.query(sql, [id]);
        yield connection.end();
        return result;
    });
}
export function deleteContact(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'DELETE FROM contacts WHERE ID_contact = ?';
        const [result] = yield connection.query(sql, [id]);
        yield connection.end();
        return result;
    });
}
export function deleteCompany(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'DELETE FROM companies WHERE ID_company = ?';
        const [result] = yield connection.query(sql, [id]);
        yield connection.end();
        return result;
    });
}
export function getInvoice(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'SELECT * FROM invoices WHERE ID_invoice = ?';
        const [rows] = yield connection.query(sql, [id]);
        yield connection.end();
        return rows[0];
    });
}
export function getContact(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'SELECT * FROM contacts WHERE ID_contact = ?';
        const [rows] = yield connection.query(sql, [id]);
        yield connection.end();
        return rows[0];
    });
}
export function getCompany(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield connectToDatabase();
        const sql = 'SELECT * FROM companies WHERE ID_company = ?';
        const [rows] = yield connection.query(sql, [id]);
        yield connection.end();
        return rows[0];
    });
}

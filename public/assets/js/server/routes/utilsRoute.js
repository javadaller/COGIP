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
import { getLatestInvoices, getLatestContacts, getLatestCompanies, editInvoice, editContacts, editCompany, getAllCompanies, getAllInvoices, getAllContacts, createInvoice, createContact, createCompany, deleteInvoice, deleteContact, deleteCompany, getInvoice, getContact, getCompany } from '../controllers/utilsController.js';
import { Authenticated } from '../secure/secure.js';
const router = Router();
router.get('/api/invoices/latest', Authenticated, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const invoices = yield getLatestInvoices();
    res.json(invoices);
}));
router.get('/api/contacts/latest', Authenticated, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacts = yield getLatestContacts();
    res.json(contacts);
}));
router.get('/api/companies/latest', Authenticated, (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companies = yield getLatestCompanies();
    res.json(companies);
}));
router.put('/api/invoices/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const newInvoiceData = req.body;
    const result = yield editInvoice(id, newInvoiceData);
    res.json(result);
}));
router.put('/api/contacts/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const newContactsData = req.body;
    const result = yield editContacts(id, newContactsData);
    res.json(result);
}));
router.put('/api/companies/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const newCompanyData = req.body;
    const result = yield editCompany(id, newCompanyData);
    res.json(result);
}));
router.get('/api/invoices', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const invoices = yield getAllInvoices(page, pageSize);
    res.json(invoices);
}));
router.get('/api/contacts', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const contacts = yield getAllContacts(page, pageSize);
    res.json(contacts);
}));
router.get('/api/companies', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const companies = yield getAllCompanies(page, pageSize);
    res.json(companies);
}));
router.post('/api/invoices', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const invoiceData = req.body;
    const result = yield createInvoice(invoiceData);
    res.json(result);
}));
router.post('/api/contacts', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const result = yield createContact(contactData);
    res.json(result);
}));
router.post('/api/companies', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const companyData = req.body;
    const result = yield createCompany(companyData);
    res.json(result);
}));
router.delete('/api/invoices/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield deleteInvoice(id);
    res.json(result);
}));
router.delete('/api/contacts/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield deleteContact(id);
    res.json(result);
}));
router.delete('/api/companies/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield deleteCompany(id);
    res.json(result);
}));
router.get('/api/invoices/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const invoice = yield getInvoice(id);
    res.json(invoice);
}));
router.get('/api/contacts/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const contact = yield getContact(id);
    res.json(contact);
}));
router.get('/api/companies/:id', Authenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const company = yield getCompany(id);
    res.json(company);
}));
export default router;

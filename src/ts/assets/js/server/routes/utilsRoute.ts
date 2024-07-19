import { Request, Response, Router } from 'express'
import {
    getLatestInvoices,
    getLatestContacts,
    getLatestCompanies,
    editInvoice,
    editContacts,
    editCompany,
    getAllCompanies,
    getAllInvoices,
    getAllContacts,
    createInvoice,
    createContact,
    createCompany,
    deleteInvoice,
    deleteContact,
    deleteCompany,
    getInvoice,
    getContact,
    getCompany
} from '../controllers/utilsController.js'
import { Authenticated } from '../secure/secure.js'

const router = Router()

router.get('/api/invoices/latest', Authenticated, async (_req: Request, res: Response) => {
    const invoices = await getLatestInvoices();
    res.json(invoices);
});

router.get('/api/contacts/latest', Authenticated, async (_req: Request, res: Response) => {
    const contacts = await getLatestContacts();
    res.json(contacts);
});

router.get('/api/companies/latest', Authenticated, async (_req: Request, res: Response) => {
    const companies = await getLatestCompanies();
    res.json(companies);
});

router.put('/api/invoices/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const newInvoiceData = req.body;
    const result = await editInvoice(id, newInvoiceData);
    res.json(result);
});

router.put('/api/contacts/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const newContactsData = req.body;
    const result = await editContacts(id, newContactsData);
    res.json(result);
});

router.put('/api/companies/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const newCompanyData = req.body;
    const result = await editCompany(id, newCompanyData);
    res.json(result);
});

router.get('/api/invoices', Authenticated, async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const invoices = await getAllInvoices(page, pageSize);
    res.json(invoices);
});

router.get('/api/contacts', Authenticated, async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const contacts = await getAllContacts(page, pageSize);
    res.json(contacts);
});

router.get('/api/companies', Authenticated, async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 10;
    const companies = await getAllCompanies(page, pageSize);
    res.json(companies);
});

router.post('/api/invoices', Authenticated, async (req: Request, res: Response) => {
    const invoiceData = req.body;
    const result = await createInvoice(invoiceData);
    res.json(result);
});

router.post('/api/contacts', Authenticated, async (req: Request, res: Response) => {
    const contactData = req.body;
    const result = await createContact(contactData);
    res.json(result);
});

router.post('/api/companies', Authenticated, async (req: Request, res: Response) => {
    const companyData = req.body;
    const result = await createCompany(companyData);
    res.json(result);
});

router.delete('/api/invoices/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await deleteInvoice(id);
    res.json(result);
});

router.delete('/api/contacts/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await deleteContact(id);
    res.json(result);
});

router.delete('/api/companies/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await deleteCompany(id);
    res.json(result);
});

router.get('/api/invoices/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const invoice = await getInvoice(id);
    res.json(invoice);
});

router.get('/api/contacts/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const contact = await getContact(id);
    res.json(contact);
});

router.get('/api/companies/:id', Authenticated, async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const company = await getCompany(id);
    res.json(company);
});

export default router

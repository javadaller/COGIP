import { Request, Response, Router } from 'express'
import { getLatestInvoices, getLatestUsers, getLatestCompanies } from '../controllers/utilsController.js'
import { Authenticated } from '../secure/secure.js'

const router = Router()

router.get('/api/latest/invoices', Authenticated, async (_req: Request, res: Response) => {
    const invoices = await getLatestInvoices();
    res.json(invoices);
});

router.get('/api/latest/users', Authenticated, async (_req: Request, res: Response) => {
    const users = await getLatestUsers();
    res.json(users);
});

router.get('/api/latest/companies', Authenticated, async (_req: Request, res: Response) => {
    const companies = await getLatestCompanies();
    res.json(companies);
});


export default router

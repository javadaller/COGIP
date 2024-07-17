
import { Request, Response, NextFunction } from 'express'

export function Authenticated(req: Request, res: Response, next: NextFunction) {
    if ((req.session as any).user) {
        return next();
    }
    res.status(401).send('Veuillez vous connecter pour accéder à cette ressource');
}


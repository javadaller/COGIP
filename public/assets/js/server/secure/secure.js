export function Authenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.status(401).send('Veuillez vous connecter pour accéder à cette ressource');
}
export function Admin(req, res, next) {
    if (req.session.user.role_ID == 1) {
        return next();
    }
    res.status(401).send('NOT AUTHORIZED');
}

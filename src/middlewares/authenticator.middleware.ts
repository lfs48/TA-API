import jwt from 'jsonwebtoken';

import { getJWTSecret } from '@/util';

export function authenticator(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //Bearer token
    if (!token) {
        res.status(401).json({ message: 'Access denied. No authorization token provided.' });
        return;
    }

    jwt.verify(token, getJWTSecret(), (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid authorization token.' });
            return;
        }
        next();
    });
}
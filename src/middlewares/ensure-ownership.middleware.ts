import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { getJWTSecret } from '@/util/auth.util';

/**
 * Middleware to ensure the authenticated user is the owner of the resource.
 * Assumes the resource owner's id is in req.params.id.
 */
export function ensureOwnership(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Access denied. No authorization token provided.' });
        return;
    }

    try {
        const decoded = jwt.verify(token, getJWTSecret()) as { id: string };
        console.log(decoded)
        if (decoded.id !== req.params.id) {
            res.status(403).json({ message: 'Forbidden: You do not own this resource.' });
            return;
        }
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid authorization token.' });
        return;
    }
}
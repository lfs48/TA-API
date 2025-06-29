import { Request } from "express";
import jwt from 'jsonwebtoken';

export function getJWTSecret() {
    return process.env.JWT_SECRET ?? '';
}

export function getIdFromJWT(req:Request) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //Bearer token
    if (!token) { throw new Error('No token') }
    const decoded = jwt.decode(token)  as { id: string };
    if (!decoded.id) { throw new Error('No ID in token') }
    return decoded.id;
}
import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { 
    createNewUser, 
    findUserByUsername 
} from '@/services';
import { getJWTSecret } from '@/util';

// POST /register endpoint controller
const register = async (req: Request, res: Response) => {
    try {
        const { credentials } = req.body
        const user = await findUserByUsername(credentials.username);
        if (user) {
            res.status(422).json({ messages: ['Username is taken'] });
        }
        try {
            const user = await createNewUser(credentials);
            res.status(201).json({
                user: {
                    id: user.id,
                    username: user.username,
                },
                jwt: jwt.sign({ id: user.id }, getJWTSecret(), {
                    expiresIn: '30d',
                }),
            });
        } catch (error) {
            res.status(422).json(error);
        }
    } catch (error) {
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

// POST /login endpoint controller
const login = async (req: Request, res: Response) => {
    try {
        const { credentials } = req.body;
        try {
            const user = await findUserByUsername(credentials.username);
            if (!user) {
                res.status(401).json({ messages: ['Invalid username or password'] });
                return;
            }
            const isPasswordValid = await compare(credentials.password, user.password);
            if (!isPasswordValid) {
                res.status(401).json({ messages: ['Invalid username or password'] });
                return;
            }
            res.status(200).json({
                user: {
                    id: user.id,
                    username: user.username,
                },
                jwt: jwt.sign({ id: user.id }, getJWTSecret(), {
                    expiresIn: '30d',
                }),
            });
        } catch (error) {
            res.status(422).json(error);
        }
    } catch (error) {
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    register,
    login,
};
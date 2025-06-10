import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import userService from '@/services/user.service';

// POST /register endpoint controller
const register = async (req: Request, res: Response) => {
    try {
        const userData = req.body.user;
        const user = await userService.findUser(userData.username);
        if (user) {
            res.status(422).json({ message: 'Username is taken' });
        }
        try {
            const user = await userService.newUser(userData);
            res.status(201).json({
                user: {
                    id: user.id,
                    username: user.username,
                },
                token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                    expiresIn: '30d',
                }),
            });
        } catch (error) {
            res.status(422).json(error);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// POST /login endpoint controller
const login = async (req: Request, res: Response) => {
    try {
        const userData = req.body.user;
        try {
            const user = await userService.findUser(userData.username);
            if (!user) {
                res.status(401).json({ message: 'Invalid username or password' });
                return;
            }
            const isPasswordValid = await compare(userData.password, user.password);
            if (!isPasswordValid) {
                res.status(401).json({ message: 'Invalid username or password' });
                return;
            }
            res.status(200).json({
                user: {
                    id: user.id,
                    username: user.username,
                },
                token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                    expiresIn: '30d',
                }),
            });
        } catch (error) {
            res.status(422).json(error);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default {
    register,
    login,
};
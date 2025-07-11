import { Request, Response } from 'express';

import { findUserByID , findUserGames } from '@/services';
import {
    whitelistGameFields, 
    whitelistInviteFields, 
    whitelistUserFields,
} from '@/util';
import { findReceivedInvites } from '@/services';

// GET /user/:id endpoint controller
export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserByID(id);
        if (!user) {
            res.status(404).json({ messages: ['User not found'] });
            return;
        }
        res.status(200).json({ user: whitelistUserFields(user) });
        return;
    } catch (error) {
        res.status(500).json({ messages: ['Internal Server Error'] });
        return;
    }
};

export const getUserGames = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserByID(id);
        if (!user) {
            res.status(404).json({ messages: ['User not found'] });
            return;
        }

        const games = await findUserGames(id);
        res.status(200).json({
            games: games.map((game) => whitelistGameFields(game)),
        });
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({ messages: ['Internal Server Error'] });
        return;
    }
};

export const getUserInvites = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserByID(id);
        if (!user) {
            res.status(404).json({ messages: ['User not found'] });
            return;
        }

        const invites = await findReceivedInvites(id);
        res.status(200).json({
            invites: invites.map((inv) => whitelistInviteFields(inv)),
        });
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({ messages: ['Internal Server Error'] });
        return;
    }
};

export default {
    getUser,
    getUserGames,
    getUserInvites,
};
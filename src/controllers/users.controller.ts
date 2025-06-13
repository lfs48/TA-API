import { Request, Response } from 'express';

import { findUserByID } from '@/services/user.service';
import { findUserGames } from '@/services/game.service';
import { whitelistUserFields } from '@/util/user.util';
import { whitelistGameFields } from '@/util/game.util';

// GET /user/:id endpoint controller
export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserByID(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json( whitelistUserFields(user) );
        return;
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};

export const getUserGames = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserByID(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const games = await findUserGames(id);
        res.status(200).json({
            games: games.map((game) => whitelistGameFields(game)),
        });
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

export default {
    getUser,
    getUserGames
};
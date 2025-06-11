import { Request, Response } from 'express';

import { findGameById } from '@/services/game.service';
import { whitelistGameFields } from '@/util/game.util';

// GET /game/:id endpoint controller
export const getGame = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await findGameById(id);
        if (!game) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json( whitelistGameFields(game) );
        return;
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};

export default {
    getGame
};
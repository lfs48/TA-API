import { Request, Response } from 'express';

import { createNewGame, findGameById } from '@/services/game.service';
import { whitelistGameFields } from '@/util/game.util';
import { getIdFromJWT } from '@/util/auth.util';

// GET /game/:id endpoint controller
export const getGame = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await findGameById(id);
        if (!game) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({
            game: whitelistGameFields(game) 
        });
        return;
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};

// POST /game endpoint controller
export const createGame = async (req: Request, res: Response) => {
    try {
        const id = getIdFromJWT(req);
        const gameData = req.body.game;
        const game = await createNewGame({
            ...gameData,
            gmID: id,
        });
        res.status(201).json({
            game: whitelistGameFields(game),
        });
        return;
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

export default {
    getGame,
    createGame,
};
import { Request, Response } from 'express';

import { createNewGame, findGameById, findGameByPassphrase } from '@/services/game.service';
import { authenticateParticipation, generateGamePhrase, whitelistGameFields } from '@/util/game.util';
import { getIdFromJWT } from '@/util/auth.util';
import { GameWithRelations } from 'types';


// GET /game endpoint controller
export const getGame = async (req: Request, res: Response) => {
    try {
        const { passphrase } = req.query;
        if (!passphrase) {
            res.status(400).json({ message: 'Missing passphrase in query string'});
        }
        const game = await findGameByPassphrase(passphrase as string);
        if (!game) {
            res.status(404).json({ message: 'Game not found' });
            return;
        }
        const userId = getIdFromJWT(req);
        if (!authenticateParticipation(userId, game)) {
            res.status(403).json({ message: 'Forbidden: You are not in this game.' });
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

// GET /game/:id endpoint controller
export const getGameByID = async (req: Request, res: Response) => {
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
        const phrase = await generateGamePhrase();
        const game = await createNewGame({
            ...gameData,
            gmID: id,
            passphrase: phrase,
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
    getGameByID,
    createGame,
};
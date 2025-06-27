import { Request, Response } from 'express';

import { createNewGame, disconnectPlayerFromGame, findGameById, findGameByPassphrase, updateGame } from '@/services/game.service';
import { isParticipant, generateGamePhrase, whitelistGameFields } from '@/util/game.util';
import { getIdFromJWT } from '@/util/auth.util';
import { findGameInvites } from '@/services/invite.service';
import { whitelistInviteFields } from '@/util/invite.util';


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
        if (!isParticipant(userId, game)) {
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

        const userId = getIdFromJWT(req);
        if (!isParticipant(userId, game)) {
            res.status(403).json({ message: 'Forbidden: You are not in this game.' });
            return;
        }

        res.status(200).json({
            game: whitelistGameFields(game, true),
        });
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};

// POST /game endpoint controller
export const postGame = async (req: Request, res: Response) => {
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

// PATCH /game/:id endpoint controller
export const patchGame = async (req: Request, res: Response) => {
    try {
        const gameId = req.params.id;
        const userId = getIdFromJWT(req);
        const gameData = req.body.game;
        const game = await findGameById(gameId);

        if (!game) {
            res.status(404).json({ message: 'Game not found.'});
            return;
        }

        if (!isParticipant(userId, game)) {
            res.status(403).json({ message: 'Forbidden: This is not your game.' });
            return;
        }

        const updatedGame = await updateGame(
            gameId,
            gameData,
        );
        res.status(200).json({
            game: whitelistGameFields(updatedGame),
        });
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
}

// PATCH /game/:id/remove-player endpoint controller
export const removePlayerFromGame = async (req: Request, res: Response) => {
    try {
        const gameId = req.params.id;
        const { playerId } = req.body;
        const userId = getIdFromJWT(req);

        // Fetch the game with relations
        const game = await findGameById(gameId);
        if (!game) {
            res.status(404).json({ message: 'Game not found.' });
            return;
        }

        // Only the GM can remove players
        if (userId !== game.gmID) {
            res.status(403).json({ message: 'Forbidden: Only the GM can remove players.' });
            return;
        }

        // Check if the player is in the game
        if (!game.players || !game.players.some(player => player.id === playerId)) {
            res.status(404).json({ message: 'Player not found in this game.' });
            return;
        }

        // Remove the player from the game
        const updatedGame = await disconnectPlayerFromGame(gameId, playerId);

        res.status(200).json({
            game: whitelistGameFields(updatedGame),
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getGameInvites = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await findGameById(id);
        if (!game) {
            res.status(404).json({ message: 'Game not found' });
            return;
        }

        const invites = await findGameInvites(id);
        res.status(200).json({
            invites: invites.map((inv) => whitelistInviteFields(inv)),
        });
        return;
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};

export default {
    getGame,
    getGameByID,
    postGame,
    patchGame,
    removePlayerFromGame,
    getGameInvites,
};
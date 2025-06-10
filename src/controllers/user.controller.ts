import { Request, Response } from 'express';

import { findUserByID } from '@/services/user.service';

// GET /user/:id endpoint controller
export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserByID(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.status(200).json({
            id: user.id,
            username: user.username,
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
        return;
    }
};

export default {
    getUser,
};
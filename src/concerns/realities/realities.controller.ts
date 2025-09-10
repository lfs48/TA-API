import { Request, Response } from 'express';
import { findAllRealities } from './reality.service';
import { whitelistRealityFields } from './reality.util';

// GET /realities endpoint controller
export const getRealities = async (req: Request, res: Response) => {
    try {
        const realities = await findAllRealities();
        res.status(200).json({
            realities: realities.map(reality => whitelistRealityFields(reality))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    getRealities,
};

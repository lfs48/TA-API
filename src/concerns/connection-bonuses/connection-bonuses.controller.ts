import { Request, Response } from "express";
import { findAllConnectionBonuses } from "./connection-bonus.service";
import { whitelistConnectionBonusFields } from "./connection-bonus.util";

// GET /bonuses endpoint controller
export const getConnectionBonuses = async (req: Request, res: Response) => {
    try {
        const connectionBonuses = await findAllConnectionBonuses();
        
        res.status(200).json({ 
            bonuses: connectionBonuses.map(bonus => whitelistConnectionBonusFields(bonus))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ["Internal Server Error"] });
    }
};

export default {
    getConnectionBonuses,
};
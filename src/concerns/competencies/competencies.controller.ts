import { Request, Response } from 'express';
import { findAllCompetencies } from './competency.service';
import { whitelistCompetencyFields } from './competency.util';

// GET /competencies endpoint controller
export const getCompetencies = async (req: Request, res: Response) => {
    try {
        const competencies = await findAllCompetencies();
        res.status(200).json({
            competencies: competencies.map(competency => whitelistCompetencyFields(competency, true))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    getCompetencies,
};
import { Request, Response } from 'express';
import { 
    findAllCompetencies,
    findAllArcData
} from './arc.service';
import { 
    whitelistCompetencyFields 
} from './arc.util';

// GET /competencies endpoint controller
export const getCompetencies = async (req: Request, res: Response) => {
    try {
        const competencies = await findAllCompetencies();
        res.status(200).json({
            competencies: competencies.map(competency => whitelistCompetencyFields(competency))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

// GET /arcs endpoint controller - returns competencies
export const getArcs = async (req: Request, res: Response) => {
    try {
        const { competencies } = await findAllArcData();
        res.status(200).json({
            competencies: competencies.map(competency => whitelistCompetencyFields(competency))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    getCompetencies,
    getArcs,
};
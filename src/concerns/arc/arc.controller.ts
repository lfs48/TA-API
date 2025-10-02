import { Request, Response } from 'express';
import { findAllArcData } from './arc.service';
import { 
    whitelistAnomalyFields, 
    whitelistRealityFields, 
    whitelistCompetencyFields 
} from '@/util';

// GET /arcs endpoint controller - returns competencies
export const getArcs = async (req: Request, res: Response) => {
    try {
        const { anomalies, realities, competencies } = await findAllArcData();
        res.status(200).json({
            anomalies: anomalies.map(anomaly => whitelistAnomalyFields(anomaly, true)),
            realities: realities.map(reality => whitelistRealityFields(reality)),
            competencies: competencies.map(competency => whitelistCompetencyFields(competency, true))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    getArcs,
};
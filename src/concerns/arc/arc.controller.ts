import { Request, Response } from 'express';
import { 
    findAllAnomalies, 
    findAllRealities, 
    findAllCompetencies,
    findAllArcData
} from './arc.service';
import { 
    whitelistAnomalyFields, 
    whitelistRealityFields, 
    whitelistCompetencyFields 
} from './arc.util';

// GET /anomalies endpoint controller
export const getAnomalies = async (req: Request, res: Response) => {
    try {
        const anomalies = await findAllAnomalies();
        res.status(200).json({
            anomalies: anomalies.map(anomaly => whitelistAnomalyFields(anomaly, true))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

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

// GET /arcs endpoint controller - returns all anomalies, realities, and competencies
export const getArcs = async (req: Request, res: Response) => {
    try {
        const { anomalies, realities, competencies } = await findAllArcData();
        res.status(200).json({
            anomalies: anomalies.map(anomaly => whitelistAnomalyFields(anomaly, true)),
            realities: realities.map(reality => whitelistRealityFields(reality)),
            competencies: competencies.map(competency => whitelistCompetencyFields(competency))
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ messages: ['Internal Server Error'] });
    }
};

export default {
    getAnomalies,
    getRealities,
    getCompetencies,
    getArcs,
};
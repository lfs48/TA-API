import { Request, Response } from 'express';
import { findAllAnomalies } from './anomaly.service';
import { whitelistAnomalyFields } from './anomaly.util';

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

export default {
    getAnomalies,
};
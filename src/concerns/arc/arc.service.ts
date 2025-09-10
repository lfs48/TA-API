import { findAllAnomalies, findAllRealities, findAllCompetencies } from '@/services';

// Get all arc data (competencies) in one call
export const findAllArcData = async () => {
    const [anomalies, realities, competencies] = await Promise.all([
        findAllAnomalies(),
        findAllRealities(),
        findAllCompetencies(),
    ]);

    return {
        anomalies,
        realities,
        competencies,
    };
};
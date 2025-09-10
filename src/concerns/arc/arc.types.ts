import { Reality, Competency } from '@prisma/client';

export type ArcData = {
    realities: Reality[];
    competencies: Competency[];
};

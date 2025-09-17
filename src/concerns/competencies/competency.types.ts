import { Competency, Requisition } from '@prisma/client';

export type CompetencyWithRelations = Competency & {
    requisition: Requisition;
};
import { Competency, Requisition } from '@prisma/client';

export type CompetencyWithRelations = Competency & {
    requisition: Requisition;
};

export type RequisitionWithRelations = Requisition & {
    competency: Competency;
};
import { Competency, Requisition } from '@prisma/client';
import { CompetencyWithRelations } from 'types';

export function whitelistCompetencyFields(
    competency: Competency | CompetencyWithRelations,
    includeRelations = false,
) {
    const baseFields = {
        id: competency.id,
        name: competency.name,
        directives: competency.directives,
        sanctioned: competency.sanctioned,
        assessment: competency.assessment,
        requisitionId: competency.requisitionId ?? undefined,
    };

    if (!includeRelations) {
        return baseFields;
    }

    return {
        ...baseFields,
        requisition: 'requisition' in competency && competency.requisition
            ? whitelistRequisitionFields(competency.requisition)
            : undefined,
    };

}

export function whitelistRequisitionFields(
    requisition: Requisition,
) {
    const base = {
        id: requisition.id,
        title: requisition.title,
        description: requisition.description,
        cost: requisition.cost,
        rentalCost: requisition.rentalCost,
        uses: requisition.uses,
    }

    return base;
}
import { Competency } from '@prisma/client';
import { CompetencyWithRelations } from 'types';

export function whitelistCompetencyFields(
    competency: Competency | CompetencyWithRelations,
    includeRelations = false,
) {
    const baseFields = {
        id: competency.id,
        name: competency.name,
        directives: competency.directives,
    };

    if (!includeRelations) {
        return baseFields;
    }

    return {
        ...baseFields,
        requisition: 'requisition' in competency && competency.requisition
            ? competency.requisition
            : undefined,
    };

}
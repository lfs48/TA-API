import { Competency } from '@prisma/client';

export function whitelistCompetencyFields(competency: Competency) {
    return {
        id: competency.id,
        name: competency.name,
        directives: competency.directives,
        sanctioned: competency.sanctioned,
        assessment: competency.assessment,
    };
}
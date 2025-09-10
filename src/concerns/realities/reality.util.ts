import { Reality } from '@prisma/client';

export function whitelistRealityFields(reality: Reality) {
    return {
        id: reality.id,
        name: reality.name,
    };
}

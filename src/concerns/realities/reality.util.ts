import { Reality } from '@prisma/client';

export function whitelistRealityFields(reality: Reality) {
    return {
        id: reality.id,
        name: reality.name,
        trigger: reality.trigger,
        release: reality.release,
        track: reality.track,
        matrix: reality.matrix,
    };
}

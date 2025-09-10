import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;

// Agent services
export * from "@/concerns/agents/agent.service";

//Anomaly services
export * from "@/concerns/anomalies/anomaly.service";

// Arc services
export * from "@/concerns/arc/arc.service";

// Game services
export * from "@/concerns/games/game.service";

// Invite services
export * from "@/concerns/invites/invite.service";

// User services
export * from "@/concerns/users/user.service";
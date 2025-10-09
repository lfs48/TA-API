-- AlterTable
ALTER TABLE "Reality" ADD COLUMN     "matrix" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "release" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "track" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "trigger" JSONB NOT NULL DEFAULT '{}';

-- CreateTable
CREATE TABLE "Relationship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "connection" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "uses" INTEGER,
    "agentId" TEXT NOT NULL,
    "connectionBonusId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Relationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConnectionBonus" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "maxUses" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConnectionBonus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_connectionBonusId_fkey" FOREIGN KEY ("connectionBonusId") REFERENCES "ConnectionBonus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

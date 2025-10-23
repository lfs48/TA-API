-- AlterTable
ALTER TABLE "Relationship" ADD COLUMN     "playerId" TEXT;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

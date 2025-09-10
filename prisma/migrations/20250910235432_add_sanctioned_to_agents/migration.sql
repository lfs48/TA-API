-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "sanctioned" BOOLEAN[] DEFAULT ARRAY[false, false, false]::BOOLEAN[];

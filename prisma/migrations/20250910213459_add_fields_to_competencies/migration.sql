-- AlterTable
ALTER TABLE "Competency" ADD COLUMN     "assessment" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "directives" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "sanctioned" TEXT[] DEFAULT ARRAY[]::TEXT[];

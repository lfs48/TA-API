-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "currency" JSONB NOT NULL DEFAULT '{"commendations":{"current":0,"banked":0,"spent":0},"demerits":{"current":0,"banked":0,"spent":0}}';

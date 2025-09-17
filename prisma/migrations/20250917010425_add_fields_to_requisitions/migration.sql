/*
  Warnings:

  - A unique constraint covering the columns `[requisitionId,agentId]` on the table `RequisitionInstance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Requisition" ADD COLUMN     "rentalCost" INTEGER;

-- AlterTable
ALTER TABLE "RequisitionInstance" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rented" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "RequisitionInstance_requisitionId_agentId_key" ON "RequisitionInstance"("requisitionId", "agentId");

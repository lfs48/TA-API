/*
  Warnings:

  - A unique constraint covering the columns `[requisitionId]` on the table `Competency` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `requisitionId` to the `Competency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Competency" ADD COLUMN     "requisitionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Requisition" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "cost" INTEGER,
    "uses" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Requisition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequisitionInstance" (
    "id" TEXT NOT NULL,
    "currentUses" INTEGER,
    "maxUses" INTEGER,
    "notes" TEXT DEFAULT '',
    "requisitionId" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequisitionInstance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Competency_requisitionId_key" ON "Competency"("requisitionId");

-- AddForeignKey
ALTER TABLE "Competency" ADD CONSTRAINT "Competency_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "Requisition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionInstance" ADD CONSTRAINT "RequisitionInstance_requisitionId_fkey" FOREIGN KEY ("requisitionId") REFERENCES "Requisition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequisitionInstance" ADD CONSTRAINT "RequisitionInstance_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

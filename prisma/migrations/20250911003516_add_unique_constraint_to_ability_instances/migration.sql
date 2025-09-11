/*
  Warnings:

  - A unique constraint covering the columns `[abilityId,agentId]` on the table `AbilityInstance` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AbilityInstance_abilityId_agentId_key" ON "AbilityInstance"("abilityId", "agentId");

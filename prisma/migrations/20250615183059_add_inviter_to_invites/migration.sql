/*
  Warnings:

  - You are about to drop the column `userId` on the `Invite` table. All the data in the column will be lost.
  - Added the required column `inviteeId` to the `Invite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inviterId` to the `Invite` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_userId_fkey";

-- AlterTable
ALTER TABLE "Invite" DROP COLUMN "userId",
ADD COLUMN     "inviteeId" TEXT NOT NULL,
ADD COLUMN     "inviterId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_inviteeId_fkey" FOREIGN KEY ("inviteeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_inviterId_fkey" FOREIGN KEY ("inviterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

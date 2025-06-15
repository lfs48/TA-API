ALTER TABLE "Game" ADD COLUMN "passphrase" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Game_passphrase_key" ON "Game"("passphrase");

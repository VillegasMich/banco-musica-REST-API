/*
  Warnings:

  - Added the required column `songId` to the `SongsHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `UserHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SongsHistory` ADD COLUMN `songId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `UserHistory` ADD COLUMN `userId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

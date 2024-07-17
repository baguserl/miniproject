/*
  Warnings:

  - Made the column `userId` on table `log_userlogins` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `log_userlogins` DROP FOREIGN KEY `log_userlogins_userId_fkey`;

-- AlterTable
ALTER TABLE `log_userlogins` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `log_userlogins` ADD CONSTRAINT `log_userlogins_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

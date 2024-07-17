-- DropForeignKey
ALTER TABLE `log_userlogins` DROP FOREIGN KEY `log_userlogins_userId_fkey`;

-- AlterTable
ALTER TABLE `log_userlogins` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `log_userlogins` ADD CONSTRAINT `log_userlogins_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_userlogins` ADD CONSTRAINT `log_userlogins_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

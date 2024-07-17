-- AlterTable
ALTER TABLE `users` MODIFY `referralCode` CHAR(8) NULL,
    MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'customer';

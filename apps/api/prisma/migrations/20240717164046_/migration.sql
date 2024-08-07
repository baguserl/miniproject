/*
  Warnings:

  - You are about to drop the column `user_id` on the `log_userlogins` table. All the data in the column will be lost.
  - Added the required column `userId` to the `log_userlogins` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `log_userlogins` DROP FOREIGN KEY `log_userlogins_user_id_fkey`;

-- AlterTable
ALTER TABLE `log_userlogins` DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `log_userlogins` ADD CONSTRAINT `log_userlogins_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

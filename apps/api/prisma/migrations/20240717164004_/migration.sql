/*
  Warnings:

  - You are about to drop the column `userId` on the `log_userlogins` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `log_userlogins` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `log_userlogins` DROP FOREIGN KEY `log_userlogins_userId_fkey`;

-- AlterTable
ALTER TABLE `log_userlogins` DROP COLUMN `userId`,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `log_userlogins` ADD CONSTRAINT `log_userlogins_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

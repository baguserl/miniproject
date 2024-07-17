/*
  Warnings:

  - You are about to alter the column `referralCode` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(8)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `referralCode` CHAR(8) NOT NULL;

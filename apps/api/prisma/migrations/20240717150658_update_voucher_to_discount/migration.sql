/*
  Warnings:

  - You are about to drop the column `vouchers` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `vouchers`,
    ADD COLUMN `hasDiscount` INTEGER NULL DEFAULT 0;

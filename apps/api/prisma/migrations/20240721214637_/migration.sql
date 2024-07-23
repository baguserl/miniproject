/*
  Warnings:

  - You are about to drop the column `transaction` on the `event_transactions` table. All the data in the column will be lost.
  - Added the required column `discount` to the `event_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event_transactions` DROP COLUMN `transaction`,
    ADD COLUMN `discount` DOUBLE NOT NULL;

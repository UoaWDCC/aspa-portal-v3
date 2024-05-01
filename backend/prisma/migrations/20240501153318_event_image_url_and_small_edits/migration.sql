/*
  Warnings:

  - You are about to drop the column `paymentDate` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `paymentDateTime` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` ADD COLUMN `imageUrl` VARCHAR(191) NULL,
    MODIFY `attendingExec` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Exec` MODIFY `imageUrl` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Ticket` DROP COLUMN `paymentDate`,
    ADD COLUMN `paymentDateTime` DATETIME(3) NOT NULL;

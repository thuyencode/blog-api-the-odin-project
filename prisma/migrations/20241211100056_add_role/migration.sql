/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('READER', 'AUTHOR');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'READER',
ADD COLUMN     "v_" INTEGER NOT NULL DEFAULT 1;
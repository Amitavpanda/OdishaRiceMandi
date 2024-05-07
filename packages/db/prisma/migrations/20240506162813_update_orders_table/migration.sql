/*
  Warnings:

  - You are about to drop the column `created_at` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_status` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Orders` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "created_at",
DROP COLUMN "order_status",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "orderStatus" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

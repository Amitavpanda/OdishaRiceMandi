-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pic" BYTEA NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

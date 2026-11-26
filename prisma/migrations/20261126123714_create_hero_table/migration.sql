-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "attackPower" INTEGER NOT NULL,
    "defensePower" INTEGER NOT NULL,
    "maxHp" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

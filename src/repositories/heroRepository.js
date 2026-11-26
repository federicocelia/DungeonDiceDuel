import { prisma } from "../database/prisma.js";

export async function getAllHeroes() {
  return prisma.hero.findMany();
}

export async function getHeroById(heroId) {
  const id = Number(heroId);

  return prisma.hero.findUnique({
    where: {
      id: Number(heroId),
    },
  });
}

export async function getAvailableOpponents(playerHeroId) {
  return prisma.hero.findMany({
    where: {
      NOT: {
        id: Number(playerHeroId),
      },
    },
  });
}

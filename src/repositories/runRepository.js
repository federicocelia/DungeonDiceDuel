import { prisma } from "../database/prisma.js";

export async function createRun(userId) {
  return prisma.run.create({
    data: {
      userId,
    },
  });
}

export async function updateRunStats(runId, outcome) {
  const data = {
    totalBattles: {
      increment: 1,
    },
  };

  if (outcome === "player_win") {
    data.wins = {
      increment: 1,
    };
  }

  if (outcome === "player_loss") {
    data.losses = {
      increment: 1,
    };
  }

  return prisma.run.update({
    where: {
      id: runId,
    },
    data,
  });
}

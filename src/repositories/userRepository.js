import { prisma } from "../db/prisma.js";

export function findByUsername(username) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

export function findById(id) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export function createUser(data) {
  return prisma.user.create({
    data,
  });
}

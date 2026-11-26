import { PrismaClient } from "@prisma/client";
import { heroes } from "../src/data/heroes.js";

const prisma = new PrismaClient();

async function main() {
  for (const hero of heroes) {
    await prisma.hero.create({
      data: {
        name: hero.name,
        attackPower: hero.attackPower,
        defensePower: hero.defensePower,
        maxHp: hero.maxHp,
        imageUrl: hero.imageUrl,
      },
    });
  }

  console.log("✅ Heroes seeded");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

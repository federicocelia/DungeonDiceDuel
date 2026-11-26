import { prisma } from "../src/database/prisma.js";
import { heroes } from "../src/data/heroes.js";

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

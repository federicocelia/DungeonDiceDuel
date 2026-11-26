import { heroes } from "../data/heroes.js";

export function getAllHeroes() {
  return heroes;
}

export function getHeroById(heroId) {
  const id = Number(heroId);

  return heroes.find((hero) => hero.id === id) || null;
}

export function getAvailableOpponents(playerHeroId) {
  return heroes.filter((hero) => hero.id !== Number(playerHeroId));
}

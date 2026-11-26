import { heroes } from "../data/heroes.js";
import { createDiceGameEngine } from "../domain/diceGameEngine.js";

const engine = createDiceGameEngine(heroes);

const {
  getHeroes,
  getHeroById,
  chooseComputerHero,
  startBattle,
  playRound,
  resetBattle,
} = engine;

export function getHeroesController(req, res) {
  res.json({
    heroes: getHeroes(),
  });
}

export function startBattleController(req, res) {
  const result = startBattle(req.body.heroId);
  res.json(result);
}

export function roundBattleController(req, res) {
  const result = playRound();
  res.json(result);
}

export function resetBattleController(req, res) {
  resetBattle();
  res.status(200).json({ message: "Battle reset." });
}

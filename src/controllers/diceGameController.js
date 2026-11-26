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
  try {
    res.json({
      heroes: getHeroes(),
    });
  } catch (error) {
    next(error);
  }
}

export function startBattleController(req, res) {
  try {
    const result = startBattle(req.body.heroId);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export function roundBattleController(req, res) {
  try {
    const result = playRound();
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export function resetBattleController(req, res) {
  try {
    resetBattle();
    res.status(200).json({ message: "Battle reset." });
  } catch (error) {
    next(error);
  }
}

import { heroes } from "../data/heroes.js";
import { createDiceGameEngine } from "../domain/diceGameEngine.js";

const engine = createDiceGameEngine(heroes);

export function getHeroes(req, res) {
  res.json({
    heroes: engine.getHeroes(),
  });
}

export function startBattle(req, res) {
  const result = engine.startBattle(req.body.heroId);
  res.json(result);
}

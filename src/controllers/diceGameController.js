import { createDiceGameEngine } from "../domain/diceGameEngine.js";
import * as runService from "../services/runService.js";

const engine = createDiceGameEngine();

const {
  getHeroes,
  getHeroById,
  chooseComputerHero,
  startBattle,
  playRound,
  resetBattle,
} = engine;

export async function getHeroesController(req, res, next) {
  try {
    res.json({
      heroes: await getHeroes(),
    });
  } catch (error) {
    next(error);
  }
}

export async function startBattleController(req, res, next) {
  try {
    req.session.userId = 1;

    const run = await runService.createRunForUser(req.session.userId);

    req.session.runId = run.id;

    const result = await startBattle(req.body.heroId);

    res.json(result);
  } catch (error) {
    console.error("START ERROR:", error);
    next(error);
  }
}

export async function roundBattleController(req, res, next) {
  try {
    const result = playRound();

    if (result.outcome !== "ongoing") {
      await runService.updateRunResult(req.session.runId, result.outcome);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function resetBattleController(req, res, next) {
  try {
    resetBattle();
    res.status(200).json({ message: "Battle reset." });
  } catch (error) {
    next(error);
  }
}

import express from "express";
import {
  getHeroesController,
  startBattleController,
  roundBattleController,
  resetBattleController,
} from "../controllers/diceGameController.js";

const router = express.Router();

router.get("/heroes", getHeroesController);
router.post("/battle/start", startBattleController);
router.post("/battle/round", roundBattleController);
router.post("/battle/reset", resetBattleController);

export default router;

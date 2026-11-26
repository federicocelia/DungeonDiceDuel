import express from "express";
import { getHeroes } from "../controllers/diceGameController.js";

const router = express.Router();

router.get("/heroes", getHeroes);

export default router;

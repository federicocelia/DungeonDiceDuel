import { Router } from "express";
import { meController } from "../controllers/meController.js";

const router = Router();

router.get("/", meController);

export default router;

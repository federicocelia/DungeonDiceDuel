import express from "express";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import diceGameRoutes from "./src/routes/diceGameRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", diceGameRoutes);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

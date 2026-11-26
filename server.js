import express from "express";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import diceGameRoutes from "./src/routes/diceGameRoutes.js";
import { errorMiddleware } from "./src/middleware/errorMiddleware.js";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,

    resave: false,
    saveUninitialized: false,

    cookie: {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use("/api", diceGameRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.use(errorMiddleware);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

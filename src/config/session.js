import session from "express-session";

const isProduction = process.env.NODE_ENV === "production";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,

  resave: false,
  saveUninitialized: false,

  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict",
    maxAge: ONE_DAY_MS,
  },
});

import { registerUser, loginUser } from "../services/authService.js";

export async function registerController(req, res, next) {
  try {
    const { name, username, password } = req.body;

    const result = await registerUser(name, username, password);

    if (result.error) {
      return res.status(400).json({
        error: result.error,
      });
    }

    req.session.userId = result.id;

    return res.status(201).json({
      message: "User registered",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Registration failed. Please try again.",
    });
  }
}

export async function loginController(req, res) {
  try {
    const { username, password } = req.body;

    const result = await loginUser(username, password);

    if (result.error === "Invalid credentials") {
      return res.status(401).json({
        error: result.error,
      });
    }

    if (result.error) {
      return res.status(400).json({
        error: result.error,
      });
    }

    req.session.userId = result.id;

    return res.status(200).json({
      message: "Logged in",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Login failed. Please try again.",
    });
  }
}

export function logoutController(req, res) {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        error: "Logout failed.",
      });
    }

    return res.status(200).json({
      message: "Logged out",
    });
  });
}

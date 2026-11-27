import { findById } from "../repositories/userRepository.js";

export async function meController(req, res) {
  try {
    if (!req.session.userId) {
      return res.status(200).json({
        isLoggedIn: false,
      });
    }

    const user = await findById(req.session.userId);

    if (!user) {
      return res.status(200).json({
        isLoggedIn: false,
      });
    }

    return res.status(200).json({
      isLoggedIn: true,
      name: user.name,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

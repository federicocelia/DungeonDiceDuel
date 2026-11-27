import bcrypt from "bcrypt";

import { findByUsername, createUser } from "../repositories/userRepository.js";

import {
  sanitizeAuthInput,
  validateRegisterInput,
  validateLoginInput,
} from "../validators/authValidation.js";

export async function registerUser(name, username, password) {
  const sanitized = sanitizeAuthInput(name, username, password);

  const validationError = validateRegisterInput(
    sanitized.name,
    sanitized.username,
    sanitized.password,
  );

  if (validationError) {
    return validationError;
  }

  const existingUser = await findByUsername(sanitized.username);

  if (existingUser) {
    return {
      error: "Username already in use.",
    };
  }

  const passwordHash = await bcrypt.hash(sanitized.password, 12);

  const user = await createUser({
    name: sanitized.name,
    username: sanitized.username,
    password: passwordHash,
  });

  return user;
}

export async function loginUser(username, password) {
  const sanitized = sanitizeAuthInput("", username, password);

  const validationError = validateLoginInput(
    sanitized.username,
    sanitized.password,
  );

  if (validationError) {
    return validationError;
  }

  const user = await findByUsername(sanitized.username);

  if (!user) {
    return {
      error: "Invalid credentials",
    };
  }

  const passwordMatch = await bcrypt.compare(sanitized.password, user.password);

  if (!passwordMatch) {
    return {
      error: "Invalid credentials",
    };
  }

  return user;
}

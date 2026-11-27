const USERNAME_REGEX = /^[a-zA-Z0-9_-]{1,20}$/;

export function sanitizeAuthInput(name, username, password) {
  return {
    name: typeof name === "string" ? name.trim().normalize("NFC") : "",

    username:
      typeof username === "string"
        ? username.trim().normalize("NFC").toLowerCase()
        : "",

    password: typeof password === "string" ? password.trim() : "",
  };
}

export function validateRegisterInput(name, username, password) {
  if (!name || !username || !password) {
    return {
      error: "All fields are required.",
    };
  }

  if (!USERNAME_REGEX.test(username)) {
    return {
      error:
        "Username must be 1–20 characters, using letters, numbers, _ or -.",
    };
  }

  return null;
}

export function validateLoginInput(username, password) {
  if (!username || !password) {
    return {
      error: "All fields are required",
    };
  }

  return null;
}

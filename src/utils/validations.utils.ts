export const isValidEmail = (email: string): boolean => {
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return false;
  }
  return true;
};

export const isValidPassword = (password: string): boolean => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

export const isValidUsername = (username: string): boolean => {
  // Username format validation (example: alphanumeric characters and underscores, 3-20 characters)
  if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
    return false;
  }
  return true;
};

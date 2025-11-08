const passwordError = (regEx, password) => {
  if (!regEx.test(password)) {
    if (password.length < 6)
      return "Your password needs to be at least 6 characters long";
    if (!/[A-Z]/.test(password))
      return "Your password must contain at least 1 upper-case letter";
    if (!/[a-z]/.test(password))
      return "Your password must contain at least 1 lower-case letter";
    return "";
  }
};

export default passwordError;

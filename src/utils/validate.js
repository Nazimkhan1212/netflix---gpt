export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let isNameValid;
  if (name?.length > 0) {
    isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  }
  if (!isNameValid && name !== undefined) return "Invalid name";
  if (!isEmailValid) return "Please enter a valid email";
  if (!isPasswordValid) return "Invalid password";

  return null;
};

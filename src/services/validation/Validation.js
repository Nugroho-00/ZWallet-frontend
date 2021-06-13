//Minimum eight characters, at least one letter and one number
export const validatePassword = password => {
  const checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return checkPassword.test(password);
};

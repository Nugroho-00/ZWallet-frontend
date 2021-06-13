//Minimum eight characters, at least one letter and one number
export const validatePassword = password => {
  const checkPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return checkPassword.test(password);
};

export const usernameValidation = input => {
  let reg = /^[a-z ,.'-]+$/i;

  if (input.length === 0) return 'Full name cannot be empty';

  if (input.length < 4) {
    return 'Full name must be at least 4 characters';
  }
  if (!reg.test(input)) {
    return 'Full name cannot contain number';
  }
};

export const emailValidation = input => {
  let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

  if (input.length === 0) return 'Email cannot be empty';

  if (!reg.test(input)) {
    return 'Wrong email format';
  }
};

export const phoneValidation = input => {
  if (input.substring(0) === '0') {
    return 'Wrong phone format';
  }
  if (input.length === 0) return 'Phone number cannot be empty';
  if (input.length > 11) {
    return 'Max phone number length is 12';
  }
  if (input.length < 9) {
    return 'Min phone number length is 10';
  }
};

export const passwordValidation = (input, compare) => {
  let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%^*#?&])[A-Za-z\d@$!%^*#?&]{8,}$/;

  if (input.length === 0) return 'Password cannot be empty';

  if (input.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (!reg.test(input)) {
    return 'Password must contain letter, number and special character';
  }
  if (compare) {
    if (input !== compare) {
      return "Password didn't match";
    }
  }
};

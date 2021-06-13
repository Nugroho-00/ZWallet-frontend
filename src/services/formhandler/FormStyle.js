import classes from '../../screens/auth/signup/Styles';

export const FormStyle = (type, warning, input) => {
  // console.log(warning, input);
  if (type === 'form') {
    if (warning) {
      return {...classes.inputbox, borderBottomColor: 'rgba(255, 91, 55, 1)'};
    }
    if (!warning && input) {
      return {...classes.inputbox, borderBottomColor: 'rgba(99, 121, 244, 1)'};
    }
    if (!warning && !input) {
      return classes.inputbox;
    }
  }
  if (type === 'phone') {
    if (warning) {
      return {
        ...classes.inputboxphone,
        borderBottomColor: 'rgba(255, 91, 55, 1)',
      };
    }
    if (!warning && input) {
      return {
        ...classes.inputboxphone,
        borderBottomColor: 'rgba(99, 121, 244, 1)',
      };
    }
    if (!warning && !input) {
      return classes.inputboxphone;
    }
  }
  if (type === 'icon') {
    if (warning) {
      return 'rgba(255, 91, 55, 1)';
    }
    if (!warning && input) {
      return 'rgba(99, 121, 244, 1)';
    }
    if (!warning && !input) {
      return '#A9A9A9';
    }
  }
};

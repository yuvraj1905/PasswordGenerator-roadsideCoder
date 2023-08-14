export const strengthCalc = (length) => {
  if (length < 8) {
    return "Weak";
  } else if (length < 13) {
    return "Good";
  } else if (length < 17) {
    return "Strong";
  } else if (length < 21) {
    return "Very Strong";
  } else {
    return "Good";
  }
};

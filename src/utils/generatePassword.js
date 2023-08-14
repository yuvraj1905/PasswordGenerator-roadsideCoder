export const generatePassword = (length, condtions) => {
  const conditionsToInclude = condtions?.filter(({ state }) => state === true);

  if (conditionsToInclude?.length === 0) {
    return "";
  }

  let charset = "";
  let newPass = [];

  conditionsToInclude.forEach((obj) => {
    switch (obj?.title) {
      case "Include Uppercase Letters":
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;

      case "Include Lowercase Letters":
        charset += "abcdefghijklmnopqrstuvwxyz";
        break;

      case "Include Numbers":
        charset += "1234567890";
        break;

      case "Include Special characters":
        charset += "/!~@#$%&*";
        break;

      default:
        break;
    }
  });

  for (let i = 0; i < length; i++) {
    newPass.push(charset[Math.floor(Math.random() * charset.length)]);
  }
  return newPass.join("");
};

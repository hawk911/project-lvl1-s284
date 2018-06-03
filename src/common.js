export const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;
export const getRandomOperator = (operators) => {
  const index = getRandomInt(0, operators.length - 1);
  return operators[index];
};

export const getResultOperators = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  return result;
};

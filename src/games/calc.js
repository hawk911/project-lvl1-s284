import brainGames from '..';
import getRandomInt from '../common';

const operators = ['+', '-', '*'];
const info = 'What is the result of the expression?';


const getAnswer = (num1, num2, operator) => {
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

const calcGame = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const index = getRandomInt(0, 2);
  const question = `${num1} ${operators[index]} ${num2}`;
  const rigthAnswer = String(getAnswer(num1, num2, operators[index]));
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(calcGame, info);

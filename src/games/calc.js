import brainGames from '..';
import getRandomInt from '../common';

const operators = ['+', '-', '*'];
const info = 'What is the result of the expression?';

const getAnswer = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const calcGame = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const index = getRandomInt(0, 2);
  const question = `${num1} ${operators[index]} ${num2}`;
  const answerRight = String(getAnswer(num1, num2, operators[index]));
  return {
    question,
    answerRight,
  };
};

export default () => brainGames(calcGame, info);

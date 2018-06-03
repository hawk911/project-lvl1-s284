import brainGames from '..';
import { getRandomInt, getRandomOperator, getResultOperators } from '../common';

const operators = ['+', '-', '*'];
const info = 'What is the result of the expression?';

const calcGame = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const randomOperator = getRandomOperator(operators);
  const question = `${num1} ${randomOperator} ${num2}`;
  const rigthAnswer = String(getResultOperators(num1, num2, randomOperator));
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(calcGame, info);

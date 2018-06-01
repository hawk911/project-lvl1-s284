import gameEngine from '..';
import getRandomInt from '../common';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};
const task = 'Find the greatest common divisor of given numbers.';
const gcdGame = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const question = `${num1} ${num2}`;
  const rigthAnswer = String(gcd(num1, num2));
  return {
    question,
    rigthAnswer,
  };
};
export default () => gameEngine(gcdGame, task);

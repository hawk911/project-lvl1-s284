import brainGames from '..';
import { getRandomInt } from '../common';

const info = 'Balance the given number.';
const arrOfNumbers = num => ((String(num)).split('')).map(item => Number(item));
const balance = (num) => {
  const arr = arrOfNumbers(num);
  let points = arr.reduce((sum, item) => sum + item);
  const zeroArr = arr.map(item => item - item);
  while (points !== 0) {
    for (let i = 0; i < arr.length; i += 1) {
      zeroArr[i] += 1;
      points -= 1;
      if (points === 0) break;
    }
  }
  const balanceNum = zeroArr.reverse().join('');
  return balanceNum;
};

const balanceGame = () => {
  const num1 = getRandomInt(100, 1000);
  const question = `${num1}`;
  const rigthAnswer = String(balance(num1));
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(balanceGame, info);

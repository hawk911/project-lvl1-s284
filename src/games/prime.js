import brainGames from '..';
import { getRandomInt } from '../common';

const info = 'Is this number prime';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (acc) => {
    if (number % acc === 0) {
      return false;
    }
    if (acc > number / 2) {
      return true;
    }
    return isPrime(acc + 1);
  };
  return iter(2);
};

const primeGame = () => {
  const num = getRandomInt(1, 1000);
  const question = `${num}`;
  const rigthAnswer = isPrime(num) ? 'yes' : 'no';
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(primeGame, info);

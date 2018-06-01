import brainGames from '..';
import getRandomInt from '../common';

const info = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const evenGame = () => {
  const question = getRandomInt(1, 50);
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(evenGame, info);

import brainGames from '..';
import { getRandomInt, getResultOperators } from '../common';

const lengthArray = 10;
const info = 'What number is missing in this progression?';

const arrayForQuestion = (sequenceArray, indexForHideArray) => {
  const hideArray = [];
  for (let i = 0; i < sequenceArray.length; i += 1) {
    if (i === indexForHideArray) {
      hideArray[i] = '..';
    } else {
      hideArray[i] = sequenceArray[i];
    }
  }
  return hideArray;
};

const progressionGame = () => {
  const sequenceArray = [];
  const indexForHideArray = getRandomInt(0, lengthArray);
  let itemArray = getRandomInt(-10, 10);
  const step = getRandomInt(-10, 10);
  for (let i = 0; i < lengthArray; i += 1) {
    sequenceArray[i] = itemArray;
    itemArray = getResultOperators(itemArray, step, '+');
  }
  const rigthAnswer = String(sequenceArray[indexForHideArray]);
  const question = arrayForQuestion(sequenceArray, indexForHideArray);
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(progressionGame, info);

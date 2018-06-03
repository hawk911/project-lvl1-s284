import brainGames from '..';
import { getRandomInt, getRandomOperator, getResultOperators } from '../common';

const lengthArray = 10;
const randomOperator = getRandomOperator(['+', '-']);
const info = 'What number is missing in this progression?';

const getQuestion = (sequenceArray, indexForHideArray) => {
  const hideArray = [];
  for (let i = 0; i < sequenceArray.length; i += 1) {
    if (i === indexForHideArray) {
      hideArray[i] = '..';
    } else {
      hideArray[i] = sequenceArray[i];
    }
  }
  return hideArray.join(' ');
};

const progressionGame = () => {
  const sequenceArray = [];
  const indexForHideArray = getRandomInt(0, lengthArray);
  let itemArray = getRandomInt(1, 10);
  const progressionNumber = getRandomInt(1, 10);
  for (let i = 0; i < lengthArray; i += 1) {
    sequenceArray[i] = itemArray;
    itemArray = getResultOperators(itemArray, progressionNumber, randomOperator);
  }
  const rigthAnswer = String(sequenceArray[indexForHideArray]);
  const question = getQuestion(sequenceArray, indexForHideArray);
  return {
    question,
    rigthAnswer,
  };
};

export default () => brainGames(progressionGame, info);

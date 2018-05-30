import readlineSync from 'readline-sync';

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  return userName;
};

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};
const isEven = num => num % 2 === 0;
const question = (num) => {
  const answer = readlineSync.question(`Question: ${num}\n`);
  console.log(`Your answer: ${answer}`);
  return answer;
};

export const brainEven = (num) => {
  const userName = askName();
  const countQuestions = 3;
  let countRightAnswersUser = 0;
  for (let i = 0; i < countQuestions; i += 1) {
    const randomNumber = getRandomInt(1, 50);
    const answerUser = question(randomNumber);
    const answerRight = isEven(randomNumber) ? 'yes' : 'no';
    if (answerUser === answerRight) {
      console.log('Correct!');
      countRightAnswersUser += 1;
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerRight}.`);
      console.log(`Let's try again, ${userName}`);
    }
    if (countQuestions === countRightAnswersUser) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
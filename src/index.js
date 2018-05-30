import readlineSync from 'readline-sync';

const countQuestions = 3;

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
};

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;
const isEven = num => num % 2 === 0;

export const brainEven = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);

  let countRightAnswersUser = 0;
  for (let i = 0; i < countQuestions; i += 1) {
    const randomNumber = getRandomInt(1, 50);
    const answerUser = readlineSync.question(`Question: ${randomNumber}\n`);
    console.log(`Your answer: ${answerUser}`);
    const answerRight = isEven(randomNumber) ? 'yes' : 'no';
    if (answerUser === answerRight) {
      console.log('Correct!');
      countRightAnswersUser += 1;
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerRight}.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (countQuestions === countRightAnswersUser) {
    console.log(`Congratulations, ${userName}!`);
  }
};

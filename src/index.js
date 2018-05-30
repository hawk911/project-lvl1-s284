import readlineSync from 'readline-sync';

const countQuestions = 3;

const readUserName = () => readlineSync.question('May I have your name? ');
const greeting = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
};

export const askName = () => {
  const userName = readUserName();
  console.log(`Hello ${userName}!\n`);
};

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;
const isEven = num => num % 2 === 0;

export const brainEven = () => {
  greeting();
  const userName = readUserName();
  console.log(`Hello ${userName}!\n`);

  for (let i = 0; i < countQuestions; i += 1) {
    const randomNumber = getRandomInt(1, 50);
    const answerUser = readlineSync.question(`Question: ${randomNumber}\n`);
    console.log(`Your answer: ${answerUser}`);
    const answerRight = isEven(randomNumber) ? 'yes' : 'no';
    if (answerUser === answerRight) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerRight}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const calc = () => {
  greeting();
  const userName = readUserName();
  console.log(`Hello ${userName}!\n`);
};

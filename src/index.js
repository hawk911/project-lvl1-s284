import readlineSync from 'readline-sync';

const countQuestions = 3;
const operators = ['+', '-', '*'];

const readUserName = () => readlineSync.question('May I have your name? ');
const getRandomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;
const getOperator = () => operators[Math.floor(Math.random() * operators.length)];
const isEven = num => num % 2 === 0;
const greetingInfo = (info) => {
  console.log('Welcome to Brain Games!');
  console.log(info);
};
const lostInfo = (userName, answerUser, answerRight) =>{
  console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerRight}.`);
  console.log(`Let's try again, ${userName}`);
}
const getAnswer = (num1, num2, randomOperator) => {
  if (randomOperator === '+') {
    return num1 + num2;
  } else if (randomOperator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};


export const askName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readUserName();
  console.log(`Hello ${userName}!\n`);
};

export const brainEven = () => {
  greetingInfo('Answer "yes" if number even otherwise answer "no".');
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
      lostInfo(userName, answerUser, answerRight);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const calc = () => {
  greetingInfo('What is the result of the expression?');
  const userName = readUserName();
  const randomOperator = getOperator();
  console.log(`Hello ${userName}!\n`);

  for (let i = 0; i < countQuestions; i += 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const answerUser = readlineSync.question(`Question: ${num1} ${randomOperator} ${num2}\n`);
    console.log(`Your answer: ${answerUser}`);
    const answerRight = getAnswer(num1, num2, randomOperator);
    if (Number(answerUser) === answerRight) {
      console.log('Correct!');
    } else {
      lostInfo(userName, answerUser, answerRight);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

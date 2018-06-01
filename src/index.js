import readlineSync from 'readline-sync';

export const countQuestions = 3;

export default (gameBrain, info) => {
  console.log('Welcome to Brain Games!');
  console.log(info);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i < countQuestions; i += 1) {
    const { question, answerRight } = gameBrain();
    const answerUser = readlineSync.question(`Question: ${question} \n`);
    console.log(`Your answer: ${answerUser}`);
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

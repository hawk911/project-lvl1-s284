import readlineSync from 'readline-sync';

export const questonsCount = 3;

export default (gameBrain, info) => {
  console.log('Welcome to Brain Games!');
  console.log(info);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!\n`);
  for (let i = 0; i < questonsCount; i += 1) {
    const { question, rigthAnswer } = gameBrain();
    const userAnswer = readlineSync.question(`Question: ${question} \n`);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

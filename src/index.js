import readlineSync from 'readline-sync';

export const identifyUser = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};
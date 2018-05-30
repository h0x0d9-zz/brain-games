#!/usr/bin/env node

import readlineSync from 'readline-sync';

const identifyUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

console.log('Welcome to the Brain Games!');
identifyUser();

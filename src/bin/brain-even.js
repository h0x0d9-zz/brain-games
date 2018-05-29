#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../generateNumber';

const isEven = num => num % 2 === 0;

const rule = 'Answer "yes" if number even otherwise answer "no:.\n';
const numberOfTasks = 3;

const askIsEven = () => {
  const num = generateNumber(1, 100);
  const question = `${num}`;
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

makeGame(askIsEven, numberOfTasks, rule);
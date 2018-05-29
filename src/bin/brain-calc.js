#!/usr/bin/env node

import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../generateNumber';

const rule = 'What is the result of the expression?\n';
const numberOfTasks = 3;
const valueMin = 1;
const valueMax = 100;

const generateExpression = (num1, num2) => {
  switch (generateNumber(1, 3)) {
    case 1:
      return cons(`${num1} + ${num2}`, `${num1 + num2}`);
    case 2:
      return cons(`${num1} - ${num2}`, `${num1 - num2}`);
    default:
      return cons(`${num1} * ${num2}`, `${num1 * num2}`);
  }
};

const askCalc = () => {
  const num1 = generateNumber(valueMin, valueMax);
  const num2 = generateNumber(valueMin, valueMax);
  return generateExpression(num1, num2);
};

makeGame(askCalc, numberOfTasks, rule);
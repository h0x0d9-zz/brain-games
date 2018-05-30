import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import { makeGame } from '..';

const rule = 'Find the greatest common divisor of given numbers.';
const valueMin = 1;
const valueMax = 100;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const askgcd = () => {
  const num1 = generateNumber(valueMin, valueMax);
  const num2 = generateNumber(valueMin, valueMax);

  const question = `${num1} ${num2}`;
  const rightAnswer = String(getGcd(num1, num2));

  return cons(question, rightAnswer);
};

export default () => makeGame(askgcd, rule);

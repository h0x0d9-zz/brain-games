import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import { makeGame } from '..';

const rule = 'Balance the given number.\n';
const valueMin = 10;
const valueMax = 1000;

const balanceNumber = (num) => {
  const digitizedNumber = String(num).split('').map(Number);

  const iter = (digits) => {
    const acc = digits.sort();
    const min = digits[0];
    const max = digits[digits.length - 1];

    if (max - min > 1) {
      acc[digits.length - 1] -= 1;
      acc[0] += 1;

      return iter(acc);
    }

    return acc.join('');
  };

  return Number(iter(digitizedNumber));
};

const askBalance = () => {
  const num = generateNumber(valueMin, valueMax);
  const question = `${num}`;
  const rightAnswer = String(balanceNumber(num));

  return cons(question, rightAnswer);
};

export default () => makeGame(askBalance, rule);

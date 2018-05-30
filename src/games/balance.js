import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import { makeGame } from '..';

const rule = 'Balance the given number.';
const valueMin = 10;
const valueMax = 1000;

const balanceNumber = (num) => {
  const digitizedNumber = String(num).split('').map(Number);
  let sortedNumbers = digitizedNumber.sort();

  while (sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0] > 1) {
    sortedNumbers[sortedNumbers.length - 1] -= 1;
    sortedNumbers[0] += 1;
    sortedNumbers = sortedNumbers.sort();
  }

  return Number(sortedNumbers.join(''));
};

const askBalance = () => {
  const num = generateNumber(valueMin, valueMax);
  const question = `${num}`;
  const rightAnswer = String(balanceNumber(num));

  return cons(question, rightAnswer);
};

export default () => makeGame(askBalance, rule);

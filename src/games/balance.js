import { cons } from 'hexlet-pairs';
import generateNumber from '../utils';
import { makeGame } from '..';

const rule = 'Balance the given number.';
const valueMin = 10;
const valueMax = 1000;

const balance = (num) => {
  if (num < 10) {
    return num;
  }

  const stringifiedNumber = String(num);
  const numberOfSegments = stringifiedNumber.length;
  const lengthsSum = stringifiedNumber.split('').reduce((acc, element) => (acc + Number(element)), 0);
  const baseLength = Math.floor(lengthsSum / numberOfSegments);
  const remain = lengthsSum - (baseLength * numberOfSegments);
  const numberOfBaseSegments = numberOfSegments - remain;
  const baseSegments = String(baseLength).repeat(numberOfBaseSegments);
  const remainSegments = String(baseLength + 1).repeat(remain);

  return Number(`${baseSegments}${remainSegments}`);
};

const makeGameData = () => {
  const num = generateNumber(valueMin, valueMax);
  const question = `${num}`;
  const rightAnswer = String(balance(num));

  return cons(question, rightAnswer);
};

export default () => makeGame(makeGameData, rule);

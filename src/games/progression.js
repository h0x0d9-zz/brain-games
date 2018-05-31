import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const rule = 'What number is missing in this progression?';
const valueMin = 1;
const valueMax = 50;
const numberOfProgressionTerms = 10;

const generateGameData = (firstTerm, difference, numberOfTerms, skippedPosition) => {
  const calculateTerm = (first, dif, pos) => first + ((pos - 1) * dif);

  const iter = (counter, progression, skippedTerm) => {
    if (counter > numberOfTerms) {
      return cons(progression, `${skippedTerm}`);
    }

    if (counter === skippedPosition) {
      return iter(counter + 1, `${progression} ..`, calculateTerm(firstTerm, difference, counter));
    }

    return iter(counter + 1, `${progression} ${calculateTerm(firstTerm, difference, counter)}`, skippedTerm);
  };

  return iter(1, '', '');
};

const askProgression = () => {
  const firstTerm = generateNumber(valueMin, valueMax);
  const difference = generateNumber(valueMin, valueMax);
  const skippedPosition = generateNumber(1, numberOfProgressionTerms);

  return generateGameData(firstTerm, difference, numberOfProgressionTerms, skippedPosition);
};

export default () => makeGame(askProgression, rule);

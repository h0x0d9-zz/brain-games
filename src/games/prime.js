import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const isPrime = (num) => {
  const iter = (devider) => {
    if (devider > num / 2) {
      return true;
    }

    if (num % devider === 0) {
      return false;
    }

    return iter(devider + 1);
  };

  if (num <= 1) {
    return false;
  }

  return iter(2);
};

const rule = 'Answer "yes" if number prime otherwise answer "no".';

const askIsPrime = () => {
  const num = generateNumber(1, 100);
  const question = `${num}`;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => makeGame(askIsPrime, rule);

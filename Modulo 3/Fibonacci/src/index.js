"use strict";

const fibonacci = () => {
  let previousNum = 0;
  let actualNum = 1;
  let nextNum = 0;

  let sequence = [0, 1];

  while (nextNum < 350) {
    nextNum = previousNum + actualNum;

    previousNum = actualNum;
    actualNum = nextNum;

    sequence.push(nextNum);
  }

  return sequence;
};

const isFibonnaci = (num) => {
  const numbers = fibonacci();

  return numbers.includes(num);
};


module.exports = {
  fibonacci,
  isFibonnaci,
};

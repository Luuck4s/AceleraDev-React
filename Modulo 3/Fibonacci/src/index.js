"use strict";

const fibonacci = () => {
  let sequence = [0, 1];

  while (sequence[sequence.length - 1] < 350) {
    sequence.push(
      sequence[sequence.length - 2] + sequence[sequence.length - 1]
    );
  }

  return sequence;
};

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci,
};

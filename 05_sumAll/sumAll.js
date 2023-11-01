const sumAll = function (number1, number2) {
  if (number1 < 0 || number2 < 0) return "ERROR";
  if (!Number.isInteger(number1) || !Number.isInteger(number2)) return "ERROR";

  let sum = 0;
  let lowerLimit = number1 < number2 ? number1 : number2;
  let upperLimit = number1 < number2 ? number2 : number1;

  for (let i = lowerLimit; i <= upperLimit; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

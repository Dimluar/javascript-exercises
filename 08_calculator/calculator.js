const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, value) => sum + value, 0);
};

const multiply = function (array) {
  return array.reduce((product, value) => product * value, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (value) {
  return value === 0 ? 1 : value * factorial(value - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

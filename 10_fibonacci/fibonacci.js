const fibonacci = function (place) {
  place = +place;

  if (place < 0) return "OOPS";

  switch (place) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(place - 1) + fibonacci(place - 2);
      break;
  }
};

// Do not edit below this line
module.exports = fibonacci;

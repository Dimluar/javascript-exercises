const reverseString = function (text) {
  let char = text.split("");
  let result = "";

  for (let i = char.length - 1; i >= 0; i--) {
    result += char[i];
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;

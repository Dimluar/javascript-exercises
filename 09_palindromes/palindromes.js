const palindromes = function (str) {
  let newStr = str.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();
  return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

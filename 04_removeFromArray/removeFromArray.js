const removeFromArray = function (array, ...values) {
  for (value of values) {
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) array.splice(i, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

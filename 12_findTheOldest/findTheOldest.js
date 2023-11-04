const findTheOldest = function (array) {
  let arrayCopy = array.slice();
  arrayCopy.sort((a, b) => {
    let aAge = a.hasOwnProperty("yearOfDeath")
      ? a.yearOfDeath - a.yearOfBirth
      : new Date().getFullYear() - a.yearOfBirth;
    let bAge = b.hasOwnProperty("yearOfDeath")
      ? b.yearOfDeath - b.yearOfBirth
      : new Date().getFullYear() - b.yearOfBirth;

    return bAge - aAge;
  });
  return arrayCopy[0];
};

// Do not edit below this line
module.exports = findTheOldest;

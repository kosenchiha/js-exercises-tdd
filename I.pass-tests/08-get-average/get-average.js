// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(arr) {
  var copyArr = arr.slice();
  var arrOfNumbers = copyArr.filter(el => typeof el === "number");
  return arrOfNumbers.reduce((a, b) => a + b) / arrOfNumbers.length;
}

module.exports = average;

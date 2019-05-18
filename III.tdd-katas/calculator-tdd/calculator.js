function add(stringOfNumbers) {
  // for an empty string function will return 0
  if (!stringOfNumbers.length) {
    return 0;
  }

  var delimiter = ",";
  if (stringOfNumbers[0] === "/") {
    delimiter = stringOfNumbers[2];
    stringOfNumbers = stringOfNumbers.slice(stringOfNumbers.indexOf("\n") + 1);
  }
  if (stringOfNumbers.includes("\n")) {
    stringOfNumbers = stringOfNumbers.replace(/(\r\n|\n|\r)/gm, delimiter);
  }

  var arrayOfNumbers = stringOfNumbers.split(delimiter).map(el => Number(el));

  if (arrayOfNumbers.some(num => num < 0)) {
    return (
      "negatives not allowed: " + arrayOfNumbers.filter(num => num < 0).join()
    );
  } else {
    return arrayOfNumbers.filter(num => num < 1000).reduce((a, b) => a + b);
  }
}

module.exports = add;

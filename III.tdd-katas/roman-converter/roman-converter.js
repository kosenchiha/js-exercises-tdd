function convertToOldRoman(number) {
  var answer = "";
  var arabicRomanOldCorrespondance = [
    { decimal: 1000, roman: "M" },
    { decimal: 500, roman: "D" },
    { decimal: 100, roman: "C" },
    { decimal: 50, roman: "L" },
    { decimal: 10, roman: "X" },
    { decimal: 5, roman: "V" },
    { decimal: 1, roman: "I" }
  ];
  arabicRomanOldCorrespondance.forEach(function(numeral) {
    var numeralCount = (number - (number % numeral.decimal)) / numeral.decimal;
    if (numeralCount > 0) {
      answer = answer + numeral.roman.repeat(numeralCount);
      number = number - numeralCount * numeral.decimal;
    }
  });
  return answer;
}
function convertToNewRoman(number) {
  var answer = "";
  var arabicRomanNewCorrespondance = [
    { decimal: 1000, roman: "M" },
    { decimal: 900, roman: "CM" },
    { decimal: 500, roman: "D" },
    { decimal: 400, roman: "CD" },
    { decimal: 100, roman: "C" },
    { decimal: 90, roman: "XC" },
    { decimal: 50, roman: "L" },
    { decimal: 40, roman: "XL" },
    { decimal: 10, roman: "X" },
    { decimal: 9, roman: "IX" },
    { decimal: 5, roman: "V" },
    { decimal: 4, roman: "IV" },
    { decimal: 1, roman: "I" }
  ];
  arabicRomanNewCorrespondance.forEach(function(numeral) {
    var numeralCount = (number - (number % numeral.decimal)) / numeral.decimal;
    if (numeralCount > 0) {
      answer = answer + numeral.roman.repeat(numeralCount);
      number = number - numeralCount * numeral.decimal;
    }
  });
  return answer;
}

module.exports = { convertToOldRoman, convertToNewRoman };

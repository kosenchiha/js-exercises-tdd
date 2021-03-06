function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character.toLowerCase() !== "a" &&
      character.toLowerCase() !== "o" &&
      character.toLowerCase() !== "i" &&
      character.toLowerCase() !== "e" &&
      character.toLowerCase() !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}
console.log(removeVowels("Vicky"));
module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/

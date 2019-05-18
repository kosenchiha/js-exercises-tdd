var removeVowelsForWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  expect(removeVowelsForWords(["Irina", "Etza", "Daniel"])).toEqual([
    "rn",
    "tz",
    "Dnl"
  ]); // Arrange
  // Act
  // Assert
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

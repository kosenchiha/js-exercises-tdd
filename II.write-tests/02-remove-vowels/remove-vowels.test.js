var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  expect(removeVowels("samuel")).toBe("sml");
  expect(removeVowels("vicky")).toBe("vcky");
  // Arrange
  // Act
  // Assert
});

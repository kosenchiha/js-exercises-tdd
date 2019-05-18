var greetPeople = require("./greet-people.js");
test("print list of names prefixed with Hello", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  expect(greetPeople(mentors)).toBe("Hello IrinaAshleighEtza");
  // Arrange
  // Act
  // Assert
});

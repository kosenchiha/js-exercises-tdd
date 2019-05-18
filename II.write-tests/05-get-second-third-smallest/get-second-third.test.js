var getSecondAndThird = require("./get-second-third");
test("get the second and third small numbers", function() {
  var input = [90, 5, 11, 8, 6];
  var answ = [6, 8];
  var unchangedInput = [90, 5, 11, 8, 6];
  var secondAndThird = getSecondAndThird(input);
  expect(secondAndThird).toEqual(answ);
  expect(input).toEqual(unchangedInput);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

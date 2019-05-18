var getLargestNumber = require("./largest-number");
test("get largest number", function() {
  var input = [3, 21, 88, 4, 36];
  var arrNotChanged = [3, 21, 88, 4, 36];
  var output = getLargestNumber(input);
  var result = 88;
  expect(output).toBe(88);
  expect(input).toEqual(arrNotChanged);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

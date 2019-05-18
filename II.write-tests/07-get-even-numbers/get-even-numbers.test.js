var getEven = require("./get-even-numbers");
test("get even numbers", function() {
  expect(getEven([22, 13, 73, 82, 4])).toEqual([22, 82, 4]);
  expect(getEven([2, 3, 70, 8, 41])).toEqual([2, 70, 8]);
});
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

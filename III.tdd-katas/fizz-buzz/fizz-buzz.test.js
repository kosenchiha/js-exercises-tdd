var fizzbuzz = require("./fizz-buzz");

test("prints 1", function() {
  var result = fizzbuzz(1);
  expect(result).toEqual("1");
});

test("prints 1,2", function() {
  var result = fizzbuzz(2);
  expect(result).toEqual("1, 2");
});
//  Test for step 1
// test("prints result", function() {
//   var result = fizzbuzz(15);
//   var exectedResult =
//     "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz";
//   expect(result).toEqual(exectedResult);
// });

test("prints result", function() {
  var result = fizzbuzz(23);
  var exectedResult =
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, Fizz, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, Fizz";
  expect(result).toEqual(exectedResult);
});

//What about 51 ? It is divisible by 3 and has 5 in it.
//I think because the condition about divisibility that goes first should be applyed
test("if a number is 51 contains 5 and divisible by 3", function() {
  var resultFor51 = fizzbuzz(51);
  var value51 = resultFor51.slice(resultFor51.length - 4, resultFor51.length);
  expect(value51).toBe("Fizz");
});

test("if a number is 310 contains 3 and divisible by 5", function() {
  var resultFor310 = fizzbuzz(310);
  var value310 = resultFor310.slice(
    resultFor310.length - 4,
    resultFor310.length
  );
  expect(value310).toBe("Fizz");
});

test("if a number is 53 contains 3&5", function() {
  var resultFor53 = fizzbuzz(53);
  var value53 = resultFor53.slice(resultFor53.length - 4, resultFor53.length);
  expect(value53).toBe("Fizz");
});
test("if a number is 511 - contains 5", function() {
  var resultFor511 = fizzbuzz(511);
  var value511 = resultFor511.slice(
    resultFor511.length - 4,
    resultFor511.length
  );
  expect(value511).toBe("Buzz");
});

test("if a number is 700 - divisible by 5", function() {
  var resultFor700 = fizzbuzz(700);
  var value700 = resultFor700.slice(
    resultFor700.length - 4,
    resultFor700.length
  );
  expect(value700).toBe("Buzz");
});

test("if a number is 1035 is divisible by 3, 5 and contains 3&5", function() {
  var resultFor1035 = fizzbuzz(1035);
  var value1035 = resultFor1035.slice(
    resultFor1035.length - 8,
    resultFor1035.length
  );
  expect(value1035).toBe("FizzBuzz");
});

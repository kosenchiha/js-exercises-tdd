var add = require("./calculator");
test("add number in a string", () => expect(add("")).toBe(0));

test("add number in a string", () => expect(add("1")).toBe(1));

test("add number in a string", () => expect(add("1,2")).toBe(3));

test("add number in a string", () => expect(add("2,0,1,20,15")).toBe(38));
test("string has only one large number", () => expect(add("205")).toBe(205));
test("string with lines between numbers", () => expect(add("1\n2,3")).toBe(6));
test("string with lines between numbers", () =>
  expect(add("1\n2,3,7\n7")).toBe(20));
test("string with different delimiters", () =>
  expect(add("//;\n1;2;6")).toBe(9));
test("string with different delimiters", () =>
  expect(add("//;\n1;2;6\n9;12")).toBe(30));
test("string with different delimiters", () =>
  expect(add("//;\n1;2;6\n9;12")).toBe(30));
test("string with different delimiters", () =>
  expect(add("//.\n1.2.6\n9.12")).toBe(30));
test("string with different delimiters", () =>
  expect(add("//+\n1+2+6\n9+12")).toBe(30));
test("string with different delimiters", () =>
  expect(add("//+\n1+2+6\n9+1200+12")).toBe(30));

test("negatives not allowed", () =>
  expect(add("1,4,-1")).toBe("negatives not allowed: -1"));
test("negatives not allowed", () =>
  expect(add("//;\n-100;2;6\n9;-120")).toBe(
    "negatives not allowed: -100,-120"
  ));

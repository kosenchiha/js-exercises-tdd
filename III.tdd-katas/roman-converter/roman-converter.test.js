var { convertToOldRoman, convertToNewRoman } = require("./roman-converter");
test("convert to old roman", () => {
  expect(convertToOldRoman(4)).toBe("IIII");
});

test("convert to old roman", () => {
  expect(convertToOldRoman(29)).toBe("XXVIIII");
});

test("convert to old roman", () => {
  expect(convertToOldRoman(2778)).toBe("MMDCCLXXVIII");
});

test("convert to old roman", () => {
  expect(convertToOldRoman(1021)).toBe("MXXI");
});

test("convert to new roman", () => {
  expect(convertToNewRoman(944)).toBe("CMXLIV");
});

test("convert to new roman", () => {
  expect(convertToNewRoman(99)).toBe("XCIX");
});

test("convert to new roman", () => {
  expect(convertToNewRoman(440)).toBe("CDXL");
});

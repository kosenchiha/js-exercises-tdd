////      tests for step 1
var passwordVerifier = require("./password-verifier");
// test("is password larger than 8 chars", () =>
//   expect(passwordVerifier("Hello")).toBe(
//     "password should be larger than 8 chars"
//   ));

// test("is password has atleast one upper case letter", () =>
//   expect(passwordVerifier("helloooooo")).toBe(
//     "password should have one uppercase letter at least"
//   ));

// test("is password has atleast one lower case letter", () =>
//   expect(passwordVerifier("HELLOWORLD")).toBe(
//     "password should have one lowercase letter at least"
//   ));
// test("is password has atleast one number", () =>
//   expect(passwordVerifier("HELLOWORld")).toBe(
//     "password should have one number at least"
//   ));
// test("is password verifed", () =>
//   expect(passwordVerifier("heLLOWORld215")).toBe("your password is accepted"));

///   tests for step 2
test("is password verifed", () =>
  expect(passwordVerifier("heLLOWORld215")).toBe("your password is valid"));

test("password doesn't contain lower case letter", () =>
  expect(passwordVerifier("HELLO2584")).toBe(
    "password should have one lowercase letter at least"
  ));

test("password is less than 8chars and without upper case", () =>
  expect(passwordVerifier("helo284")).toBe(
    "password should be larger than 8 chars\npassword should have one uppercase letter at least"
  ));

test("password ", () =>
  expect(passwordVerifier("heloOO")).toBe(
    "password should be larger than 8 chars\npassword should have one number at least"
  ));

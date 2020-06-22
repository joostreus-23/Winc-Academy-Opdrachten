
const functions = require("./functions.js");

test("Test voor genoeg karakters in password", () => {

  expect(functions.isLessThan8Chars("henk")).toBe(true);
});


test("Test voor password in niet null", () => {

  expect(functions.isNotBlank("")).toBe(false);
});


test("Test voor password 1 of meer uppercase karakters", () => {

  expect(functions.hasUppercase("Henk")).toBe(true);
});

test("Test voor password 1 of meer lowercase karakters", () => {

  expect(functions.hasLowercase("Henk")).toBe(true);
});

test("Test voor password 1 of meer cijfers", () => {

  expect(functions.hasDigit("Henk")).toBe(false);
});

test("Test voor passwordVerifier", () => {

  let input = "HENKie23"
  let output = functions.passwordVerifier(input).valid;
  let score = functions.passwordVerifier(input).score;
  console.log(score);

  expect(score).toBeGreaterThanOrEqual(3)
  expect(output).toBe(true);
})
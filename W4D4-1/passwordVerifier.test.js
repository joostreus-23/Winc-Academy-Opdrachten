
const check = require("./passwordVertifier.js");


test("Test voor passwordVerifier", () => {

    let input = "HENKie23"
    let output = check.passwordVerifier(input).valid;
    let score = check.passwordVerifier(input).score;
    console.log(score);

    expect(score).toBeGreaterThanOrEqual(3)
    expect(output).toBe(true);
})
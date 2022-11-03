const add = require("./index.js");

describe("Index page", () => {
  test("Adds two numbers and returns the sum", () => {
    expect(add(10, 5)).toBe(15);
  });
});

// // Both functions
// const index = require("./index.js");
// test("Adds two numbers and returns the sum", () => {
//   expect(index.add(10, 5)).toBe(15);
// });
// test("Subtracts two numbers and returns the result", () => {
//   expect(index.subtract(10, 5)).toBe(5);
// });

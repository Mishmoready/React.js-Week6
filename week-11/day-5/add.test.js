// Import the 'add' function from the 'add.js' file
const { add } = require("./app");

// Write a test suite for the 'add' function
describe('add', () => {
  // Test case 1: Check if the 'add' function returns the correct sum of two positive numbers
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  // Test case 2: Check if the 'add' function returns the correct sum with a negative number
  test('adds -1 + 3 to equal 2', () => {
    expect(add(-1, 3)).toBe(2);
  });

  // Test case 3: Check if the 'add' function returns the correct sum with zero
  test('adds 0 + 5 to equal 5', () => {
    expect(add(0, 5)).toBe(6);
  });
});

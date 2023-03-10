const addNums = (num1, num2) => {
  return num1 + num2;
};

const subtractNums = (num1, num2) => {
  return num1 - num2;
};

const isNumber = (num) => {
  return Boolean(parseInt(num));
};

module.exports = {
  addNums,
  subtractNums,
  isNumber,
};

const fruits = [
  {
    name: 'Apple',
    units: 3,
    price: 0.25,
  },
  {
    name: 'Mango',
    units: 6,
    price: 0.35,
  },
  {
    name: 'Banana',
    units: 4,
    price: 0.15,
  },
];

/*
const fruitPrices = fruits.map((fruit, index) => {
  return `${index + 1}. ${fruit.units} units of ${fruit.name} costs $ ${
    fruit.units * fruit.price
  }`;
});
*/

const fruitPrices = fruits.map((fruit, index) => {
  const priceInNumbers = fruit.units * fruit.price;
  const priceRounded = priceInNumbers.toFixed(2);
  // const priceRounded = Math.round(priceInNumbers * 100) / 100;
  return `${index + 1}. ${fruit.units} units of ${fruit.name} costs $ ${priceRounded}`;
});

console.log(fruitPrices);

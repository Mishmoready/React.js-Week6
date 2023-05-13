// JavaScript can do calculations

let a = 10;
let b = 5;
// addition:
a + b; // 15
// subtraction:
a - b; // 5
// multiplication:
a * b; // 50
// division:
a / b; // 2
// exponentiation:
a ** b; // 100,000
// increment by 1:
a++; // 11
// decrement by 1:
b--; // 4
// modulus (remainder of the division):
a % b; // 0 (5 fits into 10 twice, without any remainders)

// ---------Increment Operators---------
a = a + 1; // increment 'a' by 1
// a += 5; // increment 'a' by 5 (Addition Assignment Operator)
// a++; // increment 'a' by 1
console.log(a);

b = b - 1; // decrement 'b' by 1
// b -= 5; // decrement 'b' by 5 (Subtraction Assignment Operator)
// b--; // decrement 'b' by 1
console.log(b);

// ---------Type Coercion---------
console.log(1 + "1"); // converts the number 1 to a string and concatenates them
console.log(1 + Number("2"));
console.log(1 + parseInt("2notRead"));

// ---------BigInt---------
console.log(9999999999999999); // → 10000000000000000. JS numbers by default is only accurate to a point.
console.log(9999999999999999n); // → Use BigInt for very large numbers

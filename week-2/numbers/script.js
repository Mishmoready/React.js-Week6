// JavaScript can do calculations

let a = 12;
let b = 34;
// addition:
a + b; // 46
// subtraction:
a - b; // -22
// multiplication:
a * b; // 408
// division:
a / b; // 0.35294117647058826
// exponentiation:
b ** a; // 2386420683693101000
// increment by 1:
a++; // 13
// decrement by 1:
b--; // 33
// modulus (remainder of the division):
b % a; // 10

// ---------Increment Operators---------
a = a + 1; // increment 'a' by 1
// a += 5; // increment 'a' by 5
// a++; // increment 'a' by 1
console.log(a);

b = b - 1; // decrement 'b' by 1
// b -= 5; // decrement 'b' by 5
// b--; // decrement 'b' by 1
console.log(b);

// ---------Type Coercion---------
console.log(1 + "1"); // converts the number 1 to a string and concatenates them
console.log(1 + Number("2"));
console.log(1 + parseInt("2notRead"));

// ---------BigInt---------
console.log(9999999999999999); // → 10000000000000000. JS numbers by default is only accurate to a point.
console.log(9999999999999999n); // → Use BigInt for very large numbers

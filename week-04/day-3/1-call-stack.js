// revision
const me = {
  name: "Reuben",
};

console.log(me.name);
console.log(me["name"]);

function double(num) {
  return num * 2;
}
console.log(double(10));

// call stack code
const x = 3;
function square(num) {
  const answer = num * num;
  return answer;
}
const squareX = square(x);
square(4);

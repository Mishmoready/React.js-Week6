// Code from the slides
const jsonData = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => console.log(res));

async function asyncFetch() {
  const fetchResult = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchJson = await fetchResult.json();
  console.log(fetchJson);
}
asyncFetch();

//   Exercise 1

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((res) => console.log(res));

//   Exercise 2
async function poke() {
  const result = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await result.json();
  console.log(json);
}
poke();

//   Exercise 3
async function callFakeFetch() {
  try {
    const myFetch = await fakeFetch("https://url.com");
    console.log(myFetch);
  } catch (err) {
    console.log(err);
  }
}
callFakeFetch();

document.getElementById("btn").addEventListener("click", () => poke1());

// Exercise 4
async function poke1() {
  try {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon");
    const json = await result.json();
    console.log(json);
    //   json = 5;
  } catch (err) {
    alert(err);
  }
}
//   poke1();

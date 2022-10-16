// Code from the slides

// fetch() using .then()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => console.log(res));

// fetch using async and await syntax (an alternative to the above)
async function asyncFetch() {
  const fetchResult = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetchJson = await fetchResult.json();
  console.log(fetchJson);
}
asyncFetch();

// fetch using async and await syntax inside of a try/catch block
async function callFakeFetch() {
  try {
    const myFetch = await fakeFetch("https://url.com");
    console.log(myFetch);
  } catch (err) {
    console.log(err); // can also use console.error()
  }
}
callFakeFetch();

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

// Exercise 3 - with the addition of a button
document.getElementById("btn").addEventListener("click", poke1);
async function poke1() {
  try {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon");
    const json = await result.json();
    console.log(json);
  } catch (err) {
    // in order to simulate a failed fetch request (which is when connection is lost), you can turn off your WiFi.
    alert(err);
  }
}
//   poke1();

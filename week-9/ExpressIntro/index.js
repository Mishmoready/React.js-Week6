const express = require("express");
const app = express();

/*
 Route/Path Parameters - Named parts of the path URl that can be used to capture values
 Value of the route parameter is store in the string specified after the ':'.
 Eg, In '/user/:id', whatever comes after /user is stored in the key 'id' in the req.params.id
         /user/123 => req.params.id is then equal to '123' 
 Values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
*/

// Dynamic Route Parameters
// Endpoint 1
app.get("/", (req, res) => {
  res.status(200).send("<b>Hello world!</b>");
});

// Bonus Endpoint: localhost:5000/city/Auckland
app.get("/city/:cityName", (req, res) => {
  console.log("Received a GET request to /city");
  const { cityName } = req.params;
  res.send(`You have asked something about ${cityName}`);
});

// Endpoint 2
app.get("/api/userList", (req, res) => {
  const userList = [
    { name: "john", age: 27 },
    { name: "Mary", age: 22 },
    { name: "Ethan", age: 17 },
    { name: "Joe", age: 53 },
    { name: "Amelia", age: 87 },
    { name: "Adam", age: 34 },
  ];
  res.json(userList);
});

// Endpoint 3
app.get("/api/greet", (req, res) => {
  res.status(200).send("Good afternoon!");
});

// URL Constructor
const urlVar = new URL(
  "https://www.trademe.co.nz/a/search?search_string=le%20snak"
);

// URL Constructor to help understand URLS
// console.log(urlVar.username);
// console.log(urlVar.searchParams);
// console.log(urlVar.searchParams.get("search_string"));

const userList = [
  { name: "john", favouriteColour: "red", id: 1 },
  { name: "Mary", favouriteColour: "blue", id: 2 },
  { name: "Ethan", favouriteColour: "pink", id: 3 },
  { name: "Joe", favouriteColour: "green", id: 4 },
  { name: "Amelia", favouriteColour: "green", id: 5 },
  { name: "Adam", favouriteColour: "red", id: 6 },
];

// Endpoint 4
app.get("/api/user/:id", (req, res) => {
  console.log(`User Params: ${req.params.id}`);
  const requestedUser = userList.find((user) => user.id == req.params.id);
  if (requestedUser) {
    res.status(200).json({
      name: requestedUser.name,
      favouriteColour: requestedUser.favouriteColour,
    });
    return;
  }
  if (!requestedUser) {
    res.status(400).send("User does not exist");
    return;
  }
});
app.listen(4000);

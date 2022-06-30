const http = require("http");

const server = http.createServer(function (request, response) {
  // Endpoint 1
  if (request.url === "/") {
    response.write("Hello world");
    response.end();
  }

  // Endpoint 2
  if (request.url === "/api/userList") {
    // A dummy list (A javascript array of objects)
    const userList = [
      { name: "john", age: 27 },
      { name: "joe", age: 55 },
      { name: "adam", age: 22 },
    ];

    // Convert the userList JS array to string so that it can be sent via web server. Comms between servers must always be as strings of text.
    response.write(JSON.stringify(userList));
    response.end();
  }
});

// Expose port 4000 so that we can send requests there
server.listen(4000);
console.log("I believe the server is running 🙌");

"use strict";
// FETCH API - gets a resource from some location into our webpage

// fetch("example.json")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json);
//   });

// SAME AS ABOVE BUT USING => ARROW FN
// fetch("example.json")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// console.log("I'm HERE!");

// Gets data from local JSON file
function fetchData() {
  console.log("fetchData button CLICKED");
  fetch("example.json")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// Gets data from local JSON file and displays it on the page
function fetchDataAndDisplay() {
  console.log("fetchDataAndDisplay button clicked");
  fetch("example.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const fetchedDataDivElement = document.getElementById("fetchedData");
      // clear out the div content
      fetchedDataDivElement.innerHTML = "";

      json.forEach((person) => {
        fetchedDataDivElement.innerHTML = fetchedDataDivElement.innerHTML + `<li> ${person.name} </li>`;
      });
    });
}

/*
    x = '';
    x = x + 'something new';
    showDataDivElement.innerHTML = showDataDivElement.innerHTML + `<li> ${person.name} </li>`;

    // same as above (using Addition Assignment operator)
    x += 'something new';
    showDataDivElement.innerHTML += `<li> ${person.name} </li>`;
*/

// Gets JSON data from external API and displays it on the page
function fetchExternalAPIData() {
  console.log("fetchExternalAPIData() button clicked");
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((jsonData) => {
      console.log(jsonData);
      const fetchedDataDivElement = document.getElementById("fetchedData");
      // clear out the div content
      fetchedDataDivElement.innerHTML = "";
      jsonData.data.forEach((person) => {
        fetchedDataDivElement.innerHTML += `<img src="${person.avatar}"/>
           <div>${person.first_name} ${person.last_name}</div>`;
      });
    });
}

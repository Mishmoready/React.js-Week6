// FETCH API - gets a resource from some location into our webpage

function fetchData() {
  console.log("fetchData() function called");
  fetch("example.json")
    // converting info to json
    // .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then((jsonData) => console.log(jsonData)); // arrow function is easier to read
}

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
        fetchedDataDivElement.innerHTML =
          fetchedDataDivElement.innerHTML + `<li> ${person.name} </li>`;
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

function fetchExternalAPIData() {
  console.log("fetchExternalAPIData button clicked");
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

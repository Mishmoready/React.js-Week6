// called when you click on the first button
function fetchData() {
  fetch('example.json')
    .then((sebin) => sebin.json()) // json() converts json string into javascript object
    .then((jsonResult) => {
      // get the div where we need to show the data
      const showDataDiv = document.getElementById('showData');
      // clear existing text from the div - for the second button press onwards
      showDataDiv.innerHTML = '';
      // create a list of the names received from the result
      jsonResult.forEach((element) => {
        showDataDiv.innerHTML =
          showDataDiv.innerHTML + `<li>${element.name}</li>`;
      });
    });
}

function fetchAPIData() {
  // fetch the data
  fetch('https://reqres.in/api/users')
    .then((res) => res.json()) // json() converts json string into javascript object
    .then((jsonData) => {
      // get the div where we need to show the data
      const showDataDiv = document.getElementById('showData');
      // clear existing text from the div
      showDataDiv.innerHTML = '';
      // create a list of the names * images received from the result
      jsonData.data.forEach(person => {
        showDataDiv.innerHTML +=  `<li>${person.first_name} ${person.last_name}</li>`;
      })
    });
}

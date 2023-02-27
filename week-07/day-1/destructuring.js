const bigObject = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server NN',
    bs: 'harness real-time e-markets',
  },
};


/*
  Extract the name and email from the object using the destructuring syntax.
  Console log the values and share a screenshot.
*/

let { name, email } = bigObject;
console.log(name, email);

// Array destructing
const bigArray = ["Laide", "Gabriel", "Jets"];
const [first, second, third] = bigArray;
console.log(first, second, third);


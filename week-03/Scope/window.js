// console.log("Hello World!")
//JS living in this "script" world.
//In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes.

//In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.

//With JavaScript, the global scope is the JavaScript environment.

//In HTML, the global scope is the window object.

//what is window object?
// if JS is earth, window is air; nobody can live without air;
//window can be omitted
//window object have the highest status.
// window is in global scope, so everyone can use it.

let a = 10;
console.log(a);

function house() {
  console.log(a);
}

house();
window.house();
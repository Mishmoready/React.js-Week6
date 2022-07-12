

// Initialize: create the container and give it a value.
// Re-Declaration: create another container with the same name.
// Re-Assignment: give this container another value.




// Initializer
let a1;
const b = 10;
// Re-Declaration  
const c = "apple";
const d = "banana";
// Re-Assignment  let--yes   const --no
let e = "red";
e = "blue";
console.log(e)

const f = "cat";
f="dog";





// const b = 100;
/*      b = 200;
      error:TypeError: Assignment to constant variable.
That's why we love using const, cause it's not changeable.*/



// console.log("1",a)

let a = "public"

// console.log("2",a)


function house(){
    let b = "private"

    console.log("3",a)

    console.log("1",b)
}
house()

//  console.log("2",b)

function house2(){
    console.log("3",b)
    console.log("4",a)
}
house2()

console.log("5",a)








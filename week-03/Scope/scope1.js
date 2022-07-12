//Let's get some thing more challenged  let re-assignment
let a = 10;


function house() {
  a= 20;
  console.log("2",a)
  if (true){
    console.log("3",a)
    let c = "apple"
  }
  // console.log("c",c)
}

house();
//what's the result?

// well , let's try again

console.log("4",a)
//it's like the content of container "a" be replaced. you throw away the number 10, and give it a new value which is number 20. the number 10 is not exist anymore.



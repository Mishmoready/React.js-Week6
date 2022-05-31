
//how about this?   we can use const here as well
let a = 10; 

console.log("1",a)

function house() {
    
    let a= 20; //if you use another declaration , this "a" only exist in this function scope
    console.log("2",a)
}

house();

console.log("3",a)


//never do this way, don't make same variable name twice even they are in different scope;



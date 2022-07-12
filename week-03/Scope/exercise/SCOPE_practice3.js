let myName = "Reuben";

function sayHi() {     
    let myName = "Obama";
    console.log(myName + " says good morning.");

    sayHi2();  
}


function sayHi2() {
    console.log(myName + " says good morning again");
}

sayHi();//Obama says good morning.

// Reuben says good morning
    // find relatively parent global scope
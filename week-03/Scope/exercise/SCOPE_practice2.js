let myName = "Reuben";

function sayHi(){    
    let myName= "Obama";        
   console.log(myName + "says good morning.")

sayHi2(); 

   function sayHi2(){
     console.log(myName + "says good morning again");
}
}


sayHi();//Obama says good morning.

//  sayHi2(); //test.js:16 Uncaught ReferenceError: sayHi2 is not defined.



 // Obama says good morning again  
// because of scope chaining. it will return function sayHi2();
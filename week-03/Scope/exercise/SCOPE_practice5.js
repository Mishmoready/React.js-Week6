let myName = "Reuben";

function sayHi(){     
     
   console.log(myName + " says good morning.")  

   function sayHi2(){
     console.log(myName + " says good morning again");
   }
    
   function sayHi3(){
      let myName = "Jacinda";
      sayHi2();
    }

sayHi3();

}
sayHi();


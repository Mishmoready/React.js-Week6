const whereAmI = "Global Execution";
console.log(whereAmI)

function myFunction() {
  const whereAmI = "Local Execution"
  console.log(whereAmI)
}

myFunction();
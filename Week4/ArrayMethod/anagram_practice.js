function isAnagram(test, original) {

    if (test.length !== original.length) {
      return false
    }
  
    let s1 = test.toLowerCase().split("").sort().join("")
    let s2 = original.toLowerCase().split("").sort().join("")
  
  return s1 === s2
  
  }  
  
  //test:
  // isAnagram('apple','pplea')
  // isAnagram('ap ple','pp lea')
  isAnagram('Apple','uPlea')
function findMultiples(integer, limit) {
    //your code here
    let arrayOfNumbers = []
    for (let i=integer; i <= limit; i++){
      if (!(i%integer)){
        arrayOfNumbers.push(i)
      }
    }
    return arrayOfNumbers
}

//+integer step within for loop
function findMultiples(integer, limit) {
    //your code here
    let arrayOfNumbers = []
      for (let i=integer; i <= limit; i+=integer){
      arrayOfNumbers.push(i)
      }
      return arrayOfNumbers
  }
  
//using array constructor and fill method and map method. 
function findMultiples3(integer, limit){
  return new Array(Math.floor(limit/integer)).fill(1).map( (num, index)=> integer * (index+1)) //Index+1 as index starts from 0.
}
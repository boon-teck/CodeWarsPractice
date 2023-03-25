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
function sumEvenNumbers(input) {
    let sum = 0
    for (let i=0; i<input.length; i++){
      if(!(input[i]%2)) {
        sum += input[i]
      }
    }
    return sum
}
  

function sumEvenNumbers(input) {
    return input.filter(num => !(num%2)).reduce((acc, num) => acc + num, 0)
}
  

function sumEvenNumbers(input) {
    return input.reduce((acc, num) => acc + (num%2 ?0:num), 0)
}
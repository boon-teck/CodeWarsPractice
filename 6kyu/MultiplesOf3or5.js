/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    if (number < 0) return 0
    numberArray = []
    for (let i=3; i< number; i++){
      if (!(i%3)) {
        numberArray.push(i)
      } else if (!(i%5)) {
        numberArray.push(i)
      }
    }
    return numberArray.reduce((acc, val) => acc + val , 0)
}

function solution(number){
    if (number < 0) return 0
    total = 0;
    for (let i=3; i< number; i++){
      if (!(i%3)) {
        total += i
      } else if (!(i%5)) {
        total += i
      }
    }
    return total
}

function solution(number){
  let total = 0
  if (number > 0){
    for (let i=0; i < number; i++){
      if (!(i%3) || !(i%5)){
        total += i
      }
    }
  }
  return total
}
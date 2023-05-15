/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
    let numberMap = {}
    for (let i=0; i < arr.length; i++){
      if (numberMap[arr[i]]) {
         numberMap[arr[i]]++
      } else {
        numberMap[arr[i]] = 1
      }
    }
    for (number in numberMap) {
      if (numberMap[number] == 1) {
        return +number
      }
    }
}
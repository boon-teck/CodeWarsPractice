/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
    //to get bit representation
    function findBit(num) {
      let bitStrArr = []
      let i = 0
      while(num > 0){
        bitStrArr.unshift(num%2)
        num = Math.floor(num/2)
        i++
      }
      return bitStrArr.join("")
    }
    
    //return count of 1s
    let binaryRepStr = findBit(n).toString()
    let count = 0
    
    for(let i=0; i<binaryRepStr.length; i++){
      if(+binaryRepStr[i] == 1) {
        count++
        }
    }
    return count
};


//interesting
//to get bit representation with toString(2)
var countBits = function(n) {
    let bitRepresentation = n.toString(2)
    let wordWithOnes =  bitRepresentation.split(0).join("") //remove 0s
    return wordWithOnes.length
}
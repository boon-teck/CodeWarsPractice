/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

//while loop
function digitalRoot(n) {
    while (n.toString().length > 1) {
      let textNumber = n.toString()
      console.log(textNumber)
      n = textNumber.split('').reduce((acc, singleNum) => acc + +singleNum, 0)
      digitalRoot(n)
    }
    return n
}

//Casting out nines method to find digital root 
function digitalRoot(n) {
    return (n-1) % 9 + 1; // minus and add 1 for 999999999
}
/*
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

For this kata assume that all characters are lowercase.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

function permuteAPalindrome (input) { 
    let isPalindrome = true
    let palindromeObj = {}
    for (let i=0; i<input.length; i++) {
      if (palindromeObj[input[i]]) {
        palindromeObj[input[i]]++
      } else {
        palindromeObj[input[i]] = 1
      }
    }
    let noOfOdd = 0
    for (const alphabet in palindromeObj) {
      if (palindromeObj[alphabet] % 2){//odd
        console.log(alphabet)
        noOfOdd++
      } 
    }
    if (noOfOdd > 1) {
      isPalindrome = false
    }
    return isPalindrome
}
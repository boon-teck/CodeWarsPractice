/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    let capStr = str.toUpperCase()
    let strHash = {}
    for(let i=0; i<capStr.length; i++){ //O(N)
      if (strHash[capStr[i]]) {
        let oldVal = strHash[capStr[i]]
        strHash[capStr[i]] = oldVal + 1
        console.log(strHash)
      } else {
        strHash[capStr[i]] = 1
      }
    }
    console.log(strHash)
    if (strHash.X == strHash.O || strHash.X == 0 && strHash.O == 0) {
      return true
    } else {
      return false
    }
}
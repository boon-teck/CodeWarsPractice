/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    //Create an array to return
    let returnedArray = []
    //make String into Array //can also just loop the String without the split
    let splitString = s.split("")
    //Use the for loop to get each char
      for (let i=0; i<splitString.length; i++){
      //Multiply the number of string with the (index+1)
      let fullString = splitString[i].repeat(i+1)
      //Capitilize the first char by using slice, toLowerCase, toUpperCase
      fullString = fullString.charAt(0).toUpperCase() + fullString.slice(1).toLowerCase()
      returnedArray.push(fullString)
    }
    //return the string with array joined by '-'
    return returnedArray.join('-')
}
  
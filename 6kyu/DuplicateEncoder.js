/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word){
    let returnArr = []
    word = word.toLowerCase()
    for(let i=0; i<word.length; i++){
      if (word.indexOf(word[i]) != word.lastIndexOf(word[i])){
        returnArr.push(")")
      } else {
        returnArr.push("(")
      }
    }
    return returnArr.join("")
}


function duplicateEncode(word){
    return word.toLowerCase().split("")
      .map((char, index, wordArr) => wordArr.indexOf(char) == wordArr.lastIndexOf(char) ? "(" : ")").join("")
}
/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/
String.prototype.camelCase=function(){
    let strArr = this.split(" ")
    let returnArr = []
    for (let i=0; i<strArr.length; i++){
      if (strArr[i] != "") strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1)
    }
    return strArr.join("")
}
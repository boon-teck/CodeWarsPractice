/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
    for (let i=0; i<string.length; i++){
      if (string.charCodeAt(i) <= 90) {
        string = string.substring(0,i) + " " + string.substring(i)
        i++
      }
    }
    return string
}
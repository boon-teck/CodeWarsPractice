function getCount(str) {
    let noOfVowels = 0
    let strArray = str.split("")
    console.table(strArray)
    strArray.map(char => char == "a" ||char == "e"||char == "i"||char == "o"||char == "u" ? noOfVowels++ : undefined)
    return noOfVowels
}

//using filter
function getCount(str) {
    return str.split("").filter(char => 'aeiou'.includes(char)).length
}

//using reduce
function getCount(str) {
    return str.split("").reduce((acc, char) => 'aeiou'.includes(char)? acc+1: acc , 0)
  }
  
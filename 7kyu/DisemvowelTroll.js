function disemvowel(str) {
    let returnedStrArray = []
    let strArray = str.split("")
    for (i=0; i < strArray.length; i++){
      if(!'aeiouAEIOU'.includes(strArray[i])) {
        returnedStrArray.push(strArray[i])
      }
    }
    return returnedStrArray.join("")
}

//filter method
function disemvowel(str) {
    return str.split("").filter(str => !'aeiouAEIOU'.includes(str)).join("")
}

//str replace with regex
function disemvowel(str) {
    return str.replace(/[aeiou]/ig,"");
}
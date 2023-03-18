function addLength(str) {
    let StrArray = str.split(" ");
    let newArray = []
    for(let i=0; i<StrArray.length; i++){
      newArray.push(`${StrArray[i]} ${StrArray[i].length}`)
    }
    return newArray
}

// or arrow function & map
const addLength = (str) => str.split(" ").map((word) => `${word} ${word.length}`)
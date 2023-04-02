function highAndLow(numbers){
    let numbersArray = numbers.split(" ");
    let highest, lowest;
    for (let i=0; i<numbersArray.length; i++){
      if (!highest || !lowest) {
        highest = Number(numbersArray[i])
        lowest = Number(numbersArray[i])
      } else if (numbersArray[i]>highest) {
        highest = Number(numbersArray[i])
      } else if (numbersArray[i]<lowest) {
        lowest = Number(numbersArray[i])
      }
    }
    return `${highest} ${lowest}`
}

//using array sort method
function highAndLow(numbers){
    orderedArr = numbers.split(" ").sort((a,b) => a-b)
    return `${orderedArr[orderedArr.length-1]} ${orderedArr[0]}`
}


function squareDigits(num){
    let stringedNumArray = num.toString().split("")
    let squaredArray = stringedNumArray.map((stringedNum) => parseInt(stringedNum)**2)
    return +squaredArray.join("")
}

function squareDigits(num){
    let stringedNumArray = num.toString()
    let squaredArr = []
    for (let i=0; i<stringedNumArray.length; i++) {
      squaredArr[i] = stringedNumArray[i] * stringedNumArray[i] 
      //interesting to know that multiplication can be done on number with typeof string
    }
    return Number(squaredArr.join(""))
  }
function getMiddle(s){
    let strArray = s.split("")
    if (strArray.length % 2) {
      return strArray[Math.floor(strArray.length/2)]
    } else {
      return `${strArray[strArray.length/2-1]}${strArray[strArray.length/2]}`
    }
}
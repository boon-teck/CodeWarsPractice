function getMiddle(s){
    let strArray = s.split("")
    if (strArray.length % 2) {
      return strArray[Math.floor(strArray.length/2)]
    } else {
      return `${strArray[strArray.length/2-1]}${strArray[strArray.length/2]}`
    }
}

function getMiddle(s){
    //even (1,3) length 4/2 = 2 vs odd (2,3) length 5/2=2.5 Math.floor()
    return s.length%2?s.substring(Math.floor(s.length/2), Math.ceil(s.length/2)):s.substring(s.length/2-1, s.length/2+1) 
}

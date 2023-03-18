function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    // return an array containing all of the strings in the input array except those that match strings in geese
    let filteredArr = [];
    for (i=0; i<birds.length; i++){
      if (!geese.includes(birds[i])){
        filteredArr.push(birds[i])
      }
    }
    return filteredArr
    
    //using filter
    return birds.filter((birds)=>!geese.includes(birds))
  };
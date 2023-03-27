var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    if (humanYears === 0) {
      return [0,0,0];
    } else if (humanYears <0) {
      return undefined;
    } else if (humanYears == 1) {
      return [humanYears, 15, 15];
    } else if (humanYears == 2){
      return [humanYears, 24, 24]
    } else {
      return [humanYears, (15 + 9 + 4*(humanYears-2)), (15 + 9 + 5*(humanYears-2))];
    }
  }


  //ternary operator

  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    return [humanYears,
           humanYears == 1 ? 15 : (15 + 9 + (humanYears-2)*4),
           humanYears == 1 ? 15 : (15 + 9 + (humanYears-2)*5)
           ]
  }
  
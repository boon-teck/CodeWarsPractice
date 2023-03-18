function squareSum(numbers){ 
    //reduce
    if (numbers.length > 0) {
      return numbers.reduce((acc,num)=> acc + num * num , 0)
    }
    else return 0
    
    //normal loop
    if (numbers.length>0){
      let total = 0
      for (i=0; i<numbers.length; i++){
        total += Math.pow(numbers[i],2)
      }
      return total
    }
    else return 0
  }

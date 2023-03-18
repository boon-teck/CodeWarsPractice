function grow(x){
    let total = 1;
    for (i=0; i<x.length; i++){
      total*=x[i]
    }
    return total
  }

// arrow function with reduce
const grow = (x) => x.reduce((total, num) => total * num, 1)
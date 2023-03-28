function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    if (load > clothes) {
      return "Not enough clothes"
    } else if (clothes > 2 * load) {
      return "Too much clothes"
    } else {
      return parseFloat((water * 1.1 ** (clothes - load)).toFixed(2))
    }
}

function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    return load > clothes ? "Not enough clothes" :
    (clothes > (2 * load)) ? "Too much clothes" :
    +((water * 1.1 ** (clothes -load)).toFixed(2))
}
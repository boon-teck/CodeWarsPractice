function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((acc, val) => acc + val, 0)
}

function positiveSum(arr) {
    let sum = 0;
    for (i=0; i < arr.length; i++){
        if (arr[i] >0){
            sum += arr[i]
        }
    }
    return sum;
}

//just reduce
function positiveSum(arr) {
    return arr.reduce((acc,num)=> acc + (num > 0 ? num : 0),0);
 }

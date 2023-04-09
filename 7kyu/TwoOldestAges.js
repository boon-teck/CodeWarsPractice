/* 
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
*/

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let largestAge = Math.max(...ages)
    let twoOldestAges = []
    for (let i = 0; i < ages.length; i++){ //O(N)
      if (ages[i] == largestAge){
        ages.splice(i,1)
        let secondLargestAge = Math.max(...ages)
        twoOldestAges = [secondLargestAge,largestAge]
        break
      }
    }
    return twoOldestAges
}

//using the sort function
function twoOldestAges(ages){
    return ages.sort((a,b)=> b-a).splice(0,2).reverse()
}

//slice from the back
function twoOldestAges(ages){
    return ages.sort((a,b) => a-b).slice(-2);
}

  
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
    let iterableBefore
    let returnArr = []
    if(typeof iterable == "string") {
      let iterableArr = iterable.toString().split("")
      for (let i=0; i<iterableArr.length; i++){
        if (iterableArr[i] !== iterableBefore) {
          iterableBefore = iterableArr[i]
          returnArr.push(iterableArr[i])
        }
      }
      return returnArr
    } else {
      for (let i=0; i<iterable.length; i++){
        if (iterable[i] !== iterableBefore) {
          iterableBefore = iterable[i]
          returnArr.push(iterable[i])
        }
      }
      return returnArr
    }
}

//dont even have to account for typeof
var uniqueInOrder=function(iterable){
    let returnArr = []
    for (let i=0; i<iterable.length; i++){
        if (iterable[i] !== iterable[i-1]) {
          returnArr.push(iterable[i])
        }
      }
    return returnArr
}
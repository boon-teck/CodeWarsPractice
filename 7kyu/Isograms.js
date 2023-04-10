/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/


//0(N^2) Quadratic time
function isIsogram(str){
    //converting to array
    strArr = str.toLowerCase().split('')
    //for each chars, compare to the other chars
    for (let i=0; i<strArr.length; i++){
      for (let j=i+1; j<strArr.length; j++){
        if (strArr[i] == strArr[j]){
          return false
        }
      }
    }
    return true
}

//O(N) linear time
function isIsogram(str){
    strArr = str.toLowerCase().split('')
    strObj = {}
    for (let i=0; i<strArr.length; i++){
      if (!strObj[strArr[i]]){
        strObj[strArr[i]] = true
      } else {
        return false
      }
    }
    return true
}

//Utilizing set constructor, pass in string and count length with .size
function isIsogram(str){
	return new Set(str.toLowerCase()).size == str.length;
}


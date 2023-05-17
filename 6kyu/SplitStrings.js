/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    let returnArr = []
    for (let i=0; i<str.length; i+=2){
      if(str[i+1]) {
        returnArr.push(str[i]+str[i+1])
      } else {
        returnArr.push(str[i]+'_')
      }
    }
    return returnArr
}

function solution(str){
    if (str){
      return (str+"_").match(/.{2}/g) 
    } else {
      return []
    }
}

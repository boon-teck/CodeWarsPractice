/* 
Given two integers a and b, which can be positive or negative, 
find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.
*/

function getSum(a, b){
    //condition if a==b then return a or b
     if (a==b) {
       return a
     } else {
       let total = 0;
       //use while loop to add until it reach another number
       //addition of all numbers between
       if (a < b) {
         while (a <= b) {
           total += a;
           a++
         }
       } else {
         while (a >= b) {
           total += a;
           a--
         }
       }
       return total
     }
 
}

//gaussian series addition
function getSum(a, b){
    return a==b ? a : (Math.abs(a-b)+1) * (a+b) /2
}


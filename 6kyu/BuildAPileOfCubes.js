/*
Your task is to construct a building which will be a pile of n cubes.
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
if such a n exists or -1 if there is no such n.
*/

function findNb(m) {
    let intTotal = 0
    let i = 1
    while (intTotal < m) {
      intTotal += Math.pow(i, 3)
      i++
    }
    if (intTotal == m) {
      return i-1
    } else {
      return -1
    }
}

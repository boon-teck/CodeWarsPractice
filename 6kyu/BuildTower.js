/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

function towerBuilder(nFloors) {
    let treeArr = []
    for (let i=0; i<nFloors; i++){
      treeArr.unshift(" ".repeat(i) + "*".repeat(nFloors*2-1-2*i) + " ".repeat(i))
    }
    return treeArr
}
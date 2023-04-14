/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

//Map function
function DNAStrand(dna){
    let covertedDna = dna.toUpperCase().split("").map((char, i)=> {
      if(char == "T") return char = "A"
      if (char == "A") return char = "T"
      if (char == "C") return char = "G"
      if (char == "G") return char = "C"
    })
    return covertedDna.join("")
}

//using String replace method w js object & regex
let dnaPairs = {
    A : 'T',
    T : 'A',
    G : 'C',
    C : 'G'

}
function DNAStrand(dna) {
    return dna.replace(/./gi, char => dnaPairs[char])
}
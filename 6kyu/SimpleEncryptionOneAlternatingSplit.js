/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

//First Draft - To Refactor
function encrypt(text, n) {
    let odd = []
    let even = []
    let count = 0
    if (text == null) return null
    while (n > count) {
      for (let i=0; i<text.length; i++) {
      if (i % 2) {
        odd.push(text[i])
        } else {
          even.push(text[i])
        }
      }
      text = odd.join("") + even.join("")
      count++
      odd = []
      even = []
    } 
    return text
  }
  
  function decrypt(encryptedText, n) {
    //odd + even
    if (encryptedText == null) return null
    let newWord = encryptedText
    let tempWord = ''
    let count = 0
    while (n > count) {
      if(newWord.length % 2) {
        let oddText = newWord.slice(0, encryptedText.length / 2)
        let evenText = newWord.slice(encryptedText.length / 2, encryptedText.length - 1)
        for (let j=0; j <oddText.length ; j++) {
          tempWord += evenText[j]
          tempWord += oddText[j]
  
        }
        newWord = tempWord + newWord[newWord.length-1]
        tempWord = ''
        count++
      } else {
        let oddText = newWord.slice(0, encryptedText.length / 2)
        let evenText = newWord.slice(encryptedText.length / 2, encryptedText.length)
        for (let j=0; j <oddText.length ; j++) {
          tempWord += evenText[j]
          tempWord += oddText[j]
  
        }
        newWord = tempWord
        tempWord = ''
        count++
      }
    }
    return newWord
}
/*Stacks */

//Functions push, pop, peek, length

let letters = [] // this is our stack

let word = "racecar"

let rword = ""

//put the letters into the stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}
//pop off the letters in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop()
}

if (rword == word) {
    console.log(word + " is a palindrome!")
} else {
    console.log(word + " is not a palindrome")
}
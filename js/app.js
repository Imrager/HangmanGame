const hangmanWord = "El-Dorado"
let letterGuess = "o"
let correctLetters = "         "
console.log(correctLetters)
function checkLetters (word, letter){
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === letter.toLowerCase()){
            correctLetters.replace(correctLetters[i], word[i])
        }  
    }
}
checkLetters(hangmanWord, letterGuess)
console.log(correctLetters)
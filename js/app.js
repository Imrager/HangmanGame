// const hangmanWord = ["Dorado","Cowbell", "Cowboy", "Indian", "Tobacco"]


// function randomWord (){hangmanWord[Math.floor(Math.random() * 4) + 1]}
//  random number from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
$(document).ready(function () {
    let hangmanWord = "Opportunity"
    $('#newGame').click(function () {
        for(i=0; i < hangmanWord.length; i++){
            $('<div class="letterDiv"></div>').text(i).appendTo('article')
        }
    })

    let letterGuess = "o"
    let correctLetter = []
    console.log(correctLetter)
    function checkLetters(word, letter) {
        for (let i = 0; i < word.length; i++) {

            if (word[i].toLowerCase() === letter.toLowerCase()) {
                correctLetter[i] = letterGuess

            }
        }
    }
    checkLetters(hangmanWord, letterGuess)
    console.log(correctLetter)
})
// const hangmanWord = ["Dorado","Cowbell", "Cowboy", "Indian", "Tobacco"]


// function randomWord (){hangmanWord[Math.floor(Math.random() * 4) + 1]}
//  random number from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
$(document).ready(function () {
    let hangmanWord = "Yes"
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let letterGuess;
    let correctLetter = []
    // When click new game adds empty letter placement 
    $('#playGame').click(function () {
        for (i = 0; i < hangmanWord.length; i++) {
            $('<div class="letterDiv"></div>').text('__').appendTo('article')
        }
        $('input').css('display', 'inline')
        for (i = 0; i < letters.length; i++) {
            $('<button class="alphabet"></button>').text(letters[i]).appendTo('.guesses')
        }
        $('#playGame').css('display', 'none')
        $('#newGame').css('display', 'inline')
    })
    $('#newGame').click(function () {
        location.reload()
    })

    function checkLetters(word, letter) {
        for (let i = 0; i < word.length; i++) {

            if (word[i].toLowerCase() === letter.toLowerCase()) {
                correctLetter[i] = letterGuess

            }
        }
    }
})
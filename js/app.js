// const hangmanWord = ["Dorado","Cowbell", "Cowboy", "Indian", "Tobacco"]


// function randomWord (){hangmanWord[Math.floor(Math.random() * 4) + 1]}
//  random number from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
let hangmanWord = "Yes"
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let letterGuess = $('input').val()
let correctLetter = []
let hangmanImages = ['images/Hangman Pic/hangmanHead.png', 'images/Hangman Pic/hangmanBody.png','images/Hangman Pic/hangmanNorightArm .png','images/Hangman Pic/hangmanNoLegs.png','images/Hangman Pic/hangmanNoRightLeg.png']
$(document).ready(function () {
    console.log($('input').val())
    // When click new game adds empty letter placement 
    $('#playGame').click(function () {
        // create div with word length
        for (i = 0; i < hangmanWord.length; i++) {
            $('<div class="letterDiv"></div>').text('__').appendTo('article')
        }
        // displays input submit
        $('input').css('display', 'inline')
        $('#enter').css('display', 'inline')
        // create 26 divs for each letter in the alphabet
        for (i = 0; i < letters.length; i++) {
            $('<div class="alphabet"></div>').text(letters[i]).appendTo('.guesses')
        }
        $('#playGame').css('display', 'none')
        $('#newGame').css('display', 'inline')
    })
    $('#newGame').click(function () {
        location.reload()
    })

    $('#enter').click(function () {
        letterGuess = $('input').val()
        for (let i = 0; i < hangmanWord.length; i++) {

            if (hangmanWord[i].toLowerCase() === letterGuess.toLowerCase()) {
                $('.letterDiv')[i].innerText = letterGuess
            }
            // changing image source https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
            else{
                $('img').attr('src', 'images/Hangman Pic/hangmanHead.png' )
                
            }
        }
    })
})
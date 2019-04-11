// const hangmanWord = ["Dorado","Cowbell", "Cowboy", "Indian", "Tobacco"]


// function randomWord (){hangmanWord[Math.floor(Math.random() * 4) + 1]}
//  random number from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
let hangmanWord = "poo"
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let letterGuess = $('input').val()
let correctLetter = []
let hangmanImages = ['images/Hangman Pic/hangman base.png','images/Hangman Pic/hangmanHead.png', 'images/Hangman Pic/hangmanBody.png','images/Hangman Pic/hangmanNorightArm .png','images/Hangman Pic/hangmanNoLegs.png','images/Hangman Pic/hangmanNoRightLeg.png', 'images/Hangman Pic/hangmanLose.png']
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
        }
        for(let i =0; i < letters.length; i++){
            if($('.alphabet')[i] === letterGuess){
                
            }
        }
        // changing image source https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
        if(hangmanWord.length = 3){if ($('.letterDiv')[0].innerText === letterGuess ||
        $('.letterDiv')[1].innerText === letterGuess ||
        $('.letterDiv')[2].innerText === letterGuess 
        ){
            $('img').attr('src', hangmanImages[0]) 
        }
        else{
            hangmanImages.shift() && $('img').attr('src', hangmanImages[0])
        }}
        
        if(($('.letterDiv')[0].innerText === hangmanWord[0].toLowerCase()) && 
        ($('.letterDiv')[1].innerText === hangmanWord[1]) && 
        ($('.letterDiv')[2].innerText === hangmanWord[2])){
            alert('you won!')
        }
        if($('img').attr('src') === hangmanWord[hangmanWord.length - 1]){
            alert('you lose!')
        }
    })
})
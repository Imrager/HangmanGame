// const hangmanWord = ["Dorado","Cowbell", "Cowboy", "Indian", "Tobacco"]


// function randomWord (){hangmanWord[Math.floor(Math.random() * 4) + 1]}
//  random number from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

let hangmanWords = {
    hiphop: 'Hint: Number one genre of music',
    netflix: 'Hint: Video streaming service',
    amazon: 'Hint: Online shopping and delivery',
    start:  'Hint: opposite of finish'
}
// random number https://www.w3schools.com/jsref/jsref_random.asp
let hangmanWord = Object.keys(hangmanWords)[Math.floor((Math.random() * 4))]
console.log(hangmanWord)
let hint = function(){
    if(hangmanWord === 'hiphop'){
        return hangmanWords.hiphop
    }
    else if(hangmanWord === 'netflix'){
        return hangmanWords.netflix
    }
    else if(hangmanWord === 'amazon'){
        return hangmanWords.amazon
    }
    else if(hangmanWord === 'start'){
        return hangmanWords.start
    }
}
console.log(hint())
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let letterGuess = $('input').val()
let correctLetter = []
let hangmanImages = ['images/Hangman Pic/hangman base.png', 'images/Hangman Pic/hangmanHead.png', 'images/Hangman Pic/hangmanBody.png', 'images/Hangman Pic/hangmanNorightArm .png', 'images/Hangman Pic/hangmanNoLegs.png', 'images/Hangman Pic/hangmanNoRightLeg.png', 'images/Hangman Pic/hangmanLose.png']
$(document).ready(function () {
    // When click new game adds empty letter placement 
    $('#playGame').click(function () {
        // create div with word length
        $('.letterAlphabet').css('display', 'inline')
        for (i = 0; i < hangmanWord.length; i++) {
            $('<div class="letterDiv"></div>').text('__').appendTo('article')
        }
        // displays input submit
        $('input').css('display', 'inline')
        $('#enter').css('display', 'inline')
        // create 26 divs for each letter in the alphabet
        for (i = 0; i < letters.length; i++) {
            $('<p class="alphabet"></p>').text(letters[i]).appendTo('.guesses')   
        }
        $('#playGame').css('display', 'none')
        $('#newGame').css('display', 'inline')
        $('.hint').text(hint())
        console.log($('p')[0].innerText)
    })
    // ('p')[0].click(function(){
    //     alert('hey')
    //     $('input').val($('p')[0].innerText)
    // })
    $('#newGame').click(function () {
        location.reload()
    })
    // how to also press enter to submit answer https://api.jquery.com/keypress/
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            $('#enter').click()
        }
    });
    $('#enter').click(function enter() {
        letterGuess = $('input').val()
        // checks each letter of the hangman word
        for (let i = 0; i < hangmanWord.length; i++) {

            if (hangmanWord[i].toLowerCase() === letterGuess.toLowerCase()) {
                $('.letterDiv')[i].innerText = letterGuess
            }
        }
        //  compares input to letter divs
        for (let i = 0; i < 26; i++) {
            if ($('input').val() === $('p')[i].innerText) {
                $($('p')[i]).css('color', 'lightgrey')
            }
        }

        // changing image source https://stackoverflow.com/questions/554273/changing-the-image-source-using-jquery
        // compares 7 letter words to letterguess if wrong adds image to show that its wrong
        if (hangmanWord.length === 7) {
            if ($('.letterDiv')[0].innerText === letterGuess ||
                $('.letterDiv')[1].innerText === letterGuess ||
                $('.letterDiv')[2].innerText === letterGuess ||
                $('.letterDiv')[3].innerText === letterGuess ||
                $('.letterDiv')[4].innerText === letterGuess ||
                $('.letterDiv')[5].innerText === letterGuess ||
                $('.letterDiv')[6].innerText === letterGuess
            ) {
                $('.imgSwitch').attr('src', hangmanImages[0])
            }
            else {
                hangmanImages.shift() && $('.imgSwitch').attr('src', hangmanImages[0])
            }
        }
        if (hangmanWord.length === 6) {
            if ($('.letterDiv')[0].innerText === letterGuess ||
                $('.letterDiv')[1].innerText === letterGuess ||
                $('.letterDiv')[2].innerText === letterGuess ||
                $('.letterDiv')[3].innerText === letterGuess ||
                $('.letterDiv')[4].innerText === letterGuess ||
                $('.letterDiv')[5].innerText === letterGuess
            ) {
                $('.imgSwitch').attr('src', hangmanImages[0])
            }
            else {
                hangmanImages.shift() && $('.imgSwitch').attr('src', hangmanImages[0])
            }
        }
        // compares 5 letter words to letterguess if wrong adds image to show that its wrong
        else if (hangmanWord.length === 5) {
            if ($('.letterDiv')[0].innerText === letterGuess ||
                $('.letterDiv')[1].innerText === letterGuess ||
                $('.letterDiv')[2].innerText === letterGuess ||
                $('.letterDiv')[3].innerText === letterGuess ||
                $('.letterDiv')[4].innerText === letterGuess
            ) {
                $('.imgSwitch').attr('src', hangmanImages[0])
            }
            else {
                hangmanImages.shift() && $('.imgSwitch').attr('src', hangmanImages[0])
            }
        }

        // when that last image of a full hangman pops up they won
        $('input').val('')
        // seven letter word you won
        if (hangmanWord.length === 6) {
            if (($('.letterDiv')[0].innerText === hangmanWord[0]) &&
                ($('.letterDiv')[1].innerText === hangmanWord[1]) &&
                ($('.letterDiv')[2].innerText === hangmanWord[2]) &&
                ($('.letterDiv')[3].innerText === hangmanWord[3]) &&
                ($('.letterDiv')[4].innerText === hangmanWord[4]) &&
                ($('.letterDiv')[5].innerText === hangmanWord[5])&&
                ($('.letterDiv')[5].innerText === hangmanWord[6])) {
                alert('you won!')
            }
        }
        // six letter word you won
        if (hangmanWord.length === 6) {
            if (($('.letterDiv')[0].innerText === hangmanWord[0]) &&
                ($('.letterDiv')[1].innerText === hangmanWord[1]) &&
                ($('.letterDiv')[2].innerText === hangmanWord[2]) &&
                ($('.letterDiv')[3].innerText === hangmanWord[3]) &&
                ($('.letterDiv')[4].innerText === hangmanWord[4]) &&
                ($('.letterDiv')[5].innerText === hangmanWord[5])) {
                alert('you won!')
            }
        }
        //    five letter word you won
        else if (hangmanWord.length === 5) {
            if (($('.letterDiv')[0].innerText === hangmanWord[0]) &&
                ($('.letterDiv')[1].innerText === hangmanWord[1]) &&
                ($('.letterDiv')[2].innerText === hangmanWord[2]) &&
                ($('.letterDiv')[3].innerText === hangmanWord[3]) &&
                ($('.letterDiv')[4].innerText === hangmanWord[4])) {
                alert('you won!')
            }
        }
        
//  when last image show alert you lose
        if ($('.imgSwitch')[hangmanImages.length - 1]) {
            alert('you lose')
        }

    })
})
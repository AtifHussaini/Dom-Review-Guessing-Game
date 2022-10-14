let submit = document.querySelector("#submit")
let actualValue = document.querySelector("#actualValue")
let title = document.querySelector("#title")
let subTitle = document.querySelector("#subTitle")

let outputGuess1 = document.querySelector(".guess1")
let outputGuess2 = document.querySelector(".guess2")
let outputGuess3 = document.querySelector(".guess3")
let outputGuess4 = document.querySelector(".guess4")
let outputGuess5 = document.querySelector(".guess5")

let min = Math.ceil(1)
let max = Math.floor(101)
let random = Math.floor(Math.random()*(max-min))

let count = 0;
submit.addEventListener ("click", function () {
   

    if (actualValue.value < 101 && actualValue.value > 0) {
        count += 1

        if (actualValue.value != random) {

            if (count === 1) {
                outputGuess1.innerText = actualValue.value
                if (actualValue.value > random) {
                    title.innerText = "Guess lower"
                } else {
                title.innerText = "Guess higher"
                }
            } else if (count === 2) {
                outputGuess2.innerText = actualValue.value
                if (actualValue.value > random) {
                    title.innerText = "Guess lower"
                } else {
                title.innerText = "Guess higher"
                }
            } else if (count === 3) {
                outputGuess3.innerText = actualValue.value
                if (actualValue.value > random) {
                    title.innerText = "Guess lower"
                } else {
                title.innerText = "Guess higher"
                }
            }  else if (count === 4) {
                outputGuess4.innerText = actualValue.value
                if (actualValue.value > random) {
                    title.innerText = "Guess lower"
                } else {
                title.innerText = "Guess higher"
                }
            }  else if (count === 5) {
                outputGuess5.innerText = actualValue.value
                title.innerText = "You lost! The number was " + random
            }  

        } else {
            title.innerText = "You got it right! The number was " + random
        }
    }

     else {
        title.innerText = "That is an invalid guess."
    
    }

})




let button = document.querySelector("#botton")



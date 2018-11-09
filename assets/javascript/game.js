var wins = 0;
        var losses = 0;
        var attempts = 10;
        var used = [];

        // var reset = function() {
        //    a = 0;
        //    document.getElementById('Value').innerHTML = 0;
        // }

        //the computer picks a random letter from the alphabet
        var alphabets = ["a", "b", "c", "d", "e",
            "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];



        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessesLeft = document.getElementById("guesses-left");
        var lettersUsed = document.getElementById("letters-used");


        //the user picks a random letter from the alphabet

        // var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
        // console.log(computerGuess);

        document.onkeyup = function (event) {
            var userGuess = event.key;
            console.log(userGuess);

            var computerGuess = alphabets[Math.floor(Math.random() * alphabets.length)];
            console.log(computerGuess);





            //if the user pick matches the computers pick
            //up the win count by one
            if (userGuess) {
                if (userGuess === computerGuess) {
                    wins++
                    attempts = 10;
                    used = [" "];
                    console.log(wins);




                } else if (userGuess !== computerGuess) {

                    attempts -= 1;
                    if (attempts === 0) {

                        losses++;
                        attempts = 10;
                        used = [" "];
                    }


                }
                if (used.indexOf(userGuess) > 0) {

                } else {
                    //this pushes the players incorrect guess to the usedArray and writes it to the HTML
                    used.push(userGuess);
                    // document.getElementById('letters-used').innerHTML = used;
                    console.log(used);
                }







                    //   else if (guessesleft === 0) {
                    //     //if the user does not pick the computer letter
                    //     //decrement the guesses
                    //     losses++



                    // winsText.textContent = "wins: " + wins;



                    winsText.textContent = "wins: " + wins;
                    lossesText.textContent = "losses: " + losses;
                    guessesLeft.textContent = "guesses left: " + attempts;
                    lettersUsed.textContent = "letters used: " + used;



                    // return;
                }






            };



    //if the user does not pick the coreect letter
    //after they have run out if guesses
    //then up the lose count by one

    //if the user wins or losses rest the computer pick

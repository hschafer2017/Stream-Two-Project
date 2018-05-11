let commands = ["Bop It", "Twist It", "Pull It"];


function bopPrompt(a) {

    return commands[Math.floor(Math.random() * commands.length)];
}

function flash(command) {
    if (command == "Bop It") {
        $("h3").removeClass("bops");
        console.log("bopping");
        // setTimeout(function() {
        //     endGame()
        // }, 3000);
    } 
    if (command == "Twist It") {
        $("h3").removeClass("twists");
        console.log("twisting");
        // setTimeout(function() {
        //     endGame()
        // }, 3000);
    }
    if (command == "Pull It") {
        $("h3").removeClass("pulls");
        console.log("pulling");
        // setTimeout(function() {
        //     endGame()
        // }, 3000);

    }

}


function startGame() {
    scoreReset();
    score = 1;
    playGame();
}

function playGame() {
    document.getElementById("bopIt").disabled = false
    document.getElementById("twistIt").disabled = false
    document.getElementById("pullIt").disabled = false
    document.getElementById("bops").classList.add("bops");
    document.getElementById("pulls").classList.add("pulls");
    document.getElementById("twists").classList.add("twists");
    document.getElementById("losing").classList.add("losing");
    let command = bopPrompt();
    console.log(command);
    let bopButton = document.getElementById('bopIt').getAttribute("data-type");
    let pullButton = document.getElementById('pullIt').getAttribute("data-type");
    let twistButton = document.getElementById('twistIt').getAttribute("data-type");
    flash(command);



    document.getElementById('bopIt').onclick = function() {
        if (command == bopButton) {
            console.log("Correct Bop");
            console.log(score);
            scoreBoard();
            document.getElementById("bops").classList.add("bops");
            playGame();

        }
        else {
            console.log("You Lose");
            console.log(score);
            endGame();
        }
    };


    document.getElementById('pullIt').onclick = function() {
        if (command == pullButton) {
            console.log("Correct Pull");
            console.log(score);
            scoreBoard();
            document.getElementById("pulls").classList.add("pulls");
            playGame();

        }
        else {
            console.log("You Lose");
            console.log(score);
            endGame();
        }
    };


    document.getElementById('twistIt').onclick = function() {
        if (command == twistButton) {
            console.log("Correct Twist");
            console.log(score);
            scoreBoard();
            document.getElementById("twists").classList.add("twists");
            playGame();

        }
        else {
            console.log("You Lose");
            console.log(score);
            endGame();

        }
    }


    // HOT KEYS
    document.onkeyup = function(a) {
        if (a.which === 65) {
            console.log("A Key")
            document.getElementById("twistIt").getAttribute("data-type");
            if (command == twistButton && a.which === 65) {
                console.log("Correct Twist");
                console.log(score);
                scoreBoard();
                document.getElementById("twists").classList.add("twists");
                playGame();

            }
            else {
                console.log("You Lose");
                console.log(score);
                endGame()

            }
        }
        else if (a.which === 80) {
            console.log("P Key")
            document.getElementById("pullIt").getAttribute("data-type");
            if (command == pullButton && a.which === 80) {
                console.log("Correct Pull");
                console.log(score);
                scoreBoard();
                document.getElementById("pulls").classList.add("pulls");
                playGame();
            }
            else {
                endGame()
                console.log("You Lose");
                console.log(score);


            }
        }
        else if (a.which === 66) {
            console.log("B key")
            document.getElementById("bopIt").getAttribute("data-type");
            if (command == bopButton && a.which === 66) {
                console.log("Correct Bop");
                console.log(score);
                scoreBoard();
                document.getElementById("bops").classList.add("bops");
                playGame();
            }
            else {
                endGame()
                console.log("You Lose");
                console.log(score);
            }
        }
        else {
            endGame();
        }
    }
}


let score = 1;

function scoreBoard() {
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = score;
    score++;
}

function scoreReset() {
    let score = 0;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = score;
}

function timer() {
    if (flash()) {
        setTimeout(function() {
            endGame()
        }, 3000);
    }

}

function endGame() {
    document.getElementById("bops").classList.add("bops");
    document.getElementById("pulls").classList.add("pulls");
    document.getElementById("twists").classList.add("twists");
    document.getElementById("bopIt").disabled = true
    document.getElementById("twistIt").disabled = true
    document.getElementById("pullIt").disabled = true
    document.getElementById("losing").innerHTML =
        "You Lost! Press start to play again!";
    $("h3").removeClass("losing");
   document.onkeyup = function(a) { (a.which != 80 && a.which!=65 && a.which != 66) }
}


// Remember to credit Stack overflow for Randomizer
// using data-type is much easier than using a function within the button

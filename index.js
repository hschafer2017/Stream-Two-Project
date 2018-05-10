let commands = ["Bop It", "Twist It", "Pull It"];


function bopPrompt(a) {

    return commands[Math.floor(Math.random() * commands.length)];
}

function flash(command) {
    if (command == "Bop It") {

        $("h3").removeClass("bops");
        console.log("bopping");
    }
    if (command == "Twist It") {

        $("h3").removeClass("twists");
        console.log("twisting");
    }
    if (command == "Pull It") {

        $("h3").removeClass("pulls");
        console.log("pulling");
    }
}


function startGame() {
    scoreReset();
    score = 1;
    playGame();
}

function playGame() {
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
            document.getElementById("bops").classList.add("bops");
            document.getElementById("pulls").classList.add("pulls");
            document.getElementById("twists").classList.add("twists");
            document.getElementById("losing").innerHTML =
                "You Lost! Press start to play again!";
            $("h3").removeClass("losing");
            console.log("You Lose");
            console.log(score);
           
            
             

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
            document.getElementById("bops").classList.add("bops");
            document.getElementById("pulls").classList.add("pulls");
            document.getElementById("twists").classList.add("twists");
            document.getElementById("losing").innerHTML =
                "You Lost! Press Start to play again!";
            $("h3").removeClass("losing");
            console.log("You Lose");
            console.log(score); 
            
            
             
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
            document.getElementById("bops").classList.add("bops");
            document.getElementById("pulls").classList.add("pulls");
            document.getElementById("twists").classList.add("twists");
            document.getElementById("losing").innerHTML =
                "You Lost! Press start to play again!";
            $("h3").removeClass("losing");
            console.log("You Lose");
            console.log(score);
             
            
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
                document.getElementById("bops").classList.add("bops");
                document.getElementById("pulls").classList.add("pulls");
                document.getElementById("twists").classList.add("twists");
                document.getElementById("losing").innerHTML =
                    "You Lost! Press start to play again!";
                $("h3").removeClass("losing");
                console.log("You Lose");
                console.log(score);
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
                document.getElementById("bops").classList.add("bops");
                document.getElementById("pulls").classList.add("pulls");
                document.getElementById("twists").classList.add("twists");
                document.getElementById("losing").innerHTML =
                    "You Lost! Press start to play again!";
                $("h3").removeClass("losing");
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
                document.getElementById("bops").classList.add("bops");
                document.getElementById("pulls").classList.add("pulls");
                document.getElementById("twists").classList.add("twists");
                document.getElementById("losing").innerHTML =
                    "You Lost! Press start to play again!";
                $("h3").removeClass("losing");
                console.log("You Lose");
                console.log(score);
            }
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

// Remember to credit Stack overflow for Randomizer
// using data-type is much easier than using a function within the button

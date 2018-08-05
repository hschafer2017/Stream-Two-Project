let commands = ["Bop It", "Twist It", "Pull It"];
let display = document.querySelector('#timer');
let score = 1;
var localStorageName = "bopitscore";
var highScore;



function bopPrompt(a) {

    return commands[Math.floor(Math.random() * commands.length)];
}

function flash(command) {
    if (command == "Bop It") {
        $("h3").removeClass("bops");
    }
    if (command == "Twist It") {
        $("h3").removeClass("twists");
    }
    if (command == "Pull It") {
        $("h3").removeClass("pulls");
    }
}

function startGame() {
    endGame.called = false;
    scoreReset();
    score = 1;
    highScore = localStorage.getItem(localStorageName) == null ? 0 :
        localStorage.getItem(localStorageName);
    startTimer(30, display)
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
    let bopButton = document.getElementById('bopIt').getAttribute("data-type");
    let pullButton = document.getElementById('pullIt').getAttribute("data-type");
    let twistButton = document.getElementById('twistIt').getAttribute("data-type");
    flash(command);


    document.getElementById('bopIt').onclick = function() {
        if (command == bopButton) {
            scoreBoard();
            document.getElementById("bops").classList.add("bops");
            playGame();
        }
        else {
            endGame();
        }
    };


    document.getElementById('pullIt').onclick = function() {
        if (command == pullButton) {
            scoreBoard();
            document.getElementById("pulls").classList.add("pulls");
            playGame();
        }
        else {
            endGame();
        }
    };


    document.getElementById('twistIt').onclick = function() {
        if (command == twistButton) {
            scoreBoard();
            document.getElementById("twists").classList.add("twists");
            playGame();
        }
        else {
            endGame();

        }
    }


    // HOT KEYS
    document.onkeyup = function(a) {
        if (a.which === 65) {
            document.getElementById("twistIt").getAttribute("data-type");
            if (command == twistButton && a.which === 65) {
                scoreBoard();
                document.getElementById("twists").classList.add("twists");
                playGame();
            }
            else {
                endGame();
            }
        }
        else if (a.which === 80) {
            document.getElementById("pullIt").getAttribute("data-type");
            if (command == pullButton && a.which === 80) {
                scoreBoard();
                document.getElementById("pulls").classList.add("pulls");
                playGame();
            }
            else {
                endGame();
            }
        }
        else if (a.which === 66) {
            document.getElementById("bopIt").getAttribute("data-type");
            if (command == bopButton && a.which === 66) {
                scoreBoard();
                document.getElementById("bops").classList.add("bops");
                playGame();
            }
            else {
                endGame();
            }
        }
    };
}

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


function startTimer(duration, display) {
    let timer = duration,
        minutes, seconds;
    let timesRan = 0;
    var interval = setInterval(function() {
        timesRan += 1;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;


        if (--timer < 0) {
            timer = duration;
        }

        if (timesRan === 31) {
            endGame();
            clearInterval(interval);
        }
        if (endGame.called === true) {
            console.log('end');
            clearInterval(interval);
        }

    }, 1000);
}


function endGame() {
    endGame.called = true;
    document.getElementById("bops").classList.add("bops");
    document.getElementById("pulls").classList.add("pulls");
    document.getElementById("twists").classList.add("twists");
    document.getElementById("bopIt").disabled = true
    document.getElementById("twistIt").disabled = true
    document.getElementById("pullIt").disabled = true
    $("h3").removeClass("losing");
    document.onkeyup = function(a) {
        (a.which != 80 && a.which != 65 && a.which != 66)
    }
    highScore = Math.max(score, highScore);
    localStorage.setItem(localStorageName, highScore);
    console.log(localStorage); 
    console.log(highScore);
}


// Modal on load 
function loadModal() {
    $('#rotateScreenModal').modal('show');
}


// using data-type is much easier than using a function within the button

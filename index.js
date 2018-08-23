let commands = ["Bop It", "Twist It", "Pull It"];
let timerDisplay = document.querySelector("#timer");
let score = 0;
let localStorageName = "bopItScore";
let highScore;

// Chooses a random command from commands array 
function chooseRandomCommand(a) {
    return commands[Math.floor(Math.random() * commands.length)];
}


function showCommand(command) {
    if (command === "Bop It") {
        $("h3").removeClass("bops");
    }
    if (command === "Twist It") {
        $("h3").removeClass("twists");
    }
    if (command === "Pull It") {
        $("h3").removeClass("pulls");
    }
}

// Starts game by clearing anything left over from a previous
// game before calling playGame
function startGame() {
    endGame.called = false;
    resetScore();
    score = 0;
    startTimerControls(30, timerDisplay);
    playGame();
}


function playGame() {
    // Disables start button to prevent timer restarting
    document.getElementById("startButton").disabled = true;
    
    // Enables game buttons 
    document.getElementById("bopIt").disabled = false;
    document.getElementById("twistIt").disabled = false;
    document.getElementById("pullIt").disabled = false;
    document.getElementById("bops").classList.add("bops");
    document.getElementById("pulls").classList.add("pulls");
    document.getElementById("twists").classList.add("twists");
    document.getElementById("losing").classList.add("losing");
    let command = chooseRandomCommand();
    let bopItButton = 
        document.getElementById("bopIt").getAttribute("data-type");
    let pullItButton = 
        document.getElementById("pullIt").getAttribute("data-type");
    let twistItButton = 
        document.getElementById("twistIt").getAttribute("data-type");
    showCommand(command);


    document.getElementById("bopIt").onclick = function() {
        if (command === bopItButton) {
            updateScoreBoard();
            document.getElementById("bops").classList.add("bops");
            playGame();
        }
        else {
            endGame();
        }
    };


    document.getElementById("pullIt").onclick = function() {
        if (command === pullItButton) {
            updateScoreBoard();
            document.getElementById("pulls").classList.add("pulls");
            playGame();
        }
        else {
            endGame();
        }
    };


    document.getElementById("twistIt").onclick = function() {
        if (command === twistItButton) {
            updateScoreBoard();
            document.getElementById("twists").classList.add("twists");
            playGame();
        }
        else {
            endGame();

        }
    };


    // Hotkey functionality 
    document.onkeyup = function(a) {
        // "A" key for "Twist It"
        if (a.which === 65) {
            document.getElementById("twistIt").getAttribute("data-type");
            if (command === twistItButton && a.which === 65) {
                updateScoreBoard();
                document.getElementById("twists").classList.add("twists");
                playGame();
            }
            else {
                endGame();
            }
        }
        // "P" Key for "Pull It"
        else if (a.which === 80) {
            document.getElementById("pullIt").getAttribute("data-type");
            if (command === pullItButton && a.which === 80) {
                updateScoreBoard();
                document.getElementById("pulls").classList.add("pulls");
                playGame();
            }
            else {
                endGame();
            }
        }
        // "B" Key for "Bop It"
        else if (a.which === 66) {
            document.getElementById("bopIt").getAttribute("data-type");
            if (command === bopItButton && a.which === 66) {
                updateScoreBoard();
                document.getElementById("bops").classList.add("bops");
                playGame();
            }
            else {
                endGame();
            }
        }
    };
}


function updateScoreBoard() {
    score++;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = score;
}


function resetScore() {
    let score = 0;
    let scoreBox = document.getElementById("score");
    scoreBox.textContent = score;
}


function updateHighScoreBoard() {
    if (localStorage.getItem(localStorageName) === null) {
        highScore = 0;
    }
    else {
        highScore = localStorage.getItem(localStorageName);
    }
    highScore = Math.max(score, highScore);
    localStorage.setItem(localStorageName, highScore);
    let highScoreBox = document.getElementById("highScore");
    highScoreBox.textContent = highScore;
}


function startTimerControls(duration, timerDisplay) {
    let timer = duration,
        minutes, seconds;
    let timesRan = 0;
    let interval = setInterval(function() {
        timesRan += 1;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;


        if (--timer < 0) {
            timer = duration;
        }
        
        // if timer runs out, calls endGame to end the game 
        if (timesRan === 31) {
            endGame();
            clearInterval(interval);
        }
        
        // if endGame is called (i.e. incorrect answer), clears timer
        if (endGame.called === true) {
            clearInterval(interval);
        }

    }, 1000);
}


function endGame() {
    // Signals to startTimer to stop the timer
    endGame.called = true;
    document.getElementById("bops").classList.add("bops");
    document.getElementById("pulls").classList.add("pulls");
    document.getElementById("twists").classList.add("twists");
    $("h3").removeClass("losing");
    
    // Disables game buttons to prevent cheating
    document.getElementById("bopIt").disabled = true;
    document.getElementById("twistIt").disabled = true;
    document.getElementById("pullIt").disabled = true;
    
    // Enables start button to restart game 
    document.getElementById("startButton").disabled = false;
    
    // Disables hotkeys to prevent cheating
    document.onkeyup = function(a) {
        (a.which !== 80 && a.which !== 65 && a.which !== 66);
    };
    updateHighScoreBoard();
}


// Modal on page load 
function loadModal() {
    $('#rotateScreenModal').modal('show');

    // Clears high score 
    window.onload = window.localStorage.clear();
}
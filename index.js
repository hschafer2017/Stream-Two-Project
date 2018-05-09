// console.log(flash())


//     // if ($("#bop").attr("src") == "bop1.jpg") {
//     //     $("#bop").attr("src", "bop2.jpg");

//     // if ($("#bop").attr("src") == "pull1.jpg") {
//     //     $("#bop").attr("src", "pull2.jpg");

//     // if ($("#bop").attr("src") == "twist1.jpg") {
//     //     $("#bop").attr("src", "twist2.jpg");

// function startGame() {
//         if (command == bopButton) {
//             // $("#bop").attr("src, bop1.jpg").fade;
//             console.log("correct");
//             // document.getElementById("bops").classList.add("bops");
//         }
//         else {
//             console.log("You Lose")
//         }
//     
//         if (command == pullButton) {
//             // $("#pull").attr("src, pull1.jpg").fade;
//             console.log("Correct");
//             // document.getElementById("twists").classList.add("twists");
//         }
//         else {
//             console.log("You Lose")
//         }
//     
//         if (command == twistButton) {
//             // $("#twist").attr("src, twist1.jpg").fade;
//             console.log("Correct");
//             // document.getElementById("pulls").classList.add("pulls");
//             // console.log("done pulling");
//            
//         }
//         else {
//             console.log("You lost!");
//             // document.getElementById("losing").innerHTML =
//             //     "You Lost!";
//             // $("h3").removeClass("losing");
//             // stop loop
//         }
// }

let commands = ["Bop It", "Twist It", "Pull It"];

function bopPrompt(a) {

    return commands[Math.floor(Math.random() * commands.length)];
}

function flash(command) {
    if (command == "Bop It") {
        
        $("h3").removeClass("bops");
        console.log("bopping")
    }
    if (command == "Twist It") {
        
        $("h3").removeClass("twists");
        console.log("twisting")
    }
    if (command == "Pull It") {
        
        $("h3").removeClass("pulls");
        console.log("pulling")
    }
}

let score = 0

function startGame() {

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
            console.log("Correct Bop")
            score++
            console.log(score)
            document.getElementById("bops").classList.add("bops");
            startGame()

        }
        else {
            document.getElementById("bops").classList.add("bops")
            document.getElementById("pulls").classList.add("pulls")
            document.getElementById("twists").classList.add("twists");
            document.getElementById("losing").innerHTML =
                "You Lost! Press start to play again!";
            $("h3").removeClass("losing");
            console.log("You Lose");
            console.log(score);

        }
    }

    document.getElementById('pullIt').onclick = function() {
        if (command == pullButton) {
            console.log("Correct Pull")
            score++
            console.log(score)
            document.getElementById("pulls").classList.add("pulls");
            startGame()

        }
        else {
            document.getElementById("bops").classList.add("bops")
            document.getElementById("pulls").classList.add("pulls")
            document.getElementById("twists").classList.add("twists");
            document.getElementById("losing").innerHTML =
                "You Lost! Press Start to play again!";
            $("h3").removeClass("losing");
            console.log("You Lose");
            console.log(score);

        }
    }

    document.getElementById('twistIt').onclick = function() {
        if (command == twistButton) {
            console.log("Correct Twist")
            score++
            console.log(score)
            document.getElementById("twists").classList.add("twists");
            startGame()

        }
        else {
            document.getElementById("bops").classList.add("bops")
            document.getElementById("pulls").classList.add("pulls")
            document.getElementById("twists").classList.add("twists");
            document.getElementById("losing").innerHTML =
                "You Lost! Press start to play again!";
            $("h3").removeClass("losing");
            console.log("You Lose")
            console.log(score)

        }
    }

}









// Remember to credit Stack overflow for Randomizer
// using data-type is much easier than using a function within the button

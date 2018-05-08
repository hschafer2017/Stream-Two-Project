let commands = ["Bop It", "Twist It", "Pull It"];

function bopPrompt(command) {

    return commands[Math.floor(Math.random() * commands.length)];
// Remember to credit Stack overflow for Randomizer 

    if (command == "Bop It") {
        document.getElementById("#bops").innerHTML =
            $("h3").removeClass(".bops");
    }
    else if (command == "Twist It") {
        document.getElementById("#twists").innerHTML =
            $("h3").removeClass(".twists");
    }
    else if (command == "Pull It") {
        document.getElementById("#pulls").innerHTML =
            $("h3").removeClass(".pulls");
    }
}

console.log(bopPrompt());
console.log(typeof(bopPrompt()));


function bopIt() {
    if ($("#bop").attr("src") == "bop1.jpg") {
        $("#bop").attr("src", "bop2.jpg");
    return true 
    } else {
        return false
    }
    console.log('bop it');
}

function pullIt() {
    if ($("#pull").attr("src") == "pull1.jpg") {
        $("#pull").attr("src", "pull2.jpg");
        return true
    } else {
        return false 
    }
    console.log('pull it')
}

function twistIt() {
    if ($("#twist").attr("src") == "twist1.jpg") {
        $("#twist").attr("src", "twist2.jpg");
        return true 
    } else {
        return false 
    }
    console.log('twist it')
}
// Remember to credit Antonja for the return/true/false in if statements
function startGame() {
    
    bopPrompt();
    for (let i = 0; i <= 500; i++) {
        

        if (commands[0] && bopIt()) {
            // $("#bop").attr("src, bop1.jpg").fade;
            console.log("bop");
            if (i <= 500) {
                continue;
            }
            else {
                break;

            }
            // continue loop & credit stack overflow for continue/break part
        }
        else if (commands[2] && pullIt()) {
            // $("#pull").attr("src, pull1.jpg").fade;
            console.log("pull");
            if (i <= 500) {
                continue;
            }
            else {
                break;

            }
            // continue loop 
        }
        else if (commands[1] && twistIt()) {
            // $("#twist").attr("src, twist1.jpg").fade;
            console.log("twist");
            if (i <= 500) {
                continue;
            }
            else {
                break;
            }
            // continue loop 
        }
        else {
            i = 501;
            console.log("You lost!");
            document.getElementById("losing").innerHTML =
                "You Lost!"
            $("h3").removeClass("losing");
            // stop loop
        }
    }
}

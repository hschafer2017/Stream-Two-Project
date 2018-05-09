let commands = ["Bop It", "Twist It", "Pull It"];

function bopPrompt(a) {

    return commands[Math.floor(Math.random() * commands.length)];
}
console.log(bopPrompt());
// Remember to credit Stack overflow for Randomizer 

function flash(b) {
    if (bopPrompt() == "Bop It") {
        document.getElementById("bops").innerHTML =
            "Bop It!"
        $("h3").removeClass("bops");
        console.log("bopping")
    }
    else if (bopPrompt() == "Twist It") {
        document.getElementById("twists").innerHTML =
            "Twist It!"
        $("h3").removeClass("twists");
        console.log("twisting")
    }
    else if (bopPrompt() == "Pull It") {
        document.getElementById("pulls").innerHTML =
            "Pull It!"
        $("h3").removeClass("pulls");
        console.log("pulling")

    } else {
        console.log("flash fail")
    }
}


// console.log(bopPrompt());
// console.log(typeof(bopPrompt()));


function bopIt() {
    // if ($("#bop").attr("src") == "bop1.jpg") {
    //     $("#bop").attr("src", "bop2.jpg");
        console.log('bop it');
        return true; 
    //     } else {
    //         return false;
    //     }

    }


function pullIt() {
    // if ($("#pull").attr("src") == "pull1.jpg") {
    //     $("#pull").attr("src", "pull2.jpg");
        console.log('pull it');
        return true;
    // }
    // else {
    //     return false;
    // }
}

function twistIt() {
    // if ($("#twist").attr("src") == "twist1.jpg") {
    //     $("#twist").attr("src", "twist2.jpg");
        console.log('twist it');
        return true;
    // }
    // else {
    //     return false;
    // }
}
// Remember to credit Antonjia for the return/true/false in if statements
function startGame() {
flash();
    // bopPrompt();
    for (let i = 0; i <= 5; i++) {

        // if (bopPrompt() == "Bop It") {
        //     alert("bopit")
        // }

        // if (bopPrompt() == "Twist It") {
        //     alert("twistit")
        // }

        // if (bopPrompt() == "Pull It") {
        //     alert("pullit")
        // }


        if (bopPrompt() == "Bop It" && bopIt()) {
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
        else if (bopPrompt() == "Twist It" && twistIt()) {
            // $("#pull").attr("src, pull1.jpg").fade;
            console.log("twist");
            if (i <= 500) {
                continue;
            }
            else {
                break;

            }
            // continue loop 
    }
        else if (bopPrompt() == "Pull It" && pullIt()) {
            // $("#twist").attr("src, twist1.jpg").fade;
            console.log("pull");
            if (i <= 500) {
                continue;
            }
            else {
                break;
            }
            // continue loop 
        }
        else {
            // i = 501;
            break;
            console.log("You lost!");
            document.getElementById("losing").innerHTML =
                "You Lost!";
            $("h3").removeClass("losing");
            // stop loop
        }
    }
}

let commands = ["Bop It", "Twist It", "Pull It"];

function startGame(a, b) {
    for (let i = 0; i <= 500; i++) {

        if (commands[0] && bopIt()) {
            $("#bop").attr("src, bop1.jpg").fade;
            // continue loop 
        }
        else if (commands[1] && twistIt()) {
            $("#twist").attr("src, twist1.jpg").fade;
            // continue loop 
        }
        else if (commands[3] && pullIt()) {
            $("#pull").attr("src, pull1.jpg").fade;
            // continue loop 
        }
        else {
            i = 501;
            alert("You lost!");
            // stop loop
        }
    }
}

function bopIt() {
    if ($("#bop").attr("src") == "bop1.jpg") {
        $("#bop").attr("src", "bop2.jpg");
    }
}

function pullIt() {
    if ($("#pull").attr("src") == "pull1.jpg") {
        $("#pull").attr("src", "pull2.jpg");
    }
}

function twistIt() {
    if ($("#twist").attr("src") == "twist1.jpg") {
        $("#twist").attr("src", "twist2.jpg");
    }
}

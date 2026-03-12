let gameSeq = []
let userSeq = []

let buttoncolors = ['green', 'red', 'yellow', 'blue']
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let score = 0;


function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    score = 0;
    h2.innerText = "Press any key to start";
}

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

// Add click event to colored boxes to start the game
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        if (started == false) {
            console.log("game is started");
            started = true;
            levelup();
        }
    });
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 100);
}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 100);
}
function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

 



//random button choose
let randIdx = Math.floor(Math.random() * buttoncolors.length);
let randColor = buttoncolors[randIdx];
let randbtn = document.querySelector("." + randColor);
gameSeq.push(randColor);
console.log(gameSeq);
btnFlash(randbtn);

}


function checkAns(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            score = level; // update score to current level
            setTimeout(levelup, 1000);
            console.log("samevalue");
        }
    }
    else {
        console.log("wrong");
        h2.innerText = `Game Over! Score: ${score}. Press Any Key to Restart`;
        started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
    }
}




function btnpress() {
    console.log(this)

    let btn = this;

    btnFlash(btn);
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSeq.push(usercolor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
    
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns)  {
    btn.addEventListener("click", btnpress);
}

// Optional: allow reset by clicking h2
h2.addEventListener("click", resetGame);

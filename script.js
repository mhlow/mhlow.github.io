const playerImg = document.querySelector(".demoPlayer");

const playerWidth = 1.8 * 29;
const MOVEMENT_SPEED = 10;
let posX = playerImg.offsetLeft;
let posY = playerImg.offsetTop;

let UPKEY = "KeyW"
let DOWNKEY = "KeyS"
let LEFTKEY = "KeyA"
let RIGHTKEY = "KeyD"

let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;

document.addEventListener('keydown', function(e) {   
    let keyPress = e.code;
    if (keyPress === UPKEY) {
        UP = true;
        console.log("Move up");
    }
    if (keyPress === DOWNKEY) {
        DOWN = true;
        console.log("Move down");
    }
    if (keyPress === LEFTKEY) {
        LEFT = true;
        console.log("Move left");
    }
    if (keyPress === RIGHTKEY) {
        RIGHT = true;
        console.log("Move right");
    }


})

document.addEventListener('keyup', function(e) {   
    let keyPress = e.code;
    if (keyPress === UPKEY) {
        UP = false;
    }
    if (keyPress === DOWNKEY) {
        DOWN = false;
    }
    if (keyPress === LEFTKEY) {
        LEFT = false;
    }
    if (keyPress === RIGHTKEY) {
        RIGHT = false;
    }
})

function updateDemo() {
    posX = playerImg.offsetLeft;
    posY = playerImg.offsetTop;


    if (UP) {
        posY -= MOVEMENT_SPEED;
    }
    if (DOWN) {
        posY += MOVEMENT_SPEED;
    }

    if (LEFT) {
        posX -= MOVEMENT_SPEED;
        if (!inHorizontalBounds(posX)) {
            posX = 0;
        }

        playerImg.style.transform = "scaleX(1)";
    }
    if (RIGHT) {
        posX += MOVEMENT_SPEED;
        if (!inHorizontalBounds(posX)) {
            posX = window.innerWidth - playerWidth - 18;
        }
        playerImg.style.transform = "scaleX(-1)";
    }



    playerImg.style.top = posY + "px";
    playerImg.style.left = posX + "px";
}

function inHorizontalBounds(playerX) {
    if (0 <= playerX && playerX <= window.innerWidth - playerWidth - 18) {
        return true;
    }
    return false;
}

bobUp = true;

function characterBob() {
    if (bobUp) {
        playerImg.style.top = playerImg.offsetTop + 2 + "px";
        bobUp = false;
    } else {
        playerImg.style.top = playerImg.offsetTop - 2 + "px";
        bobUp = true;
    }
}

setInterval(updateDemo, 20);
setInterval(characterBob, 600);




// archerImg.onclick = characterAnimation(archerImg);

// JQUERY



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
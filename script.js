const playerImg1 = document.querySelector(".demoPlayer1");
const playerImg2 = document.querySelector(".demoPlayer2");

const archerImg = document.querySelector("#archerImgContainer");
const bruteImg = document.querySelector("#bruteImgContainer");
const mageImg = document.querySelector("#mageImgContainer");
const rogueImg = document.querySelector("#rogueImgContainer");

const archerPage = document.querySelector(".archerPage");
const brutePage = document.querySelector(".brutePage");
const magePage = document.querySelector(".magePage");
const roguePage = document.querySelector(".roguePage");

const playerWidth = 1.8 * 29;
const MOVEMENT_SPEED = 5;
let posX1 = playerImg1.offsetLeft;
let posY1 = playerImg1.offsetTop;

let posX2 = playerImg2.offsetLeft;
let posY2 = playerImg2.offsetTop;

let UPKEY = "KeyW"
let DOWNKEY = "KeyS"
let LEFTKEY = "KeyA"
let RIGHTKEY = "KeyD"
let ARROWUPKEY = "ArrowUp"
let ARROWDOWNKEY = "ArrowDown"
let ARROWLEFTKEY = "ArrowLeft"
let ARROWRIGHTKEY = "ArrowRight"

let UP = false;
let DOWN = false;
let LEFT = false;
let RIGHT = false;
let ARROWUP = false;
let ARROWDOWN = false;
let ARROWLEFT = false;
let ARROWRIGHT = false;

const body = document.body
const html = document.documentElement;

/* ------------------------------------------------------------------------------------ */
// Demo character movement

let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

document.addEventListener('keydown', function(e) {   
    let keyPress = e.code;

    // Player 1
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

    // Player 2
    if (keyPress === ARROWUPKEY) {
        ARROWUP = true;
        console.log("Move up");
    }
    if (keyPress === ARROWDOWNKEY) {
        ARROWDOWN = true;
        console.log("Move down");
    }
    if (keyPress === ARROWLEFTKEY) {
        ARROWLEFT = true;
        console.log("Move left");
    }
    if (keyPress === ARROWRIGHTKEY) {
        ARROWRIGHT = true;
        console.log("Move right");
    }

})

document.addEventListener('keyup', function(e) {   
    let keyPress = e.code;

    // Player 1
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

    // Player 2
    if (keyPress === ARROWUPKEY) {
        ARROWUP = false;
    }
    if (keyPress === ARROWDOWNKEY) {
        ARROWDOWN = false;
    }
    if (keyPress === ARROWLEFTKEY) {
        ARROWLEFT = false;
    }
    if (keyPress === ARROWRIGHTKEY) {
        ARROWRIGHT = false;
    }

})

function updateDemo() {
    height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    posX1 = playerImg1.offsetLeft;
    posY1 = playerImg1.offsetTop;
    posX2 = playerImg2.offsetLeft;
    posY2 = playerImg2.offsetTop;
    
    // Player 1
    if (UP) {
        posY1 -= MOVEMENT_SPEED;
    }
    if (DOWN) {
        posY1 += MOVEMENT_SPEED;
    }

    if (LEFT) {
        posX1 -= MOVEMENT_SPEED;

        playerImg1.style.transform = "scaleX(1)";
    }
    if (RIGHT) {
        posX1 += MOVEMENT_SPEED;
        playerImg1.style.transform = "scaleX(-1)";
    }

    // Player 2
    if (ARROWUP) {
        posY2 -= MOVEMENT_SPEED;
    }
    if (ARROWDOWN) {
        posY2 += MOVEMENT_SPEED;
    }

    if (ARROWLEFT) {
        posX2 -= MOVEMENT_SPEED;

        playerImg2.style.transform = "scaleX(1)";
    }
    if (ARROWRIGHT) {
        posX2 += MOVEMENT_SPEED;
        
        playerImg2.style.transform = "scaleX(-1)";
    }

    p1Bounds();
    p2Bounds();

    playerImg1.style.top = posY1 + "px";
    playerImg1.style.left = posX1 + "px";
    playerImg2.style.top = posY2 + "px";
    playerImg2.style.left = posX2 + "px";
    // console.log(`Player 1: (${posX1}, ${posY1})`);
    // console.log(`Player 2: (${posX2}, ${posY2})`);
}

function inHorizontalBounds(playerX, offset) {
    
    if (0 + offset <= playerX && playerX <= (window.innerWidth - 2 * playerWidth - 18) / 2 + offset) {
        return true;
    }
    return false;
}

function p1Bounds() {
    p1Left = window.innerWidth / (1348/72);
    p1Right = window.innerWidth / (1348/562);
    p1Top = height - Math.floor(window.innerWidth * 0.475);
    p1Bot = height - Math.floor(window.innerWidth * 0.184);

    // console.log(window.innerWidth);
    if (posX1 < p1Left) {
        posX1 = p1Left;
    } else if (p1Right < posX1) {
        posX1 = p1Right;
    }

    if (posY1 < p1Top) {
        posY1 = p1Top;
    } else if (p1Bot < posY1) {
        posY1 = p1Bot;
    }
}

function p2Bounds() {
    p2Left = window.innerWidth / (1348/730);
    p2Right = window.innerWidth / (1348/1218);
    p2Top = height - Math.floor(window.innerWidth * 0.475);
    p2Bot = height - Math.floor(window.innerWidth * 0.184);

    // console.log(window.innerWidth);
    if (posX2 < p2Left) {
        posX2 = p2Left;
    } else if (p2Right < posX2) {
        posX2 = p2Right;
    }

    if (posY2 < p2Top) {
        posY2 = p2Top;
    } else if (p2Bot < posY2) {
        posY2 = p2Bot;
    }
}

bobUp = true;

function characterBob() {
    if (bobUp) {
        playerImg1.style.top = playerImg1.offsetTop + 2 + "px";
        playerImg2.style.top = playerImg2.offsetTop + 2 + "px";
        bobUp = false;
    } else {
        playerImg1.style.top = playerImg1.offsetTop - 2 + "px";
        playerImg2.style.top = playerImg2.offsetTop - 2 + "px";
        bobUp = true;
    }
}

setInterval(updateDemo, 20);
setInterval(characterBob, 600);

/* ------------------------------------------------------------------------------------ */
// Demo buttons
const wasd = document.querySelector(".wasd");
const arrows = document.querySelector(".arrows");

let pressed = false;

function oscillateButtons() {
    if (pressed) {
        pressed = false;
        wasd.style.backgroundImage = "url('Assets/Images/wasd.png')"
        arrows.style.backgroundImage = "url('Assets/Images/arrows.png')"
    } else {
        pressed = true;
        wasd.style.backgroundImage = "url('Assets/Images/wasdPressed.png')"
        arrows.style.backgroundImage = "url('Assets/Images/arrowsPressed.png')"
    }
    
}

setInterval(oscillateButtons, 700);



/* ------------------------------------------------------------------------------------ */
// Characer hover page animation

let pageWidth = "22vw";
let pagePadding = "0 0.4vw 0 1.4vw";

let aOpen = false;
let bOpen = false;
let mOpen = false;
let rOpen = false;

function openPage(str) {
    if (str === "archer") {
        aOpen = true;
        archerPage.style.width = pageWidth;
        archerPage.style.padding = pagePadding;
        
        setTimeout(() => {  
            if (aOpen) {
                archerPage.style.opacity = "1";
            }
        }, 200);
        
    }
    if (str === "brute") {
        bOpen = true;
        brutePage.style.width = pageWidth;
        brutePage.style.padding = pagePadding;

        setTimeout(() => {  
            if (bOpen) {
                brutePage.style.opacity = "1";
            }
        }, 200);
    }
    if (str === "mage") {
        mOpen = true;
        magePage.style.width = pageWidth;
        magePage.style.padding = pagePadding;

        setTimeout(() => {  
            if (mOpen) {
                magePage.style.opacity = "1";
            }
        }, 200);
    }
    if (str === "rogue") {
        rOpen = true;
        roguePage.style.width = pageWidth;
        roguePage.style.padding = pagePadding;

        setTimeout(() => {  
            if (rOpen) {
                roguePage.style.opacity = "1";
            }
        }, 200);
    }
}

function closePage(str) {
    if (str === "archer") {
        aOpen = false;
        archerPage.style.opacity = "0";

        setTimeout(() => {  
            if (!aOpen) {
                archerPage.style.width = "0";
                archerPage.style.padding = "0";
            }
        }, 200);
        
    }
    if (str === "brute") {
        bOpen = false;
        brutePage.style.opacity = "0";

        setTimeout(() => {  
            if (!bOpen) {
        brutePage.style.width = "0";
        brutePage.style.padding = "0";
            }
        }, 200);
    }
    if (str === "mage") {
        mOpen = false;
        magePage.style.opacity = "0";

        setTimeout(() => {  
            if (!mOpen) {
        magePage.style.width = "0";
        magePage.style.padding = "0";
            }
        }, 200);
    }
    if (str === "rogue") {
        rOpen = false;
        roguePage.style.opacity = "0";

        setTimeout(() => {  
            if (!rOpen) {
        roguePage.style.width = "0";
        roguePage.style.padding = "0";
            }
        }, 200);
    }
}


/* ------------------------------------------------------------------------------------ */
// Text animation

const weaponsText = document.querySelector(".weaponsText");
const weaponsDescText = document.querySelector(".weaponsDescText");

let SPEED = 5;
let forwards = true;
let offset = 0;

let weaponTitleText = [
    "Elden Wood Bow",
    "Soulreaper Club",
    "Elemental Codex",
    "Whispering Daggers"
]

let descText = [
    ["The Ranger has an enchanted bow, allowing her to deal", "damage to enemies from afar with lethal precision."], 
    ["The Necrobrawler wields a skeleton club, able to deal", "massive amounts of damage to those who get too close,", "and it even has some magical properties allowing it to summon", "the undead into your enemies' dungeons."], 
    ["The Mage casts powerful spells from her spellbook, which she", "uses to blast enemies at a safe distance, and to protect", "herself if those enemies manage to get too close for comfort."], 
    ["The Rogue fights with two sharp daggers, which he slices through", "enemies with as he nimbly dashes around, making him impossible", "to track as he cuts through his foes."]
];

let desc = "";
function textAnimation(num, weaponsDescText) {
    weaponsDescText.setAttribute('style', 'white-space: pre;');
    var longest = Math.max(...(descText[num].map(el => el.length)));

    var stopRep = setInterval(function () {
        if (forwards) {
            offset++;

            if (offset > longest) {
                forwards = false;
                clearInterval(stopRep);
                return;
            }

        } else {
            offset--;

            if (offset <= 0) {
                if (!forwards) {
                    forwards = true;
                    textAnimation(descText, num, weaponsDescText);
                }
                clearInterval(stopRep);
                
            }
        }

        
        if (forwards) {
            desc = "";
            for (let i = 0; i < descText[num].length; i++) {
                if (descText[num][i].length > offset) {
                    desc += descText[num][i].slice(0, offset) + "\r\n";
                } else {
                    desc += descText[num][i] + "\r\n";
                }
            }
            // console.log(desc);
        } else {
            descArr = desc.split("\r\n");
            
            for (let i = 0; i < descArr.length - 1; i++) {
                if (descArr[i].length) {
                    descArr[i] = descArr[i].slice(0, -1);
                }
            }

            desc = "";
            for (let i = 0; i < descArr.length; i++) {
                desc += descArr[i] + "\r\n";
                ;
            }

            // console.log(desc);
        }

        if (forwards) {
            weaponsText.textContent = weaponTitleText[num].slice(0, offset);
        } else {
            weaponsText.textContent = weaponsText.textContent.slice(0, offset);
        }
        
        weaponsDescText.textContent = desc;
    }, SPEED);

    
    
};

aWeaponCont.onclick = function() { textAnimation(0); lightUp("a") };
bWeaponCont.onclick = function() { textAnimation(1); lightUp("b") };
mWeaponCont.onclick = function() { textAnimation(2); lightUp("m") };
rWeaponCont.onclick = function() { textAnimation(3); lightUp("r") };


textAnimation(descText, 0, weaponsDescText);

/* ------------------------------------------------------------------------------------ */
// Border animation selection

const aWeaponCont = document.querySelector(".aWeaponCont");
const bWeaponCont = document.querySelector(".bWeaponCont");
const mWeaponCont = document.querySelector(".mWeaponCont");
const rWeaponCont = document.querySelector(".rWeaponCont");

function lightUp(cont) {
    document.documentElement.style.setProperty('--border-a', "none");
    document.documentElement.style.setProperty('--border-b', "none");
    document.documentElement.style.setProperty('--border-m', "none");
    document.documentElement.style.setProperty('--border-r', "none");

    if (cont === "a") {
        document.documentElement.style.setProperty('--border-a', "2px solid gold");
        
    }
    if (cont === "b") {
        document.documentElement.style.setProperty('--border-b', "2px solid gold");
        console.log("sdfsd");
    }
    if (cont === "m") {
        document.documentElement.style.setProperty('--border-m', "2px solid gold");
    }
    if (cont === "r") {
        document.documentElement.style.setProperty('--border-r', "2px solid gold");
    }
    
}


/* ------------------------------------------------------------------------------------ */

// Disable arrow and space page movement

window.addEventListener("keydown", function(e) { if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) { e.preventDefault(); } }, false);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
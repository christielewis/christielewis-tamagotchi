// let firstPage = document.getElementById("first-pg");
// let secondPage = document.getElementById("second-pg");
// first.style.opacity = 100;
// second.style.opacity = 0;

const namePrompt = () => {
    let tamaName = prompt(`Name your Tamagotchi!`);
    if(tamaName !== null) {
        document.getElementById("greet-name").innerText = `Hai, I'm ${tamaName}!`;
    }
    if(tamaName === "" || tamaName === null) {
        tamaName = prompt(`Please name me! I want to be friends!`)
        namePrompt();
        document.getElementById("greet-name").innerText = `Hai, I'm ${tamaName}!`;
    }
};

namePrompt();
// first.style.opacity = 0;
// second.style.opacity = 100;


const removeGif = () => {
    const imgEl = document.querySelector("img");
    const tamaGameId = document.querySelector("#tama-gifs");
    tamaGameId.removeChild(imgEl);
};

const addOrigGif = () => {
    removeGif();
    let origGif = document.createElement("img");
    origGif.setAttribute("src", "https://media3.giphy.com/media/IMfi5ugpf3W1y/giphy.gif?cid=ecf05e47r5d18g66l2d3uxxu33yyp15awd1cpwxdlf1yglxk&rid=giphy.gif&ct=g");
    origGif.setAttribute("width", "150px");
    origGif.setAttribute("height", "150px");
    document.querySelector("#tama-gifs").appendChild(origGif);
};
const addFeedGif = () => {
    removeGif();
    let feedGif = document.createElement("img");
    feedGif.setAttribute("src", "https://media2.giphy.com/media/EWRdYtAvIgZZAPa2V4/200w.gif");
    // feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
    feedGif.setAttribute("width", "150px");
    feedGif.setAttribute("height", "150px");
    document.querySelector("#tama-gifs").appendChild(feedGif);
};
const addPlayGif = () => {
    removeGif();
    let playGif = document.createElement("img");
    playGif.setAttribute("src", "https://media0.giphy.com/media/JoUjiOB8HFs9OwnaoP/200w.gif?cid=82a1493btegu2yfqz7iv1q0bbfy6yigaqcavoqv24dpt894v&rid=200w.gif&ct=s");
    // playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
    playGif.setAttribute("width", "150px");
    playGif.setAttribute("height", "150px");
    document.querySelector("#tama-gifs").appendChild(playGif);
};
const addNapGif = () => {
    removeGif();
    let napGif = document.createElement("img");
    napGif.setAttribute("src", "https://media0.giphy.com/media/l5Ixyi91ENW1N2MyAc/giphy.gif?cid=6c09b952ca8ct8e65z9klqgszi62c6yz1v7dzdojqeme1hok&rid=giphy.gif&ct=s");
    // napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
    napGif.setAttribute("width", "150px");
    napGif.setAttribute("height", "150px");
    document.querySelector("#tama-gifs").appendChild(napGif);
};
const addGameOverGif = () => {
    removeGif();
    let gameOverGif = document.createElement("img");
    gameOverGif.setAttribute("src", "https://media2.giphy.com/media/ktvFa67wmjDEI/200w.gif?cid=82a1493bmlv4wwpvznn38vqe7t1a95kmy2wt3rrgmda8ika3&rid=200w.gif&ct=g");
    gameOverGif.setAttribute("width", "150px");
    gameOverGif.setAttribute("height", "150px");
    document.querySelector("#tama-gifs").appendChild(gameOverGif);
};

const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");
const yesButton = document.getElementById("yes");

const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

let hungerCount = document.getElementById("hunger");
let boredomCount = document.getElementById("boredom");
let sleepyCount = document.getElementById("sleepy");
let ageCount = document.getElementById("age");
let gameOverMsg = document.getElementById("game-over");
let startOverMsg = document.getElementById("start-over");

let hungerNum = 0;
let boredomNum = 0;
let sleepyNum = 0;
let ageNum = 0;
// // let num = 0;

const addOneHunger = () => {
    hungerNum++;
    hungerCount.innerText = hungerNum;
};
const addOneBoredom = () => {
    boredomNum++;
    boredomCount.innerText = boredomNum;
};
const addOneSleepy = () => {
    sleepyNum++;
    sleepyCount.innerText = sleepyNum;
};

// // /* Function
// // upon any elements reaching zero, 
// // remove click functionality from all tama game buttons.
// // FIXXXXXX
// // */

// const numZero = () => {
//     if(hungerNum < 0) {
//         feedButton.removeEventListener('click', subOneHunger);
//     } else if(boredomNum < 0) {
//         playButton.removeEventListener('click', subOneBoredom);
//     } else if(sleepyNum < 0) {
//         napButton.removeEventListener('click', subOneSleepy);
//     } else {
//         feedButton.addEventListener('click', subOneHunger);
//         playButton.addEventListener('click', subOneBoredom);
//         napButton.addEventListener('click', subOneSleepy);
//     }
// };

const subOneHunger = () => {
    // for(num = 10; num > 0; num--) {
    //     num = hungerNum--
    // }
    // numZero();
    if(hungerNum > 0) {
        hungerNum--;
        hungerCount.innerText = hungerNum;
    }
    addFeedGif();
    addOneBoredom();
    gameOver();
};
const subOneBoredom = () => {
    // numZero();
    if(boredomNum > 0) {
        boredomNum--;
        boredomCount.innerText = boredomNum;
    }
    addPlayGif();
    addOneSleepy();
    gameOver();
};
const subOneSleepy = () => {
    // numZero();
    if(sleepyNum > 0) {
        sleepyNum--;
        sleepyCount.innerText = sleepyNum;
    }
    addNapGif();
    addOneHunger();
    gameOver();
};

feedButton.addEventListener('click', subOneHunger);
playButton.addEventListener('click', subOneBoredom);
napButton.addEventListener('click', subOneSleepy);

hungerIncrement = null;
boredomIncrement = null;
sleepyIncrement = null;
ageIncrement = null;

// let hungerIncrement = setInterval(function() {
//     if(hungerNum < 10) {
//         hungerNum++;
//         hungerCount.innerText = hungerNum;
//     }
// }, 2000);
const hungerCountFunc = () => {
    hungerIncrement = setInterval(function() {
        if(hungerNum < 10) {
            hungerNum++;
            hungerCount.innerText = hungerNum;
        }
    }, 2000);
}

// let boredomIncrement = setInterval(function() {
//     if(boredomNum < 10) {
//         boredomNum++;
//         boredomCount.innerText = boredomNum;
//     }
// }, 3000);
const boredomCountFunc = () => {
    boredomIncrement = setInterval(function() {
        if(boredomNum < 10) {
            boredomNum++;
            boredomCount.innerText = boredomNum;
        }
    }, 3000);
}

// let sleepyIncrement = setInterval(function() {
//     if(sleepyNum < 10) {
//         sleepyNum++;
//         sleepyCount.innerText = sleepyNum;
//     }
// }, 4000);
const sleepyCountFunc = () => {
    sleepyIncrement = setInterval(function() {
        if(sleepyNum < 10) {
            sleepyNum++;
            sleepyCount.innerText = sleepyNum;
        }
    }, 4000);
}

const ageCountFunc = () => {
    ageIncrement = setInterval(function() {
        ageNum++;
        ageCount.innerText = ageNum;
    }, 1000);

}

// Adding timers

// Hunger 
// Boredom
// Sleepiness
// Age

/*
Game over function
upon any of the elements reaching 10, must do the following:
1. remove click functionality of all tamagotchi game buttons
2. stop all setInterval timers
3. add gif of tamagotchi glitching (separate function?)
4. add message to top of screen saying what caused tamagotchi to glitch-hunger,etc.(separate function?)


*/

const gameOverMsgs = () => {
    if(hungerNum >=10) {
        gameOverMsg.innerText = `I died of hunger!`;
    } else if(boredomNum >=10) {
        gameOverMsg.innerText = `I died of boredom!`;
    } else if(sleepyNum >= 10) {
        gameOverMsg.innerText = `I died of sleepiness!`;
    }
}

const gameOver = () => {
    gameOverMsgs();
    if(hungerNum >= 10) {
        clearInterval(hungerIncrement);
        clearInterval(boredomIncrement);
        clearInterval(sleepyIncrement);
        clearInterval(ageIncrement);
        feedButton.removeEventListener('click', subOneHunger);
        playButton.removeEventListener('click', subOneBoredom);
        napButton.removeEventListener('click', subOneSleepy);
        startOverMsg.innerText = `Play again? Click "Yes" and press "Start"!`
        addGameOverGif();
    } else if(boredomNum >= 10) {
        clearInterval(hungerIncrement);
        clearInterval(boredomIncrement);
        clearInterval(sleepyIncrement);
        clearInterval(ageIncrement);
        feedButton.removeEventListener('click', subOneHunger);
        playButton.removeEventListener('click', subOneBoredom);
        napButton.removeEventListener('click', subOneSleepy);
        // gameOverMsg.innerText = `I died of boredom!`
        startOverMsg.innerText = `Play again? Click "Yes" and press "Start"!`
        addGameOverGif();
    } else if(sleepyNum >= 10) {
        clearInterval(hungerIncrement);
        clearInterval(boredomIncrement);
        clearInterval(sleepyIncrement);
        clearInterval(ageIncrement);
        // clearInterval(hungerCountFunc);
        // clearInterval(boredomCountFunc);
        // clearInterval(sleepyCountFunc);
        // clearInterval(ageCountFunc);
        feedButton.removeEventListener('click', subOneHunger);
        playButton.removeEventListener('click', subOneBoredom);
        napButton.removeEventListener('click', subOneSleepy);
        // gameOverMsg.innerText = `I died of sleepiness!`
        startOverMsg.innerText = `Play again? Click "Yes" and press "Start"!`
        addGameOverGif();
    }
}

const resetGame = () => {
    clearInterval(hungerIncrement);
    clearInterval(boredomIncrement);
    clearInterval(sleepyIncrement);
    clearInterval(ageIncrement);
    hungerNum = 0;
    boredomNum = 0;
    sleepyNum = 0;
    ageNum = 0;
    hungerCount.innerText = hungerNum;
    boredomCount.innerText = boredomNum;
    sleepyCount.innerText = sleepyNum;
    ageCount.innerText = ageNum;
    feedButton.removeEventListener('click', subOneHunger);
    playButton.removeEventListener('click', subOneBoredom);
    napButton.removeEventListener('click', subOneSleepy);
    startOverMsg.innerText = "";
    gameOverMsg.innerText = "";
    addOrigGif();
    // document.querySelector(".tama-info").removeChild(gameOverMsg);
    // document.querySelector(".restart-game").removeChild(startOverMsg);
}

// resetButton.addEventListener('click', resetGame);

const play = () => {
    hungerCountFunc();
    boredomCountFunc();
    sleepyCountFunc();
    ageCountFunc();
    feedButton.addEventListener('click', subOneHunger);
    playButton.addEventListener('click', subOneBoredom);
    napButton.addEventListener('click', subOneSleepy);
    document.querySelector(".tama-info").appendChild(gameOverMsg);
    document.querySelector(".restart-game").appendChild(startOverMsg);
}

startButton.addEventListener('click', play);
yesButton.addEventListener('click', resetGame);


// const gameOver = () => {
//     if(hungerNum >= 10 || boredomNum >= 10 || sleepyNum >= 10) {
//         clearInterval(hungerIncrement);
//         clearInterval(boredomIncrement);
//         clearInterval(sleepyIncrement);
//         clearInterval(ageIncrement);
//         addGameOverGif();
//         feedButton.removeEventListener('click', subOneHunger);
//         playButton.removeEventListener('click', subOneBoredom);
//         napButton.removeEventListener('click', subOneSleepy);
//     }
// }
//
// Using name entered on one page as an input in another
// may need to use class to accomplish this



// let tamaName = null;
// let submitName = document.getElementById("name-tama");
// submitName.onclick = function() {
//     console.log(`Hai, I'm ${tamaName}`);
// }
// const submitButton = () => {
//     tamaName = document.getElementById("name").value;
//     let tamaGreet = `Hai, I'm ${tamaName}!`;
//     const headerPara = document.getElementById("greet-name");
//     headerPara.appendChild(tamaGreet);
//     console.log(tamaGreet);
// }
// submitName.addEventListener('click', submitButton);

// const feedButton = document.getElementById("feed");
// const playButton = document.getElementById("play");
// const napButton = document.getElementById("nap");

// let hungerCount = document.getElementById("hunger");
// let boredomCount = document.getElementById("boredom");
// let sleepyCount = document.getElementById("sleepy");
// let ageCount = document.getElementById("age");

// class Tamagotchi {
//     constructor(hunger, boredom, sleepy, age, name) {
//         this.hunger = hunger;
//         this.boredom = boredom;
//         this.sleepy = sleepy;
//         this.age = age;
//         // this.ageInt = null;
//         this.name = name;
//         this.hungerNum = 0;
//         this.boredomNum = 0;
//         this.sleepyNum = 0;
//         this.ageNum = 0;
//     }
//     removeGif() {
//         const imgEl = document.querySelector("img");
//         const tamaGameId = document.querySelector("#tama-gifs");
//         tamaGameId.removeChild(imgEl);
//     }
//     addFeedGif() {
//         removeGif();
//         let feedGif = document.createElement("img");
//         feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
//         feedGif.setAttribute("width", "150px");
//         feedGif.setAttribute("height", "150px");
//         document.querySelector("#tama-gifs").appendChild(feedGif);
//     }
//     addPlayGif() {
//         removeGif();
//         let playGif = document.createElement("img");
//         playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
//         playGif.setAttribute("width", "150px");
//         playGif.setAttribute("height", "150px");
//         document.querySelector("#tama-gifs").appendChild(playGif);
//     }
//     addNapGif() {
//         removeGif();
//         let napGif = document.createElement("img");
//         napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
//         napGif.setAttribute("width", "150px");
//         napGif.setAttribute("height", "150px");
//         document.querySelector("#tama-gifs").appendChild(napGif);
//     }

//     addOneHunger() {
//         hungerNum++;
//         hungerCount.innerText = hungerNum;
//     }
//     addOneBoredom() {
//         boredomNum++;
//         boredomCount.innerText = boredomNum;
//     }
//     addOneSleepy() {
//         sleepyNum++;
//         sleepyCount.innerText = sleepyNum;
//     }
//     numZero() {
//         if(hungerNum === 0) {
//             feedButton.removeEventListener('click', subOneHunger);
//         } else if(boredomNum === 0) {
//             playButton.removeEventListener('click', subOneBoredom);
//         } else if(sleepyNum === 0) {
//             napButton.removeEventListener('click', subOneSleepy);
//         } else {
//             feedButton.addEventListener('click', subOneHunger);
//             playButton.addEventListener('click', subOneBoredom);
//             napButton.addEventListener('click', subOneSleepy);
//         }
//     }
//     subOneHunger() {
//         numZero();
//         this.hungerNum--;
//         this.hunger = configs.hungers[this.hungerNum];
//         hungerCount.innerText = this.hungerNum;
//         addFeedGif();
//         // addOneBoredom();
//     }
//     subOneBoredom() {
//         numZero();
//         boredomNum--;
//         boredomCount.innerText = boredomNum;
//         addPlayGif();
//         // addOneSleepy();
//     }
//     subOneSleepy() {
//         numZero();
//         sleepyNum--;
//         sleepyCount.innerText = sleepyNum;
//         addNapGif();
//         // addOneHunger();
//     }
    
//     startHunger() {
//         setInterval(function() {
//             hungerNum++;
//             hungerCount.innerText = hungerNum;
//         }, 2000);
//     }
//     startBoredom() {
//         setInterval(function() {
//             boredomNum++;
//             boredomCount.innerText = boredomNum;
//         }, 3000);
//     }
//     startSleepy() {
//         setInterval(function() {
//             sleepyNum++;
//             sleepyCount.innerText = sleepyNum;
//         }, 4000);
//     }
//     startAge() {
//         setInterval(function() {
//             // console.log(this.ageNum);
//             this.ageNum--;
//             this.age = configs.ages[this.hungerNum];
//             ageCount.innerText = this.hungerNum;
//         }, 1000);
//     }
// }
// console.log("Does this work?");
// const pusheen = new Tamagotchi("P");
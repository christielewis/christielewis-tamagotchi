let tamaName = prompt(`Name your Tamagotchi!`);
const namePrompt = () => {
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

const removeGif = () => {
    const imgEl = document.querySelector("img");
    const tamaGameId = document.querySelector("#tama-gifs");
    tamaGameId.removeChild(imgEl);
};

const addOrigGif = () => {
    removeGif();
    let origGif = document.createElement("img");
    origGif.setAttribute("src", "https://media0.giphy.com/media/4PUkqN8QQsaFIkqi8a/giphy.gif?cid=6c09b95276f2d81951db2d1cd9b626e8512b3d8598c4a5d0&rid=giphy.gif&ct=s");
    origGif.setAttribute("width", "250px");
    origGif.setAttribute("height", "250px");
    document.querySelector("#tama-gifs").appendChild(origGif);
};
const addFeedGif = () => {
    removeGif();
    let feedGif = document.createElement("img");
    feedGif.setAttribute("src", "https://media2.giphy.com/media/EWRdYtAvIgZZAPa2V4/200w.gif");
    // feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
    feedGif.setAttribute("width", "250px");
    feedGif.setAttribute("height", "250px");
    document.querySelector("#tama-gifs").appendChild(feedGif);
};
const addPlayGif = () => {
    removeGif();
    let playGif = document.createElement("img");
    playGif.setAttribute("src", "https://media0.giphy.com/media/JoUjiOB8HFs9OwnaoP/200w.gif?cid=82a1493btegu2yfqz7iv1q0bbfy6yigaqcavoqv24dpt894v&rid=200w.gif&ct=s");
    // playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
    playGif.setAttribute("width", "250px");
    playGif.setAttribute("height", "250px");
    document.querySelector("#tama-gifs").appendChild(playGif);
};
const addNapGif = () => {
    removeGif();
    let napGif = document.createElement("img");
    napGif.setAttribute("src", "https://media0.giphy.com/media/l5Ixyi91ENW1N2MyAc/giphy.gif?cid=6c09b952ca8ct8e65z9klqgszi62c6yz1v7dzdojqeme1hok&rid=giphy.gif&ct=s");
    // napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
    napGif.setAttribute("width", "250px");
    napGif.setAttribute("height", "250px");
    document.querySelector("#tama-gifs").appendChild(napGif);
};
const addGameOverGif = () => {
    removeGif();
    let gameOverGif = document.createElement("img");
    gameOverGif.setAttribute("src", "https://s3.us-east-2.amazonaws.com/stickers-for-discord/pusheen-1527661743171-rofl.png");
    gameOverGif.setAttribute("width", "250px");
    gameOverGif.setAttribute("height", "250px");
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

const subOneHunger = () => {
    if(hungerNum > 0) {
        hungerNum--;
        hungerCount.innerText = hungerNum;
    }
    addFeedGif();
    addOneBoredom();
    gameOver();
};
const subOneBoredom = () => {
    if(boredomNum > 0) {
        boredomNum--;
        boredomCount.innerText = boredomNum;
    }
    addPlayGif();
    addOneSleepy();
    gameOver();
};
const subOneSleepy = () => {
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

const hungerCountFunc = () => {
    hungerIncrement = setInterval(function() {
        if(hungerNum < 10) {
            hungerNum++;
            hungerCount.innerText = hungerNum;
        }
    }, 2000);
}

const boredomCountFunc = () => {
    boredomIncrement = setInterval(function() {
        if(boredomNum < 10) {
            boredomNum++;
            boredomCount.innerText = boredomNum;
        }
    }, 3000);
}

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

// GAME OVER
const gameOverMsgs = () => {
    if(hungerNum >=10) {
        gameOverMsg.innerText = `I died of hunger! I made it to ${ageNum} years old.`;
    } else if(boredomNum >=10) {
        gameOverMsg.innerText = `I died of boredom! I made it to ${ageNum} years old.`;
    } else if(sleepyNum >= 10) {
        gameOverMsg.innerText = `I died of sleepiness! I made it to ${ageNum} years old.`;
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
        startOverMsg.innerText = `Play again? Click "Yes" then "Start"!`
        addGameOverGif();
    } else if(boredomNum >= 10) {
        clearInterval(hungerIncrement);
        clearInterval(boredomIncrement);
        clearInterval(sleepyIncrement);
        clearInterval(ageIncrement);
        feedButton.removeEventListener('click', subOneHunger);
        playButton.removeEventListener('click', subOneBoredom);
        napButton.removeEventListener('click', subOneSleepy);
        startOverMsg.innerText = `Play again? Click "Yes" then "Start"!`
        addGameOverGif();
    } else if(sleepyNum >= 10) {
        clearInterval(hungerIncrement);
        clearInterval(boredomIncrement);
        clearInterval(sleepyIncrement);
        clearInterval(ageIncrement);
        feedButton.removeEventListener('click', subOneHunger);
        playButton.removeEventListener('click', subOneBoredom);
        napButton.removeEventListener('click', subOneSleepy);
        startOverMsg.innerText = `Play again? Click "Yes" then "Start"!`
        addGameOverGif();
    }
}

// GAME RESET
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
}
yesButton.addEventListener('click', resetGame);

const play = () => {
    hungerCountFunc();
    boredomCountFunc();
    sleepyCountFunc();
    ageCountFunc();
    feedButton.addEventListener('click', subOneHunger);
    playButton.addEventListener('click', subOneBoredom);
    napButton.addEventListener('click', subOneSleepy);
    document.querySelector(".tama-info").appendChild(gameOverMsg);
    document.querySelector("#restart-game").appendChild(startOverMsg);
}
startButton.addEventListener('click', play);

class Tamagotchi {
    constructor(hunger, boredom, sleepy, age, name) {
        this.hunger = hunger;
        this.boredom = boredom;
        this.sleepy = sleepy;
        this.age = age;
        this.name = name;
        this.hungerNum = 0;
        this.boredomNum = 0;
        this.sleepyNum = 0;
        this.ageNum = 0;
    }
 
}
const pusheen = new Tamagotchi("P");
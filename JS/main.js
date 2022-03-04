const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");

let hungerCount = document.getElementById("hunger");
let boredomCount = document.getElementById("boredom");
let sleepyCount = document.getElementById("sleepy");
let ageCount = document.getElementById("age");

class Tamagotchi {
    constructor(name) {
        this.hungerNum = 0;
        this.boredomNum = 0;
        this.sleepyNum = 0;
        this.ageNum = 0;
        this.ageInt = null;
        this.name = name;
    }
    removeGif() {
        const imgEl = document.querySelector("img");
        const tamaGameId = document.querySelector("#tama-gifs");
        tamaGameId.removeChild(imgEl);
    }
    addFeedGif() {
        removeGif();
        let feedGif = document.createElement("img");
        feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
        feedGif.setAttribute("width", "150px");
        feedGif.setAttribute("height", "150px");
        document.querySelector("#tama-gifs").appendChild(feedGif);
    }
    addPlayGif() {
        removeGif();
        let playGif = document.createElement("img");
        playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
        playGif.setAttribute("width", "150px");
        playGif.setAttribute("height", "150px");
        document.querySelector("#tama-gifs").appendChild(playGif);
    }
    addNapGif() {
        removeGif();
        let napGif = document.createElement("img");
        napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
        napGif.setAttribute("width", "150px");
        napGif.setAttribute("height", "150px");
        document.querySelector("#tama-gifs").appendChild(napGif);
    }

    addOneHunger() {
        hungerNum++;
        hungerCount.innerText = hungerNum;
    }
    addOneBoredom() {
        boredomNum++;
        boredomCount.innerText = boredomNum;
    }
    addOneSleepy() {
        sleepyNum++;
        sleepyCount.innerText = sleepyNum;
    }
    numZero() {
        if(hungerNum === 0) {
            feedButton.removeEventListener('click', subOneHunger);
        } else if(boredomNum === 0) {
            playButton.removeEventListener('click', subOneBoredom);
        } else if(sleepyNum === 0) {
            napButton.removeEventListener('click', subOneSleepy);
        } else {
            feedButton.addEventListener('click', subOneHunger);
            playButton.addEventListener('click', subOneBoredom);
            napButton.addEventListener('click', subOneSleepy);
        }
    }
    subOneHunger() {
        numZero();
        hungerNum--;
        hungerCount.innerText = hungerNum;
        addFeedGif();
        // addOneBoredom();
    }
    subOneBoredom() {
        numZero();
        boredomNum--;
        boredomCount.innerText = boredomNum;
        addPlayGif();
        // addOneSleepy();
    }
    subOneSleepy() {
        numZero();
        sleepyNum--;
        sleepyCount.innerText = sleepyNum;
        addNapGif();
        // addOneHunger();
    }
    
    startHunger() {
        setInterval(function() {
            hungerNum++;
            hungerCount.innerText = hungerNum;
        }, 2000);
    }
    startBoredom() {
        setInterval(function() {
            boredomNum++;
            boredomCount.innerText = boredomNum;
        }, 3000);
    }
    startSleepy() {
        setInterval(function() {
            sleepyNum++;
            sleepyCount.innerText = sleepyNum;
        }, 4000);
    }
    var self = this;
    this.startAge = function() {
        this.ageInt = setInterval(function() {
            console.log(this.ageNum);
            this.ageNum++;
            // this.ageCount = this.ageNum;
        }, 1000);
    }
}

const pusheen = new Tamagotchi("P");

// const removeGif = () => {
//     const imgEl = document.querySelector("img");
//     const tamaGameId = document.querySelector("#tama-gifs");
//     tamaGameId.removeChild(imgEl);
// };

// const addFeedGif = () => {
//     removeGif();
//     let feedGif = document.createElement("img");
//     feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
//     feedGif.setAttribute("width", "150px");
//     feedGif.setAttribute("height", "150px");
//     document.querySelector("#tama-gifs").appendChild(feedGif);
// };
// const addPlayGif = () => {
//     removeGif();
//     let playGif = document.createElement("img");
//     playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
//     playGif.setAttribute("width", "150px");
//     playGif.setAttribute("height", "150px");
//     document.querySelector("#tama-gifs").appendChild(playGif);
// };
// const addNapGif = () => {
//     removeGif();
//     let napGif = document.createElement("img");
//     napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
//     napGif.setAttribute("width", "150px");
//     napGif.setAttribute("height", "150px");
//     document.querySelector("#tama-gifs").appendChild(napGif);
// };

// const feedButton = document.getElementById("feed");
// const playButton = document.getElementById("play");
// const napButton = document.getElementById("nap");

// let hungerCount = document.getElementById("hunger");
// let boredomCount = document.getElementById("boredom");
// let sleepyCount = document.getElementById("sleepy");
// let ageCount = document.getElementById("age");

// let hungerNum = 0;
// let boredomNum = 0;
// let sleepyNum = 0;
// let ageNum = 0;
// let num = 0;

// const addOneHunger = () => {
//     hungerNum++;
//     hungerCount.innerText = hungerNum;
// };
// const addOneBoredom = () => {
//     boredomNum++;
//     boredomCount.innerText = boredomNum;
// };
// const addOneSleepy = () => {
//     sleepyNum++;
//     sleepyCount.innerText = sleepyNum;
// };

/* Function
upon any elements reaching zero, 
remove click functionality from all tama game buttons.
FIXXXXXX
*/

// const numZero = () => {
//     if(hungerNum === 0) {
//         feedButton.removeEventListener('click', subOneHunger);
//     } else if(boredomNum === 0) {
//         playButton.removeEventListener('click', subOneBoredom);
//     } else if(sleepyNum === 0) {
//         napButton.removeEventListener('click', subOneSleepy);
//     } else {
//         feedButton.addEventListener('click', subOneHunger);
//         playButton.addEventListener('click', subOneBoredom);
//         napButton.addEventListener('click', subOneSleepy);
//     }
// };

// const subOneHunger = () => {
//     // for(num = 10; num > 0; num--) {
//     //     num = hungerNum--
//     // }
//     numZero();
//     hungerNum--;
//     hungerCount.innerText = hungerNum;
//     addFeedGif();
//     addOneBoredom();
// };
// const subOneBoredom = () => {
//     numZero();
//     boredomNum--;
//     boredomCount.innerText = boredomNum;
//     addPlayGif();
//     addOneSleepy();
// };
// const subOneSleepy = () => {
//     numZero();
//     sleepyNum--;
//     sleepyCount.innerText = sleepyNum;
//     addNapGif();
//     addOneHunger();
// };

// feedButton.addEventListener('click', subOneHunger);
// playButton.addEventListener('click', subOneBoredom);
// napButton.addEventListener('click', subOneSleepy);

// Adding timers

// Hunger 
// Boredom
// Sleepiness
// Age
// setInterval(function() {
//     hungerNum++;
//     hungerCount.innerText = hungerNum;
// }, 2000);


// setInterval(function() {
//     boredomNum++;
//     boredomCount.innerText = boredomNum;
// }, 3000);


// setInterval(function() {
//     sleepyNum++;
//     sleepyCount.innerText = sleepyNum;
// }, 4000);


// setInterval(function() {
//     ageNum++;
//     ageCount.innerText = ageNum;
// }, 1000);

/*
Game over function
upon any of the elements reaching 10, must do the following:
1. remove click functionality of all tamagotchi game buttons
2. stop all setInterval timers
3. add gif of tamagotchi glitching (separate function?)
4. add message to top of screen saying what caused tamagotchi to glitch-hunger,etc.(separate function?)


*/

// const gameOver = () => {
//     if(hungerNum === 10 || boredomNum === 10 || sleepyNum === 10) {
//         feedButton.removeEventListener('click', subOneHunger);
//         playButton.removeEventListener('click', subOneBoredom);
//         napButton.removeEventListener('click', subOneSleepy);
//     }
// }


//
// Using name entered on one page as an input in another
// may need to use class to accomplish this

// let submitName = document.getElementById("name-tama");
// submitName.onclick = function() {
//     let tamaName = document.getElementById("name").value;
//     console.log(`Hai, I'm ${tamaName}`);
// }
// const submitButton = () => {
//     let tamaName = document.getElementById("name").value;
//     let tamaGreet = `Hai, I'm ${tamaName}!`;
//     const headerPara = document.getElementById("greet-name");
//     headerPara.appendChild(tamaGreet);
//     // console.log(tamaGreet);
// }
// submitName.addEventListener('click', submitButton);
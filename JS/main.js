const removeGif = () => {
    const imgEl = document.querySelector("img");
    const tamaGameId = document.querySelector("#tama-gifs");
    tamaGameId.removeChild(imgEl);
}

const addFeedGif = () => {
    removeGif();
    let feedGif = document.createElement("img");
    feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
    document.querySelector("#tama-gifs").appendChild(feedGif);
}
const addPlayGif = () => {
    removeGif();
    let playGif = document.createElement("img");
    playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
    document.querySelector("#tama-gifs").appendChild(playGif);
}
const addNapGif = () => {
    removeGif();
    let napGif = document.createElement("img");
    napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
    document.querySelector("#tama-gifs").appendChild(napGif);
}

const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");

let hungerCount = document.getElementById("hunger");
let boredomCount = document.getElementById("boredom");
let sleepyCount = document.getElementById("sleepy");

let hungerNum = 0;
let boredomNum = 0;
let sleepyNum = 0;

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
    hungerNum--;
    hungerCount.innerText = hungerNum;
    addFeedGif();
    addOneBoredom();
};
const subOneBoredom = () => {
    boredomNum--;
    boredomCount.innerText = boredomNum;
    addPlayGif();
    addOneSleepy();
};
const subOneSleepy = () => {
    // removeGif();
    sleepyNum--;
    sleepyCount.innerText = sleepyNum;
    // removeGif();
    addNapGif();
    addOneHunger();
};

feedButton.addEventListener('click', subOneHunger);
playButton.addEventListener('click', subOneBoredom);
napButton.addEventListener('click', subOneSleepy);
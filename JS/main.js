const removeGif = () => {
    const imgEl = document.querySelector("img");
    const tamaGameId = document.querySelector("#tama-gifs");
    tamaGameId.removeChild(imgEl);
};

const addFeedGif = () => {
    removeGif();
    let feedGif = document.createElement("img");
    feedGif.setAttribute("src", "https://media4.giphy.com/media/iWkHDNtcHpB5e/giphy.gif?cid=ecf05e47updfo76ke3hr78jvon8985lt2gpc1jyrxr3u88nf&rid=giphy.gif&ct=g");
    document.querySelector("#tama-gifs").appendChild(feedGif);
};
const addPlayGif = () => {
    removeGif();
    let playGif = document.createElement("img");
    playGif.setAttribute("src", "https://media0.giphy.com/media/jEyKIvmt0BgLC/giphy.gif?cid=ecf05e47f8zu34sipklh0bq0miebtdrfleniue9vt7xjx056&rid=giphy.gif&ct=g");
    document.querySelector("#tama-gifs").appendChild(playGif);
};
const addNapGif = () => {
    removeGif();
    let napGif = document.createElement("img");
    napGif.setAttribute("src", "https://media3.giphy.com/media/JxFmWGrmynlCg/giphy.gif?cid=ecf05e47bgjw672bk7y3o0u2i7le279zl3m43uhq8pszz1oe&rid=giphy.gif&ct=g");
    document.querySelector("#tama-gifs").appendChild(napGif);
};

const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");

let hungerCount = document.getElementById("hunger");
let boredomCount = document.getElementById("boredom");
let sleepyCount = document.getElementById("sleepy");
let ageCount = document.getElementById("age");

let hungerNum = 0;
let boredomNum = 0;
let sleepyNum = 0;
let ageNum = 0;
// let num = 0;

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
    // for(num = 10; num > 0; num--) {
    //     num = hungerNum--
    // }
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
    sleepyNum--;
    sleepyCount.innerText = sleepyNum;
    addNapGif();
    addOneHunger();
};

feedButton.addEventListener('click', subOneHunger);
playButton.addEventListener('click', subOneBoredom);
napButton.addEventListener('click', subOneSleepy);

// Adding timers

// Hunger 
// setInterval(function() {
//     hungerNum++;
//     hungerCount.innerText = hungerNum;
// }, 2000);

// Boredom
// setInterval(function() {
//     boredomNum++;
//     boredomCount.innerText = boredomNum;
// }, 3000);

// Sleepiness
// setInterval(function() {
//     sleepyNum++;
//     sleepyCount.innerText = sleepyNum;
// }, 4000);

// Age
// setInterval(function() {
//     ageNum++;
//     ageCount.innerText = ageNum;
// }, 1000);

// Using name entered on one page as an input in another
// may need to use class to accomplish this

// let submitName = document.getElementById("name-tama");
// submitName.onclick = function() {
//     let tamaName = document.getElementById("name").value;
//     console.log(`Hi, I'm ${tamaName}`);
// }
// const submitButton = () => {
//     let tamaName = document.getElementById("name").value;
//     let tamaGreet = `Hai, I'm ${tamaName}!`;
//     const headerPara = document.getElementById("greet-name");
//     headerPara.appendChild(tamaGreet);
//     // console.log(tamaGreet);
// }
// submitName.addEventListener('click', submitButton);
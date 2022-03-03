const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const napButton = document.getElementById("nap");

let hungerCount = document.getElementById("hunger");
let boredomCount = document.getElementById("boredom");
let sleepyCount = document.getElementById("sleepy");

// console.log(hungerCount.innerText);

let hungerNum = 0;
let boredomNum = 0;
let sleepyNum = 0;
// console.log(hungerNum);

const addOneHunger = () => {
    hungerNum++;
    hungerCount.innerText = hungerNum;
}
const addOneBoredom = () => {
    boredomNum++;
    boredomCount.innerText = boredomNum;
}
const addOneSleepy = () => {
    sleepyNum++;
    sleepyCount.innerText = sleepyNum;
}

const subOneHunger = () => {
    hungerNum--;
    hungerCount.innerText = hungerNum;
    // console.log(hungerNum);
    addOneBoredom();
    addOneSleepy();
}
const subOneBoredom = () => {
    boredomNum--;
    boredomCount.innerText = boredomNum;
    addOneHunger();
    addOneSleepy();
}
const subOneSleepy = () => {
    sleepyNum--;
    sleepyCount.innerText = sleepyNum;
    addOneHunger();
    addOneBoredom();
}


feedButton.addEventListener('click', subOneHunger);
playButton.addEventListener('click', subOneBoredom);
napButton.addEventListener('click', subOneSleepy);
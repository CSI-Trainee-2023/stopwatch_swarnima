const playButton=document.getbyclass("play")[0];
const lapButton = document.getElementsByClassName("lap")[0] ;
const resetButton = document.getElementsByClassName("reset")[0];
const second = document.getElementsByClassName("sec")[0];
const centiSecond = document.getElementsByClassName("msec")[0];

let isPlay = false;
let secCounter = 0;
let minCounter = 0;
let min;
let sec;
let centiSec;
let centiCounter = 0;
let isreset = false;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
const play = () => {
    if( !isPlay && isreset){
        playButton.innerHTML = 'pause';
        min = setInterval(() => {
           
            minute.innerHTML = ' ${++minCounter} : ' ;
        },60*1000);

        sec = setInterval(() => {
            if(second === 60){
                secCounter = 0;
            }
            second.innerHTML = ' ${++secCounter} : ' ;
        }, 1000);
        centiSec = setInterval(() => {
               if (centiCounter === 100){
                centiCounter = 0;
               }
            centiSecond.innerHTML = ' ${++centiCounter} : ' ;
        }, 10);
        isPlay = true;
        isreset = true;
    } else{
        playButton.innerHTML = 'play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isreset = false;
    }
    toggleButton();
}

const reset = () => {
    isreset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = '0 :';
    centiSecond.innerHTML = '0';
minute.innerHTML = '0 :' ;
}
playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);

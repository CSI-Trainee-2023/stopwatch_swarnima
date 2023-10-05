const playButton=document.getbyclass("play")[0];
const lapButton = document.getElementsByClassName("lap")[0] ;
const resetButton = document.getElementsByClassName("reset")[0];
const second = document.getElementsByClassName("sec")[0];
let isPlay = false

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
const play = () => {
    if(isPlay){
        playButton.innerHTML = 'pause';
        isPlay = true;
    } else{
        playButton.innerHTML = 'play';
        isplay = false;
    }
    toggleButton();
}
const playSec = () => {
    setInterval(() => {
        second.innerHTML
    })
}
const reset = () => {
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
}
playButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
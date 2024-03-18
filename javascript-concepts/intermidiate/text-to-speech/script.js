const playBtn = document.getElementById("play-button")
const pauseBtn = document.getElementById("pause-button")
const stopBtn = document.getElementById("stop-button")
const textInput = document.getElementById("text")
const speedInput = document.getElementById("speed");
let currentCharacter

playBtn.addEventListener("click", () => {
    playText(textInput.value);
});
pauseBtn.addEventListener("click", pauseText);
stopBtn.addEventListener("click", stopText);
speedInput.addEventListener("input", () => {
    stopText();
    playText(utterence.text.substring(currentCharacter))
})

const utterence = new SpeechSynthesisUtterance(text);

utterence.addEventListener('end', () => {
    textInput.disabled = false;
});
utterence.addEventListener("boundary", (e) => {
    currentCharacter = e.charIndex;
})

function playText(text) {
    if(speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    
    if(speechSynthesis.speaking) return
    utterence.text = text;
    utterence.rate = speedInput.value || 1; // speed of speech
    textInput.disabled = true;
    speechSynthesis.speak(utterence);
}

function pauseText() {
    if(speechSynthesis.speaking) speechSynthesis.pause()
}
function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
}
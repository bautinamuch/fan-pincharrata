
const audio = document.getElementById("background-audio");
const audioControlButton = document.getElementById("audio-control");


audioControlButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        audioControlButton.textContent = "Desactivar Audio";
    } else {
        audio.pause();
        audioControlButton.textContent = "Activar Audio";
    }
});
function toggleAudio(audioId) {
    const audioElement = document.getElementById(audioId);
    const button = audioElement.nextElementSibling;

    if (audioElement.paused) {
        audioElement.play();
        button.textContent = "Desactivar Audio";
    } else {
        audioElement.pause();
        button.textContent = "Activar Audio";
    }
}

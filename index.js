let audioElements = [
    new Audio('./audio/Kicks/Kick/Kick01.wav'),
    new Audio('./audio/Snare/Snare48.wav'),
    new Audio('audio/Hi Hat/CHH45.wav'),
    new Audio('audio/Cymbals/Ride/Ride01.wav'),
    new Audio('audio/Toms/Tom28.wav'),
    new Audio('audio/Toms/Tom38.wav'),
    new Audio('audio/Toms/Tom07.wav'),
    new Audio('audio/Cymbals/Crash/Crash02.wav')
];

let buttonElements = document.querySelectorAll('.audio-button');
let volumeSlider = document.getElementById('volume-control');
let volumeDisplay = document.getElementById('volume-display');
let volumeLevel = volumeSlider.value / 100;


start();

function start() {
    initializeButtons();
    setVolumeDisplay();
}

function setVolumeDisplay() {
    volumeDisplay.innerHTML = "Volume: " + volumeLevel;
}

volumeSlider.addEventListener("input", (e) => {
    volumeLevel = e.currentTarget.value / 100;
    setVolumeDisplay();
});

function initializeButtons() {
    // Add event listeners for each button
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener("click", () => {
            switch (i) {
                case 0:
                    playAudio(0);
                    break;
                case 1:
                    playAudio(1);
                    break;
                case 2:
                    playAudio(2);
                    break;
                case 3:
                    playAudio(3);
                    break;
                case 4:
                    playAudio(4);
                    break;
                case 5:
                    playAudio(5);
                    break;
                case 6:
                    playAudio(6);
                    break;
                case 7:
                    playAudio(7);
                    break;
                default:
                    break;
            }
        });
    }
}

// Important to make this async so audio can be overlapped
async function playAudio(index) {
    try {
        let clip = audioElements[index];
        if (clip.currentTime > 0) {
            // 'clip' is already playing
            // Overlap the audio by creating a new Audio element
            let copy = new Audio(clip.src);
            copy.volume = volumeLevel;
            await copy.play();
            copy = undefined;
        }
        else {
            clip.volume = volumeLevel;
            await clip.play();
        }
    } catch (err) {
        console.log('Failed to play...' + err);
    }
}

document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "a":
            playAudio(0);
            break;
        case "s":
            playAudio(1);
            break;
        case "d":
            playAudio(2);
            break;
        case 'f':
            playAudio(3);
            break;
        case 'j':
            playAudio(4);
            break;
        case 'k':
            playAudio(5);
            break;
        case 'l':
            playAudio(6);
            break;
        case ';':
            playAudio(7);
            break;
    }
});
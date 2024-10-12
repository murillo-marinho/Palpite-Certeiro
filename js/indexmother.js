window.onload = function() {
    const backgroundSound = document.getElementById('backgroundSound');
    backgroundSound.play();
};

document.getElementById('contentFrame').onload = function() {
    const backgroundSound = document.getElementById('backgroundSound');
    if (backgroundSound.paused) {
        backgroundSound.play();
    }
};
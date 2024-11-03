function redirect() {
    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'Fases.html';
    }, 2000);
}

window.onload = function() {
    document.body.style.opacity = '1';
    startTyping();
};

const dialogue = [
    "Eu sou Hades, o deus do Submundo.","",
    "Meu reino, repleto de vida e abundância, está ameaçado por forças sombrias que desejam destruir o que construímos.","",
    "Preciso da sua ajuda para a realização de um desafio crucial que determinará o destino do meu reino."
];

let textPosition = 0;
let charIndex = 0;
const typingSpeed = 50;
const dialogText = document.getElementById('dialogText');
const continueButton = document.getElementById('continueButton');

function startTyping() {
    setTimeout(typeText, 2000);
}

function typeText() {
    if (textPosition < dialogue.length) {
        if (charIndex < dialogue[textPosition].length) {
            dialogText.innerHTML += dialogue[textPosition].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            dialogText.innerHTML += "<br>";
            textPosition++;
            charIndex = 0; 
            
           
            if (textPosition < dialogue.length) {
                setTimeout(typeText, typingSpeed); 
            } else {
                continueButton.style.display = 'block'; 
            }
        }
    }
}

function redirect() {
    document.body.style.transition = 'opacity 2s';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'Fases.html';
    }, 2000);
}

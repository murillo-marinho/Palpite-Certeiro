window.onload = function() {
    document.body.style.opacity = '1';
    startTyping();
};

localStorage.setItem('points',0);
localStorage.setItem('icone_guia_escondido',false);
localStorage.removeItem('limitePoderesTemisLocalStorage');
localStorage.removeItem('limitePoderesAtenaLocalStorage');
localStorage.removeItem('limitePoderesZeusLocalStorage');

const dialogue = [
    "Eu sou Deméter, a deusa da colheita e da fertilidade.","",
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
        window.location.href = 'fase-demeter-1.html';
    }, 2000);
}

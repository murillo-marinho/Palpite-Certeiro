const dialogue = "Eu sou Zeus, o deus do céu e governante dos deuses do Olimpo, conhecido pela minha força e por meu poder.\n\nDurante sua jornada, serei seu guia. Quando invocado, oferecerei meu poder, livrando-o de um desafio. No entanto, fique atento: poderei fazer isso apenas uma vez por fase.";
let textPosition = 0;
const typingSpeed = 50;
const dialogText = document.getElementById('dialogText');
const continueButton = document.getElementById('continueButton');

function startTyping() {
    setTimeout(typeText, 2000);
}

function typeText() {
    if (textPosition < dialogue.length) {
        dialogText.innerHTML += dialogue.charAt(textPosition);
        textPosition++;
        setTimeout(typeText, typingSpeed);
    } else {
        continueButton.style.display = 'block';
    }
}

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

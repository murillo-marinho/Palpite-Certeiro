const dialogue = "Eu sou Têmis, a deusa da justiça e da ordem. Represento a lei e a moralidade.\n\nDurante sua jornada, serei sua guia. Quando invocada, oferecerei minha justiça, aumentando suas chances de acerto para 50%. No entanto, fique atento: poderei fazer isso apenas duas vezes por fase.";
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

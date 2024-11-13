window.onload = function() {
    document.body.style.opacity = '1';
    startTyping();
};

localStorage.setItem('icone_guia_escondido',false);
localStorage.removeItem('limitePoderesTemisLocalStorage');
localStorage.removeItem('limitePoderesAtenaLocalStorage');
localStorage.removeItem('limitePoderesZeusLocalStorage');


const dialogue = [
    "O Monte Olimpo é a morada dos principais deuses gregos, liderados por Zeus.","",
    "Situado nas montanhas da Grécia, era visto como sagrado e inacessível aos mortais. Lá os deuses reuniam-se para decidir o destinos dos humanos e do cosmos","",
    "Pronto para testar o seu conhecimento? Avance para as questões que vão lhe testar!"
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
        window.location.href = 'fase-olimpo-1.html';
    }, 2000);
}

var perguntasAcertadasDemeter = localStorage.getItem('perguntasAcertadasDemeter') ? parseInt(localStorage.getItem('perguntasAcertadasDemeter')) : 0;
var perguntasAcertadasPoseidon = localStorage.getItem('perguntasAcertadasPoseidon') ? parseInt(localStorage.getItem('perguntasAcertadasPoseidon')) : 0;
var perguntasAcertadas = perguntasAcertadasDemeter + perguntasAcertadasPoseidon;

if(perguntasAcertadas >= 3){
    const circleOne = document.getElementById('circle-1');
    circleOne.style.display = "none";
}

if(perguntasAcertadas >= 6){
    const circleOne = document.getElementById('circle-2');
    circleOne.style.display = "none";
}

if(perguntasAcertadas >= 9){
    const circleOne = document.getElementById('circle-3');
    circleOne.style.display = "none";
}

function navigateToPhase(phase) {

    let url = '';
    switch (phase) {
        case 'afrodite':
            url = 'fase-afrodite.html';
            break;
        case 'demeter':
            url = 'fase-demeter.html';
            break;
        case 'submundo':
            url = 'fase-submundo.html';
            break;
        case 'olimpo':
            url = 'fase-olimpo.html';
            break;
    }

    if (url) {
        window.location.href = url;
    }
}

window.onload = function() {
    document.body.style.opacity = '1';
};


const modal = document.getElementById("myModal");
const exitButton = document.getElementById("exitButton");
const confirmExit = document.getElementById("confirmExit");
const cancelExit = document.getElementById("cancelExit");
const closeButton = document.getElementsByClassName("close")[0];


exitButton.onclick = function() {
    modal.style.display = "block";
}


closeButton.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

confirmExit.onclick = function() {

    window.location.href = "home.html"; 
}

cancelExit.onclick = function() {
    modal.style.display = "none";
}

function fadeOutAndRedirect(url) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    //overlay.style.pointerEvents = 'auto';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    overlay.style.opacity = '0';

    var canRedirect = true;
    console.log(perguntasAcertadas);
     
    if (url === "reino-poseidon.html" && perguntasAcertadas < 3) { 
        console.log(perguntasAcertadas);
        alert("Você precisa responder a pelo menos 3 perguntas para acessar esta página.");
        canRedirect = false; 
    } else if (url === "reino-submundo.html" && perguntasAcertadas < 6) { 
        console.log(perguntasAcertadas);
        alert("Você precisa responder a pelo menos 6 perguntas para acessar esta página.");
        canRedirect = false; 
    } else if (url === ".html" && perguntasAcertadas < 9) {
        console.log(perguntasAcertadas);
        alert("Você precisa responder a pelo menos 9 perguntas para acessar esta página."); 
        canRedirect = false; 
    } 
    
    if (canRedirect) {
        console.log(perguntasAcertadas);
        setTimeout(() => {
            overlay.style.transition = 'opacity 2s';
            overlay.style.opacity = '1';
            setTimeout(() => {
                window.location.href = url; 
                }, 2000); }
                , 0); 
            }
}
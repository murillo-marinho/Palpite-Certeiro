document.addEventListener('DOMContentLoaded', () => {
    var perguntasAcertadas = localStorage.getItem('perguntasAcertadas') ? parseInt(localStorage.getItem('perguntasAcertadas')) : null;
    if(perguntasAcertadas === null){
        perguntasAcertadas = 0;
    }

    const pontuation = document.getElementById('pontuation');

    const pontuationActual = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;

    pontuation.style.background= "linear-gradient(to right, rgba(12, 14, 90,0.9) "+pontuationActual+"%, #fff 10%)";
    pontuation.innerText = perguntasAcertadas + "/12";
    pontuation.style.color = "rgb(0,200,200)";
    pontuation.style.textAlign = "center";

});
document.addEventListener('DOMContentLoaded', () => {

    var perguntasAcertadasDemeter = localStorage.getItem('perguntasAcertadasDemeter') ? parseInt(localStorage.getItem('perguntasAcertadasDemeter')) : 0;
    var perguntasAcertadasPoseidon = localStorage.getItem('perguntasAcertadasPoseidon') ? parseInt(localStorage.getItem('perguntasAcertadasPoseidon')) : 0;
    var perguntasAcertadasSubmundo = localStorage.getItem('perguntasAcertadasSubmundo') ? parseInt(localStorage.getItem('perguntasAcertadasSubmundo')) : 0;
    var perguntasAcertadasMonteOlimpo = localStorage.getItem('perguntasAcertadasMonteOlimpo') ? parseInt(localStorage.getItem('perguntasAcertadasMonteOlimpo')) : 0;
    var perguntasAcertadas = perguntasAcertadasDemeter + perguntasAcertadasPoseidon + perguntasAcertadasSubmundo + perguntasAcertadasMonteOlimpo;
    
    const pontuationText= document.getElementById('pontuation-text');
    const pontuationWrapper = document.getElementById('pontuation-wrapper');

    if(perguntasAcertadas === 0){
        pontuationWrapper.style.width = "0px";
    }

    if(perguntasAcertadas === 1){
        pontuationWrapper.style.width = "17px";
    }

    if(perguntasAcertadas === 2){
        pontuationWrapper.style.width = "34px";
    }

    if(perguntasAcertadas === 3){
        pontuationWrapper.style.width = "51px";
    }

    if(perguntasAcertadas === 4){
        pontuationWrapper.style.width = "68px";
    }

    if(perguntasAcertadas === 5){
        pontuationWrapper.style.width = "85px";
    }

    if(perguntasAcertadas === 6){
        pontuationWrapper.style.width = "102px";
    }

    if(perguntasAcertadas === 7){
        pontuationWrapper.style.width = "119px";
    }

    if(perguntasAcertadas === 8){
        pontuationWrapper.style.width = "136px";
    }

    if(perguntasAcertadas === 9){
        pontuationWrapper.style.width = "153px";
    }

    if(perguntasAcertadas === 10){
        pontuationWrapper.style.width = "170px";
    }

    if(perguntasAcertadas === 11){
        pontuationWrapper.style.width = "187px";
    }

    if(perguntasAcertadas === 12){
        pontuationWrapper.style.width = "204px";
    }

    pontuationWrapper.style.borderRadius = "30px";
    
    pontuationWrapper.style.position="relative";
    pontuationText.innerText = perguntasAcertadas + "/12";
    pontuationText.style.color = "rgb(0,200,200)";
    pontuationText.style.position = "absolute";
    pontuationText.style.top = "-19px";
    pontuationText.style.left = "80px";
 

});
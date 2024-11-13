document.addEventListener('DOMContentLoaded', () => {
    const pontuation = document.getElementById('pontuation');
    const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) : 1;
    console.log(totalPerguntasRespondidas);
    const pontuationWrapper = document.getElementById('pontuation-wrapper');
    const page9 = document.getElementById('page9');
    const page10 = document.getElementById('page10');
    const page11 = document.getElementById('page11');
    const page12 = document.getElementById('page12');
    const pontuationText= document.getElementById('pontuation-text');

    let questaoAtualSubmundo = localStorage.getItem('questaoAtualSubmundo');

    let perguntasAcertadas = questaoAtualSubmundo;

    if(page9 !== null){
        pontuationWrapper.style.width = "65px";
        pontuationWrapper.style.borderTopLeftRadius = "30px";
        pontuationWrapper.style.borderBottomLeftRadius = "30px";
    }

    if(page10 !== null){
        pontuationWrapper.style.width = "130px";
        pontuationWrapper.style.borderTopLeftRadius = "30px";
        pontuationWrapper.style.borderBottomLeftRadius = "30px";
    }

    if(page11 !== null){
        pontuationWrapper.style.width = "195px";
        pontuationWrapper.style.borderRadius = "30px";
    }

    if(page12 !== null){
        if(totalPerguntasRespondidas === 1){
            pontuationWrapper.style.width = "65px";
            pontuationWrapper.style.borderTopLeftRadius = "30px";
            pontuationWrapper.style.borderBottomLeftRadius = "30px";
        }

        if(totalPerguntasRespondidas === 2){
            pontuationWrapper.style.width = "130px";
            pontuationWrapper.style.borderTopLeftRadius = "30px";
            pontuationWrapper.style.borderBottomLeftRadius = "30px";
        }

        if(totalPerguntasRespondidas === 3){
            pontuationWrapper.style.width = "195px";
            pontuationWrapper.style.borderRadius = "30px";
        }
    }

    pontuationText.innerText = perguntasAcertadas + "/3";
    pontuationText.style.position = "absolute";
    pontuationText.style.left = "50%";
    pontuationText.style.transform = "translateX(-50%)";
});
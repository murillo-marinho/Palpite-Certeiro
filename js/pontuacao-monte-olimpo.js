document.addEventListener('DOMContentLoaded', () => {
    const pontuation = document.getElementById('pontuation');
    const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) : 1;
    console.log(totalPerguntasRespondidas);
    const pontuationWrapper = document.getElementById('pontuation-wrapper');
    const page13 = document.getElementById('page13');
    const page14 = document.getElementById('page14');
    const page15 = document.getElementById('page15');
    const page16 = document.getElementById('page16');
    const pontuationText= document.getElementById('pontuation-text');

    let questaoAtualMonteOlimpo = localStorage.getItem('questaoAtualMonteOlimpo');

    let perguntasAcertadas = questaoAtualMonteOlimpo;

    if(page13 !== null){
        pontuationWrapper.style.width = "65px";
        pontuationWrapper.style.borderTopLeftRadius = "30px";
        pontuationWrapper.style.borderBottomLeftRadius = "30px";
    }

    if(page14 !== null){
        pontuationWrapper.style.width = "130px";
        pontuationWrapper.style.borderTopLeftRadius = "30px";
        pontuationWrapper.style.borderBottomLeftRadius = "30px";
    }

    if(page15 !== null){
        pontuationWrapper.style.width = "195px";
        pontuationWrapper.style.borderRadius = "30px";
    }

    if(page16 !== null){
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
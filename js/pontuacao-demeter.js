document.addEventListener('DOMContentLoaded', () => {
    const pontuation = document.getElementById('pontuation');
    const pontuationWrapper = document.getElementById('pontuation-wrapper');
    const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) : 1;
    console.log(totalPerguntasRespondidas);
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    const pontuationText= document.getElementById('pontuation-text');

    let questaoAtualDemeter = localStorage.getItem('questaoAtualDemeter');

    let perguntasAcertadas = questaoAtualDemeter;

    if(page1 !== null){
        pontuationWrapper.style.width = "65px";
        pontuationWrapper.style.borderTopLeftRadius = "30px";
        pontuationWrapper.style.borderBottomLeftRadius = "30px";
    }

    if(page2 !== null){
        pontuationWrapper.style.width = "130px";
        pontuationWrapper.style.borderTopLeftRadius = "30px";
        pontuationWrapper.style.borderBottomLeftRadius = "30px";
    }

    if(page3 !== null){
        pontuationWrapper.style.width = "190px";
        pontuationWrapper.style.borderRadius = "30px";
    }

    if(page4 !== null){
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
            pontuationWrapper.style.width = "190px";
            pontuationWrapper.style.borderRadius = "30px";
        }
    }

    pontuationText.innerText = perguntasAcertadas + "/3";
    pontuationText.style.position = "absolute";
    pontuationText.style.left = "50%";
    pontuationText.style.transform = "translateX(-50%)";
});
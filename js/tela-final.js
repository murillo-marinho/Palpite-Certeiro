document.addEventListener('DOMContentLoaded', () => {    
    const pontuacaoFinal=document.getElementById('pontuacao_final');
    const acertosFinal=document.getElementById('acertos_final');
    const nivelFinal=document.getElementById('nivel_final');

    const points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    if(points > 120){
       points = 120; 
    }

    const acertos = (points / 10) + " / 12"
    
    acertosFinal.innerHTML = acertos;
    pontuacaoFinal.innerHTML = points + " pts";

    if(points >= 0 && points <= 30){
        const nivel = "Bronze";
        nivelFinal.innerHTML = nivel;

    }else if(points > 30 && points <= 60){
        const nivel = "Prata";
        nivelFinal.innerHTML = nivel;

    }else if(points > 60 && points <= 90){
        const nivel = "Ouro";
        nivelFinal.innerHTML = nivel;
        
    }else if(points > 90 && points <= 120){
        const nivel = "Diamante";
        nivelFinal.innerHTML = nivel;
        
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const page13 = document.getElementById('page13');
    const page14 = document.getElementById('page14');
    const page15 = document.getElementById('page15');
    const page16 = document.getElementById('page16');
    let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    
    let pointsAdd = 0;

    /**Seta fase atual */
    localStorage.setItem('fase_atual',"Monte Olimpo");

 //page 1
if (page13 !== null) {
    const perguntasAcertadas = 1;
    localStorage.setItem('perguntasAcertadasMonteOlimpo', perguntasAcertadas);

    localStorage.setItem('questaoAtualMonteOlimpo',1);

    localStorage.setItem('perguntasAcertadas', perguntasAcertadas);

    const page13Btn1 = document.getElementById('res_1_questao_1_fase_olimpo');
    const page13Btn2 = document.getElementById('res_2_questao_1_fase_olimpo');
    const page13Btn3 = document.getElementById('res_3_questao_1_fase_olimpo');
    const page13Btn4 = document.getElementById('res_4_questao_1_fase_olimpo');

    const totalPerguntasRespondidas = 1;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page13Btn1.addEventListener('click', () => {
        page13Btn1.value = "Resposta 1 ❌";
        page13Btn2.value = "Resposta 2 ❌";
        page13Btn3.value = "Resposta 3 ✔";
        page13Btn4.value = "Resposta 4 ❌";

        page13Btn1.style.border = "3px solid #ff0000";
        page13Btn1.style.borderRadius = "5px";
        page13Btn2.style.border = "3px solid #ff0000";
        page13Btn2.style.borderRadius = "5px";
        page13Btn3.style.border = "3px solid #00ff00";
        page13Btn3.style.borderRadius = "5px";
        page13Btn4.style.border = "3px solid #ff0000";
        page13Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-olimpo-2.html";
        }, 3000);
    });

    page13Btn2.addEventListener('click', () => {
        page13Btn1.value = "Resposta 1 ❌";
        page13Btn2.value = "Resposta 2 ❌";
        page13Btn3.value = "Resposta 3 ✔";
        page13Btn4.value = "Resposta 4 ❌";

        page13Btn1.style.border = "3px solid #ff0000";
        page13Btn1.style.borderRadius = "5px";
        page13Btn2.style.border = "3px solid #ff0000";
        page13Btn2.style.borderRadius = "5px";
        page13Btn3.style.border = "3px solid #00ff00";
        page13Btn3.style.borderRadius = "5px";
        page13Btn4.style.border = "3px solid #ff0000";
        page13Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-olimpo-2.html";
        }, 3000);
    });

    page13Btn3.addEventListener('click', () => {
        page13Btn1.value = "Resposta 1 ❌";
        page13Btn2.value = "Resposta 2 ❌";
        page13Btn3.value = "Resposta 3 ✔";
        page13Btn4.value = "Resposta 4 ❌";

        page13Btn1.style.border = "3px solid #ff0000";
        page13Btn1.style.borderRadius = "5px";
        page13Btn2.style.border = "3px solid #ff0000";
        page13Btn2.style.borderRadius = "5px";
        page13Btn3.style.border = "3px solid #00ff00";
        page13Btn3.style.borderRadius = "5px";
        page13Btn4.style.border = "3px solid #ff0000";
        page13Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-olimpo-2.html";
        }, 3000);
    });

    page13Btn4.addEventListener('click', () => {
        page13Btn1.value = "Resposta 1 ❌";
        page13Btn2.value = "Resposta 2 ❌";
        page13Btn3.value = "Resposta 3 ✔";
        page13Btn4.value = "Resposta 4 ❌";

        page13Btn1.style.border = "3px solid #ff0000";
        page13Btn1.style.borderRadius = "5px";
        page13Btn2.style.border = "3px solid #ff0000";
        page13Btn2.style.borderRadius = "5px";
        page13Btn3.style.border = "3px solid #00ff00";
        page13Btn3.style.borderRadius = "5px";
        page13Btn4.style.border = "3px solid #ff0000";
        page13Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-olimpo-2.html";
        }, 3000);
    });
}

//page 2
if (page14 !== null) {
    const perguntasAcertadas = 2;
    localStorage.setItem('perguntasAcertadasMonteOlimpo', perguntasAcertadas);

    localStorage.setItem('questaoAtualMonteOlimpo',2);

    localStorage.setItem('perguntasAcertadas', perguntasAcertadas);

    const page14Btn1 = document.getElementById('res_1_questao_2_fase_olimpo');
    const page14Btn2 = document.getElementById('res_2_questao_2_fase_olimpo');
    const page14Btn3 = document.getElementById('res_3_questao_2_fase_olimpo');
    const page14Btn4 = document.getElementById('res_4_questao_2_fase_olimpo');
    const totalPerguntasRespondidas = 2;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page14Btn1.addEventListener('click', () => {
        page14Btn1.value = "Resposta 1 ❌";
        page14Btn2.value = "Resposta 2 ❌";
        page14Btn3.value = "Resposta 3 ❌";
        page14Btn4.value = "Resposta 4 ✔";

        page14Btn1.style.border = "3px solid #ff0000";
        page14Btn1.style.borderRadius = "5px";        
        page14Btn2.style.border = "3px solid #ff0000";
        page14Btn2.style.borderRadius = "5px";
        page14Btn3.style.border = "3px solid #ff0000";
        page14Btn3.style.borderRadius = "5px";
        page14Btn4.style.border = "3px solid #00ff00";
        page14Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";  
            }else{
                window.location.href = "fase-olimpo-3.html";
            }
        }, 3000);
    });

    page14Btn2.addEventListener('click', () => {
        page14Btn1.value = "Resposta 1 ❌";
        page14Btn2.value = "Resposta 2 ❌";
        page14Btn3.value = "Resposta 3 ❌";
        page14Btn4.value = "Resposta 4 ✔";

        page14Btn1.style.border = "3px solid #ff0000";
        page14Btn1.style.borderRadius = "5px";        
        page14Btn2.style.border = "3px solid #ff0000";
        page14Btn2.style.borderRadius = "5px";
        page14Btn3.style.border = "3px solid #ff0000";
        page14Btn3.style.borderRadius = "5px";
        page14Btn4.style.border = "3px solid #00ff00";
        page14Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";   
            }else{
                window.location.href = "fase-olimpo-3.html";
            }
        }, 3000);
    });

    page14Btn3.addEventListener('click', () => {
        page14Btn1.value = "Resposta 1 ❌";
        page14Btn2.value = "Resposta 2 ❌";
        page14Btn3.value = "Resposta 3 ❌";
        page14Btn4.value = "Resposta 4 ✔";

        page14Btn1.style.border = "3px solid #ff0000";
        page14Btn1.style.borderRadius = "5px";        
        page14Btn2.style.border = "3px solid #ff0000";
        page14Btn2.style.borderRadius = "5px";
        page14Btn3.style.border = "3px solid #ff0000";
        page14Btn3.style.borderRadius = "5px";
        page14Btn4.style.border = "3px solid #00ff00";
        page14Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";   
            }else{
                window.location.href = "fase-olimpo-3.html";
            }
        }, 3000);
    });

    page14Btn4.addEventListener('click', () => {
        page14Btn1.value = "Resposta 1 ❌";
        page14Btn2.value = "Resposta 2 ❌";
        page14Btn3.value = "Resposta 3 ❌";
        page14Btn4.value = "Resposta 4 ✔";

        page14Btn1.style.border = "3px solid #ff0000";
        page14Btn1.style.borderRadius = "5px";        
        page14Btn2.style.border = "3px solid #ff0000";
        page14Btn2.style.borderRadius = "5px";
        page14Btn3.style.border = "3px solid #ff0000";
        page14Btn3.style.borderRadius = "5px";
        page14Btn4.style.border = "3px solid #00ff00";
        page14Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";   
            }else{
                window.location.href = "fase-olimpo-3.html";
            }
        }, 3000);
    });
}

//page 3
if (page15 !== null) {
    const perguntasAcertadas = 3;
    localStorage.setItem('perguntasAcertadasMonteOlimpo', perguntasAcertadas);

    localStorage.setItem('questaoAtualMonteOlimpo',3);

    localStorage.setItem('perguntasAcertadas', perguntasAcertadas);

    const page15Btn1 = document.getElementById('res_1_questao_3_fase_olimpo');
    const page15Btn2 = document.getElementById('res_2_questao_3_fase_olimpo');
    const page15Btn3 = document.getElementById('res_3_questao_3_fase_olimpo');
    const page15Btn4 = document.getElementById('res_4_questao_3_fase_olimpo');
    const totalPerguntasRespondidas = 3;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page15Btn1.addEventListener('click', () => {
        page15Btn1.value = "Resposta 1 ❌";
        page15Btn2.value = "Resposta 2 ❌";
        page15Btn3.value = "Resposta 3 ✔";
        page15Btn4.value = "Resposta 4 ❌";

        page15Btn1.style.border = "3px solid #ff0000";
        page15Btn1.style.borderRadius = "5px";
        page15Btn2.style.border = "3px solid #ff0000";
        page15Btn2.style.borderRadius = "5px";
        page15Btn3.style.border = "3px solid #00ff00";
        page15Btn3.style.borderRadius = "5px";
        page15Btn4.style.border = "3px solid #ff0000";
        page15Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "tela-final.html"; 
        }, 3000);
    });

    page15Btn2.addEventListener('click', () => {
        page15Btn1.value = "Resposta 1 ❌";
        page15Btn2.value = "Resposta 2 ❌";
        page15Btn3.value = "Resposta 3 ✔";
        page15Btn4.value = "Resposta 4 ❌";

        page15Btn1.style.border = "3px solid #ff0000";
        page15Btn1.style.borderRadius = "5px";
        page15Btn2.style.border = "3px solid #ff0000";
        page15Btn2.style.borderRadius = "5px";
        page15Btn3.style.border = "3px solid #00ff00";
        page15Btn3.style.borderRadius = "5px";
        page15Btn4.style.border = "3px solid #ff0000";
        page15Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "tela-final.html"; 
        }, 3000);
    });


    page15Btn3.addEventListener('click', () => {
        page15Btn1.value = "Resposta 1 ❌";
        page15Btn2.value = "Resposta 2 ❌";
        page15Btn3.value = "Resposta 3 ✔";
        page15Btn4.value = "Resposta 4 ❌";

        page15Btn1.style.border = "3px solid #ff0000";
        page15Btn1.style.borderRadius = "5px";
        page15Btn2.style.border = "3px solid #ff0000";
        page15Btn2.style.borderRadius = "5px";
        page15Btn3.style.border = "3px solid #00ff00";
        page15Btn3.style.borderRadius = "5px";
        page15Btn4.style.border = "3px solid #ff0000";
        page15Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "tela-final.html"; 
        }, 3000);
    });


    page15Btn4.addEventListener('click', () => {
        page15Btn1.value = "Resposta 1 ❌";
        page15Btn2.value = "Resposta 2 ❌";
        page15Btn3.value = "Resposta 3 ✔";
        page15Btn4.value = "Resposta 4 ❌";

        page15Btn1.style.border = "3px solid #ff0000";
        page15Btn1.style.borderRadius = "5px";
        page15Btn2.style.border = "3px solid #ff0000";
        page15Btn2.style.borderRadius = "5px";
        page15Btn3.style.border = "3px solid #00ff00";
        page15Btn3.style.borderRadius = "5px";
        page15Btn4.style.border = "3px solid #ff0000";
        page15Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "tela-final.html"; 
        }, 3000);
    });
}

//page 4
if (page16 !== null) {
    const perguntasAcertadas = localStorage.getItem('perguntasAcertadasMonteOlimpo') ? parseInt(localStorage.getItem('perguntasAcertadasMonteOlimpo')) : 1;
    localStorage.setItem('perguntasAcertadasMonteOlimpo',perguntasAcertadas);

    const questaoMonteOlimpo = localStorage.getItem('questaoAtualMonteOlimpo') ? parseInt(localStorage.getItem('questaoAtualMonteOlimpo')) : 1;
    localStorage.setItem('questaoAtualMonteOlimpo',questaoMonteOlimpo);
    localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

    const page16Btn1 = document.getElementById('res_1_questao_4_fase_olimpo');
    const page16Btn2 = document.getElementById('res_2_questao_4_fase_olimpo');
    const page16Btn3 = document.getElementById('res_3_questao_4_fase_olimpo');
    const page16Btn4 = document.getElementById('res_4_questao_4_fase_olimpo');

    const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) : 1;;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page16Btn1.addEventListener('click', () => {
        page16Btn1.value = "Resposta 1 ❌";
        page16Btn2.value = "Resposta 2 ✔";
        page16Btn3.value = "Resposta 3 ❌";
        page16Btn4.value = "Resposta 4 ❌";

        page16Btn1.style.border = "3px solid #ff0000";
        page16Btn1.style.borderRadius = "5px";
        page16Btn2.style.border = "3px solid #00ff00";
        page16Btn2.style.borderRadius = "5px";
        page16Btn3.style.border = "3px solid #ff0000";
        page16Btn3.style.borderRadius = "5px";
        page16Btn4.style.border = "3px solid #ff0000";
        page16Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-olimpo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-olimpo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";    
            }
        }, 3000);
        
    });
    page16Btn2.addEventListener('click', () => {
        page16Btn1.value = "Resposta 1 ❌";
        page16Btn2.value = "Resposta 2 ✔";
        page16Btn3.value = "Resposta 3 ❌";
        page16Btn4.value = "Resposta 4 ❌";

        page16Btn1.style.border = "3px solid #ff0000";
        page16Btn1.style.borderRadius = "5px";
        page16Btn2.style.border = "3px solid #00ff00";
        page16Btn2.style.borderRadius = "5px";
        page16Btn3.style.border = "3px solid #ff0000";
        page16Btn3.style.borderRadius = "5px";
        page16Btn4.style.border = "3px solid #ff0000";
        page16Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-olimpo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-olimpo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";    
            }
        }, 3000);
    });

    page16Btn3.addEventListener('click', () => {
        page16Btn1.value = "Resposta 1 ❌";
        page16Btn2.value = "Resposta 2 ✔";
        page16Btn3.value = "Resposta 3 ❌";
        page16Btn4.value = "Resposta 4 ❌";

        page16Btn1.style.border = "3px solid #ff0000";
        page16Btn1.style.borderRadius = "5px";
        page16Btn2.style.border = "3px solid #00ff00";
        page16Btn2.style.borderRadius = "5px";
        page16Btn3.style.border = "3px solid #ff0000";
        page16Btn3.style.borderRadius = "5px";
        page16Btn4.style.border = "3px solid #ff0000";
        page16Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-olimpo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-olimpo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html";  
            }
        }, 3000);
        
    }); 

    page16Btn4.addEventListener('click', () => {
        page16Btn1.value = "Resposta 1 ❌";
        page16Btn2.value = "Resposta 2 ✔";
        page16Btn3.value = "Resposta 3 ❌";
        page16Btn4.value = "Resposta 4 ❌";

        page16Btn1.style.border = "3px solid #ff0000";
        page16Btn1.style.borderRadius = "5px";
        page16Btn2.style.border = "3px solid #00ff00";
        page16Btn2.style.borderRadius = "5px";
        page16Btn3.style.border = "3px solid #ff0000";
        page16Btn3.style.borderRadius = "5px";
        page16Btn4.style.border = "3px solid #ff0000";
        page16Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-olimpo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-olimpo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "tela-final.html"; 
            }
        }, 3000);
        
    });
}});

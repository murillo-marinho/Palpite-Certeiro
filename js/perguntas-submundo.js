document.addEventListener('DOMContentLoaded', () => {
    const page12 = document.getElementById('page12');
    const page9 = document.getElementById('page9');
    const page10 = document.getElementById('page10');
    const page11 = document.getElementById('page11');
    let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    
    let pointsAdd = 0;

    /**Seta fase atual */
    localStorage.setItem('fase_atual',"Submundo");

 //page 1
if (page9 !== null) {
    const perguntasAcertadas = 1;
    localStorage.setItem('perguntasAcertadasSubmundo', perguntasAcertadas);

    localStorage.setItem('questaoAtualSubmundo',1);

    localStorage.setItem('perguntasAcertadas', perguntasAcertadas);

    const page9Btn1 = document.getElementById('res_1_questao_1_fase_submundo');
    const page9Btn2 = document.getElementById('res_2_questao_1_fase_submundo');
    const page9Btn3 = document.getElementById('res_3_questao_1_fase_submundo');
    const page9Btn4 = document.getElementById('res_4_questao_1_fase_submundo');

    const totalPerguntasRespondidas = 1;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page9Btn1.addEventListener('click', () => {
        page9Btn1.value = "Resposta 1 ❌";
        page9Btn2.value = "Resposta 2 ❌";
        page9Btn3.value = "Resposta 3 ✔";
        page9Btn4.value = "Resposta 4 ❌";

        page9Btn1.style.border = "3px solid #ff0000";
        page9Btn1.style.borderRadius = "5px";
        page9Btn2.style.border = "3px solid #ff0000";
        page9Btn2.style.borderRadius = "5px";
        page9Btn3.style.border = "3px solid #00ff00";
        page9Btn3.style.borderRadius = "5px";
        page9Btn4.style.border = "3px solid #ff0000";
        page9Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-submundo-2.html";
        }, 3000);
    });

    page9Btn2.addEventListener('click', () => {
        page9Btn1.value = "Resposta 1 ❌";
        page9Btn2.value = "Resposta 2 ❌";
        page9Btn3.value = "Resposta 3 ✔";
        page9Btn4.value = "Resposta 4 ❌";

        page9Btn1.style.border = "3px solid #ff0000";
        page9Btn1.style.borderRadius = "5px";
        page9Btn2.style.border = "3px solid #ff0000";
        page9Btn2.style.borderRadius = "5px";
        page9Btn3.style.border = "3px solid #00ff00";
        page9Btn3.style.borderRadius = "5px";
        page9Btn4.style.border = "3px solid #ff0000";
        page9Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-submundo-2.html";
        }, 3000);
    });

    page9Btn3.addEventListener('click', () => {
        page9Btn1.value = "Resposta 1 ❌";
        page9Btn2.value = "Resposta 2 ❌";
        page9Btn3.value = "Resposta 3 ✔";
        page9Btn4.value = "Resposta 4 ❌";

        page9Btn1.style.border = "3px solid #ff0000";
        page9Btn1.style.borderRadius = "5px";
        page9Btn2.style.border = "3px solid #ff0000";
        page9Btn2.style.borderRadius = "5px";
        page9Btn3.style.border = "3px solid #00ff00";
        page9Btn3.style.borderRadius = "5px";
        page9Btn4.style.border = "3px solid #ff0000";
        page9Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-submundo-2.html";
        }, 3000);
    });

    page9Btn4.addEventListener('click', () => {
        page9Btn1.value = "Resposta 1 ❌";
        page9Btn2.value = "Resposta 2 ❌";
        page9Btn3.value = "Resposta 3 ✔";
        page9Btn4.value = "Resposta 4 ❌";

        page9Btn1.style.border = "3px solid #ff0000";
        page9Btn1.style.borderRadius = "5px";
        page9Btn2.style.border = "3px solid #ff0000";
        page9Btn2.style.borderRadius = "5px";
        page9Btn3.style.border = "3px solid #00ff00";
        page9Btn3.style.borderRadius = "5px";
        page9Btn4.style.border = "3px solid #ff0000";
        page9Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fase-submundo-2.html";
        }, 3000);
    });
}

//page 2
if (page10 !== null) {
    const perguntasAcertadas = 2;
    localStorage.setItem('perguntasAcertadasSubmundo', perguntasAcertadas);

    localStorage.setItem('questaoAtualSubmundo',2);

    localStorage.setItem('perguntasAcertadas', perguntasAcertadas);

    const page10Btn1 = document.getElementById('res_1_questao_2_fase_submundo');
    const page10Btn2 = document.getElementById('res_2_questao_2_fase_submundo');
    const page10Btn3 = document.getElementById('res_3_questao_2_fase_submundo');
    const page10Btn4 = document.getElementById('res_4_questao_2_fase_submundo');
    const totalPerguntasRespondidas = 2;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page10Btn1.addEventListener('click', () => {
        page10Btn1.value = "Resposta 1 ✔";
        page10Btn2.value = "Resposta 2 ❌";
        page10Btn3.value = "Resposta 3 ❌";
        page10Btn4.value = "Resposta 4 ❌";

        page10Btn1.style.border = "3px solid #00ff00";
        page10Btn1.style.borderRadius = "5px";
        page10Btn2.style.border = "3px solid #ff0000";
        page10Btn2.style.borderRadius = "5px";
        page10Btn3.style.border = "3px solid #ff0000";
        page10Btn3.style.borderRadius = "5px";
        page10Btn4.style.border = "3px solid #ff0000";
        page10Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }else{
                window.location.href = "fase-submundo-3.html";
            }
        }, 3000);
    });

    page10Btn2.addEventListener('click', () => {
        page10Btn1.value = "Resposta 1 ✔";
        page10Btn2.value = "Resposta 2 ❌";
        page10Btn3.value = "Resposta 3 ❌";
        page10Btn4.value = "Resposta 4 ❌";

        page10Btn1.style.border = "3px solid #00ff00";
        page10Btn1.style.borderRadius = "5px";
        page10Btn2.style.border = "3px solid #ff0000";
        page10Btn2.style.borderRadius = "5px";
        page10Btn3.style.border = "3px solid #ff0000";
        page10Btn3.style.borderRadius = "5px";
        page10Btn4.style.border = "3px solid #ff0000";
        page10Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }else{
                window.location.href = "fase-submundo-3.html";
            }
        }, 3000);
    });

    page10Btn3.addEventListener('click', () => {
        page10Btn1.value = "Resposta 1 ✔";
        page10Btn2.value = "Resposta 2 ❌";
        page10Btn3.value = "Resposta 3 ❌";
        page10Btn4.value = "Resposta 4 ❌";

        page10Btn1.style.border = "3px solid #00ff00";
        page10Btn1.style.borderRadius = "5px";
        page10Btn2.style.border = "3px solid #ff0000";
        page10Btn2.style.borderRadius = "5px";
        page10Btn3.style.border = "3px solid #ff0000";
        page10Btn3.style.borderRadius = "5px";
        page10Btn4.style.border = "3px solid #ff0000";
        page10Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }else{
                window.location.href = "fase-submundo-3.html";
            }
        }, 3000);
    });

    page10Btn4.addEventListener('click', () => {
        page10Btn1.value = "Resposta 1 ✔";
        page10Btn2.value = "Resposta 2 ❌";
        page10Btn3.value = "Resposta 3 ❌";
        page10Btn4.value = "Resposta 4 ❌";

        page10Btn1.style.border = "3px solid #00ff00";
        page10Btn1.style.borderRadius = "5px";
        page10Btn2.style.border = "3px solid #ff0000";
        page10Btn2.style.borderRadius = "5px";
        page10Btn3.style.border = "3px solid #ff0000";
        page10Btn3.style.borderRadius = "5px";
        page10Btn4.style.border = "3px solid #ff0000";
        page10Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);


        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }else{
                window.location.href = "fase-submundo-3.html";
            }
        }, 3000);
    });
}

//page 3
if (page11 !== null) {
    const perguntasAcertadas = 3;
    localStorage.setItem('perguntasAcertadasSubmundo', perguntasAcertadas);

    localStorage.setItem('questaoAtualSubmundo',3);

    localStorage.setItem('perguntasAcertadas', perguntasAcertadas);

    const page11Btn1 = document.getElementById('res_1_questao_3_fase_submundo');
    const page11Btn2 = document.getElementById('res_2_questao_3_fase_submundo');
    const page11Btn3 = document.getElementById('res_3_questao_3_fase_submundo');
    const page11Btn4 = document.getElementById('res_4_questao_3_fase_submundo');
    const totalPerguntasRespondidas = 3;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page11Btn1.addEventListener('click', () => {
        page11Btn1.value = "Resposta 1 ❌";
        page11Btn2.value = "Resposta 2 ✔";
        page11Btn3.value = "Resposta 3 ❌";
        page11Btn4.value = "Resposta 4 ❌";

        page11Btn1.style.border = "3px solid #ff0000";
        page11Btn1.style.borderRadius = "5px";
        page11Btn2.style.border = "3px solid #00ff00";
        page11Btn2.style.borderRadius = "5px";
        page11Btn3.style.border = "3px solid #ff0000";
        page11Btn3.style.borderRadius = "5px";
        page11Btn4.style.border = "3px solid #ff0000";
        page11Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fases.html";
        }, 3000);
    });

    page11Btn2.addEventListener('click', () => {
        page11Btn1.value = "Resposta 1 ❌";
        page11Btn2.value = "Resposta 2 ✔";
        page11Btn3.value = "Resposta 3 ❌";
        page11Btn4.value = "Resposta 4 ❌";

        page11Btn1.style.border = "3px solid #ff0000";
        page11Btn1.style.borderRadius = "5px";
        page11Btn2.style.border = "3px solid #00ff00";
        page11Btn2.style.borderRadius = "5px";
        page11Btn3.style.border = "3px solid #ff0000";
        page11Btn3.style.borderRadius = "5px";
        page11Btn4.style.border = "3px solid #ff0000";
        page11Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fases.html";
        }, 3000);
    });


    page11Btn3.addEventListener('click', () => {
        page11Btn1.value = "Resposta 1 ❌";
        page11Btn2.value = "Resposta 2 ✔";
        page11Btn3.value = "Resposta 3 ❌";
        page11Btn4.value = "Resposta 4 ❌";

        page11Btn1.style.border = "3px solid #ff0000";
        page11Btn1.style.borderRadius = "5px";
        page11Btn2.style.border = "3px solid #00ff00";
        page11Btn2.style.borderRadius = "5px";
        page11Btn3.style.border = "3px solid #ff0000";
        page11Btn3.style.borderRadius = "5px";
        page11Btn4.style.border = "3px solid #ff0000";
        page11Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fases.html";
        }, 3000);
    });


    page11Btn4.addEventListener('click', () => {
        page11Btn1.value = "Resposta 1 ❌";
        page11Btn2.value = "Resposta 2 ✔";
        page11Btn3.value = "Resposta 3 ❌";
        page11Btn4.value = "Resposta 4 ❌";

        page11Btn1.style.border = "3px solid #ff0000";
        page11Btn1.style.borderRadius = "5px";
        page11Btn2.style.border = "3px solid #00ff00";
        page11Btn2.style.borderRadius = "5px";
        page11Btn3.style.border = "3px solid #ff0000";
        page11Btn3.style.borderRadius = "5px";
        page11Btn4.style.border = "3px solid #ff0000";
        page11Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            window.location.href = "fases.html";
        }, 3000);
    });
}

//page 4
if (page12 !== null) {
    console.log(parseInt(localStorage.getItem('totalPerguntasRespondidas')));

    const perguntasAcertadas = localStorage.getItem('perguntasAcertadasSubmundo') ? parseInt(localStorage.getItem('perguntasAcertadasSubmundo')) : 1;
    localStorage.setItem('perguntasAcertadasSubmundo',perguntasAcertadas);

    const questaoSubmundo = localStorage.getItem('questaoAtualSubmundo') ? parseInt(localStorage.getItem('questaoAtualSubmundo')) : 1;
    localStorage.setItem('questaoAtualSubmundo',questaoSubmundo);

    localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

    const page12Btn1 = document.getElementById('res_1_questao_4_fase_submundo');
    const page12Btn2 = document.getElementById('res_2_questao_4_fase_submundo');
    const page12Btn3 = document.getElementById('res_3_questao_4_fase_submundo');
    const page12Btn4 = document.getElementById('res_4_questao_4_fase_submundo');

    const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) : 1;;
    localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

    page12Btn1.addEventListener('click', () => {
        page12Btn1.value = "Resposta 1 ❌";
        page12Btn2.value = "Resposta 2 ✔";
        page12Btn3.value = "Resposta 3 ❌";
        page12Btn4.value = "Resposta 4 ❌";

        page12Btn1.style.border = "3px solid #ff0000";
        page12Btn1.style.borderRadius = "5px";
        page12Btn2.style.border = "3px solid #00ff00";
        page12Btn2.style.borderRadius = "5px";
        page12Btn3.style.border = "3px solid #ff0000";
        page12Btn3.style.borderRadius = "5px";
        page12Btn4.style.border = "3px solid #ff0000";
        page12Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-submundo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-submundo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }
        }, 3000);
        
    });
    page12Btn2.addEventListener('click', () => {
        page12Btn1.value = "Resposta 1 ❌";
        page12Btn2.value = "Resposta 2 ✔";
        page12Btn3.value = "Resposta 3 ❌";
        page12Btn4.value = "Resposta 4 ❌";

        page12Btn1.style.border = "3px solid #ff0000";
        page12Btn1.style.borderRadius = "5px";
        page12Btn2.style.border = "3px solid #00ff00";
        page12Btn2.style.borderRadius = "5px";
        page12Btn3.style.border = "3px solid #ff0000";
        page12Btn3.style.borderRadius = "5px";
        page12Btn4.style.border = "3px solid #ff0000";
        page12Btn4.style.borderRadius = "5px";

        pointsAdd = 10;
        points = points + pointsAdd;
        localStorage.setItem('points', points);

        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-submundo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-submundo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }
        }, 3000);
    });

    page12Btn3.addEventListener('click', () => {
        page12Btn1.value = "Resposta 1 ❌";
        page12Btn2.value = "Resposta 2 ✔";
        page12Btn3.value = "Resposta 3 ❌";
        page12Btn4.value = "Resposta 4 ❌";

        page12Btn1.style.border = "3px solid #ff0000";
        page12Btn1.style.borderRadius = "5px";
        page12Btn2.style.border = "3px solid #00ff00";
        page12Btn2.style.borderRadius = "5px";
        page12Btn3.style.border = "3px solid #ff0000";
        page12Btn3.style.borderRadius = "5px";
        page12Btn4.style.border = "3px solid #ff0000";
        page12Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-submundo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-submundo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }
        }, 3000);
        
    }); 

    page12Btn4.addEventListener('click', () => {
        page12Btn1.value = "Resposta 1 ❌";
        page12Btn2.value = "Resposta 2 ✔";
        page12Btn3.value = "Resposta 3 ❌";
        page12Btn4.value = "Resposta 4 ❌";

        page12Btn1.style.border = "3px solid #ff0000";
        page12Btn1.style.borderRadius = "5px";
        page12Btn2.style.border = "3px solid #00ff00";
        page12Btn2.style.borderRadius = "5px";
        page12Btn3.style.border = "3px solid #ff0000";
        page12Btn3.style.borderRadius = "5px";
        page12Btn4.style.border = "3px solid #ff0000";
        page12Btn4.style.borderRadius = "5px";

        pointsAdd = 0;
        points = points + pointsAdd;
        localStorage.setItem('points', points);
        setTimeout(() => {
            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                window.location.href = "fase-submundo-2.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                window.location.href = "fase-submundo-3.html";    
            }

            if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                window.location.href = "fases.html";    
            }
        }, 3000);
        
    });
}
});

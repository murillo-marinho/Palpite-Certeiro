document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    
    let pointsAdd = 0;

    /**Seta fase atual */
    localStorage.setItem('fase_atual',"Demeter");

    //page 1
    if(page1 !== null){
        const perguntasAcertadas = 1;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        localStorage.setItem('questaoAtualDemeter',1);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page1Btn1 = document.getElementById('res_1_questao_1_fase_demeter');
        const page1Btn2 = document.getElementById('res_2_questao_1_fase_demeter');
        const page1Btn3 = document.getElementById('res_3_questao_1_fase_demeter');
        const page1Btn4 = document.getElementById('res_4_questao_1_fase_demeter');

        const totalPerguntasRespondidas = 1;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page1Btn1.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ✔";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #00ff00";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-demeter-2.html";
            }, 3000);
        });

        page1Btn2.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ✔";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #00ff00";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-demeter-2.html";
            }, 3000);
        });

        page1Btn3.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ✔";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #00ff00";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-demeter-2.html";
            }, 3000);
        });

        page1Btn4.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ✔";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #00ff00";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {

                window.location.href = "fase-demeter-2.html";
            }, 3000);
        });
    }

    //page 2
    if(page2 !== null){
        const perguntasAcertadas = 2;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        localStorage.setItem('questaoAtualDemeter',2);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page2Btn1 = document.getElementById('res_1_questao_2_fase_demeter');
        const page2Btn2 = document.getElementById('res_2_questao_2_fase_demeter');
        const page2Btn3 = document.getElementById('res_3_questao_2_fase_demeter');
        const page2Btn4 = document.getElementById('res_4_questao_2_fase_demeter');
        const totalPerguntasRespondidas = 2;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page2Btn1.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ✔";
            page2Btn4.value = "Resposta 4 ❌";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #00ff00";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #ff0000";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-demeter-3.html";    
                }
            }, 3000);
        });

        page2Btn2.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ✔";
            page2Btn4.value = "Resposta 4 ❌";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #00ff00";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #ff0000";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-demeter-3.html";    
                }
            }, 3000);
        });

        page2Btn3.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ✔";
            page2Btn4.value = "Resposta 4 ❌";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #00ff00";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #ff0000";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-demeter-3.html";    
                }
            }, 3000);
        });

        page2Btn4.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ✔";
            page2Btn4.value = "Resposta 4 ❌";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #00ff00";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #ff0000";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-demeter-3.html";    
                }
            }, 3000);
        });
    }

    //page 3
    if(page3 !== null){
        const perguntasAcertadas = 3;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        localStorage.setItem('questaoAtualDemeter',3);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page3Btn1 = document.getElementById('res_1_questao_3_fase_demeter');
        const page3Btn2 = document.getElementById('res_2_questao_3_fase_demeter');
        const page3Btn3 = document.getElementById('res_3_questao_3_fase_demeter');
        const page3Btn4 = document.getElementById('res_4_questao_3_fase_demeter');
        const totalPerguntasRespondidas = 3;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page3Btn1.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ✔";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ❌";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #00ff00";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #ff0000";
            page3Btn3.style.borderRadius = "5px";
            page3Btn4.style.border = "3px solid #ff0000";
            page3Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fases.html";
            }, 3000);
        });

        page3Btn2.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ✔";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ❌";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #00ff00";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #ff0000";
            page3Btn3.style.borderRadius = "5px";
            page3Btn4.style.border = "3px solid #ff0000";
            page3Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fases.html";
            }, 3000);
        });

        page3Btn3.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ✔";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ❌";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #00ff00";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #ff0000";
            page3Btn3.style.borderRadius = "5px";
            page3Btn4.style.border = "3px solid #ff0000";
            page3Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fases.html";
            }, 3000);
        });

        page3Btn4.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ✔";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ❌";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #00ff00";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #ff0000";
            page3Btn3.style.borderRadius = "5px";
            page3Btn4.style.border = "3px solid #ff0000";
            page3Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                
                window.location.href = "fases.html";
            }, 3000);
        });
    }

    //page 4
    if(page4 !== null){
        const perguntasAcertadas = localStorage.getItem('perguntasAcertadasDemeter') ? parseInt(localStorage.getItem('perguntasAcertadasDemeter')) + 1 : 1;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        const questaoDemeter = localStorage.getItem('questaoAtualDemeter') ? parseInt(localStorage.getItem('questaoAtualDemeter')) + 1 : 1;
        localStorage.setItem('questaoAtualDemeter',questaoDemeter);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page4Btn1 = document.getElementById('res_1_questao_4_fase_demeter');
        const page4Btn2 = document.getElementById('res_2_questao_4_fase_demeter');
        const page4Btn3 = document.getElementById('res_3_questao_4_fase_demeter');
        const page4Btn4 = document.getElementById('res_4_questao_4_fase_demeter');

        const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) + 1 : 1;;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page4Btn1.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ❌";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ✔";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #ff0000";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #00ff00";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-demeter-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-demeter-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }
            }, 3000);
        });

        page4Btn2.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ❌";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ✔";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #ff0000";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #00ff00";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-demeter-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-demeter-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }
            }, 3000);
        });

        page4Btn3.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ❌";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ✔";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #ff0000";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #00ff00";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-demeter-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-demeter-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }
            }, 3000);
        });

        page4Btn4.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ❌";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ✔";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #ff0000";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #00ff00";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";
            
            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-demeter-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-demeter-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }
            }, 3000);
        });
    }
});
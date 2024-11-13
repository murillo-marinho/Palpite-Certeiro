document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const page4 = document.getElementById('page4');
    console.log(page4);
    console.log(page4 !== null);
    let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    
    let pointsAdd = 0;

     /**Seta fase atual */
     localStorage.setItem('fase_atual',"Poseidon");

    //page 1 POSEIDON
    if(page1 !== null){
        const perguntasAcertadas = 1;
        localStorage.setItem('perguntasAcertadasPoseidon',perguntasAcertadas);

        localStorage.setItem('questaoAtualPoseidon',1);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page1Btn1 = document.getElementById('res_1_questao_1_fase_poseidon');
        const page1Btn2 = document.getElementById('res_2_questao_1_fase_poseidon');
        const page1Btn3 = document.getElementById('res_3_questao_1_fase_poseidon');
        const page1Btn4 = document.getElementById('res_4_questao_1_fase_poseidon');

        const totalPerguntasRespondidas = 1;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page1Btn1.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ✔";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #00ff00";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-poseidon-2.html";
            }, 3000);
        });

        page1Btn2.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ✔";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #00ff00";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-poseidon-2.html";
            }, 3000);
        });

        page1Btn3.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ✔";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #00ff00";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-poseidon-2.html";
            }, 3000);
        });

        page1Btn4.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ✔";
            page1Btn3.value = "Resposta 3 ❌";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #00ff00";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #ff0000";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {

                window.location.href = "fase-poseidon-2.html";
            }, 3000);
        });
    }

    //page 2 POSEIDON

    if(page2 !== null){
        const perguntasAcertadas = 2;
        localStorage.setItem('perguntasAcertadasPoseidon',perguntasAcertadas);

        localStorage.setItem('questaoAtualPoseidon',2);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page2Btn1 = document.getElementById('res_1_questao_2_fase_poseidon');
        const page2Btn2 = document.getElementById('res_2_questao_2_fase_poseidon');
        const page2Btn3 = document.getElementById('res_3_questao_2_fase_poseidon');
        const page2Btn4 = document.getElementById('res_4_questao_2_fase_poseidon');

        const totalPerguntasRespondidas = 2;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page2Btn1.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ❌";
            page2Btn4.value = "Resposta 4 ✔";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #ff0000";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #00ff00";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-poseidon-3.html";    
                }
            }, 3000);
        });

        page2Btn2.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ❌";
            page2Btn4.value = "Resposta 4 ✔";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #ff0000";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #00ff00";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-poseidon-3.html";    
                }
            }, 3000);
        });

        page2Btn3.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ❌";
            page2Btn4.value = "Resposta 4 ✔";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #ff0000";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #00ff00";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-poseidon-3.html";    
                }
            }, 3000);
        });

        page2Btn4.addEventListener('click', () => {
            page2Btn1.value = "Resposta 1 ❌";
            page2Btn2.value = "Resposta 2 ❌";
            page2Btn3.value = "Resposta 3 ❌";
            page2Btn4.value = "Resposta 4 ✔";

            page2Btn1.style.border = "3px solid #ff0000";
            page2Btn1.style.borderRadius = "5px";
            page2Btn2.style.border = "3px solid #ff0000";
            page2Btn2.style.borderRadius = "5px";
            page2Btn3.style.border = "3px solid #ff0000";
            page2Btn3.style.borderRadius = "5px";
            page2Btn4.style.border = "3px solid #00ff00";
            page2Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }else{
                    window.location.href = "fase-poseidon-3.html";    
                }
            }, 3000);
        });
    }

    //page 3 POSEIDON
    if(page3 !== null){
        const perguntasAcertadas = 3;
        localStorage.setItem('perguntasAcertadasPoseidon',perguntasAcertadas);

        localStorage.setItem('questaoAtualPoseidon',3);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page3Btn1 = document.getElementById('res_1_questao_3_fase_poseidon');
        const page3Btn2 = document.getElementById('res_2_questao_3_fase_poseidon');
        const page3Btn3 = document.getElementById('res_3_questao_3_fase_poseidon');
        const page3Btn4 = document.getElementById('res_4_questao_3_fase_poseidon');

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

    //page 4 POSEIDON
    if(page4 !== null){
        console.log("To na page 4");
        const perguntasAcertadas = localStorage.getItem('perguntasAcertadasPoseidon') ? parseInt(localStorage.getItem('perguntasAcertadasPoseidon')) : 1;
        localStorage.setItem('perguntasAcertadasPoseidon',perguntasAcertadas);

        const questaoPoseidon = localStorage.getItem('questaoAtualPoseidon') ? parseInt(localStorage.getItem('questaoAtualPoseidon')) : 1;
        localStorage.setItem('questaoAtualPoseidon',questaoPoseidon);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page4Btn1 = document.getElementById('res_1_questao_4_fase_poseidon');
        const page4Btn2 = document.getElementById('res_2_questao_4_fase_poseidon');
        const page4Btn3 = document.getElementById('res_3_questao_4_fase_poseidon');
        const page4Btn4 = document.getElementById('res_4_questao_4_fase_poseidon');

        const totalPerguntasRespondidas = localStorage.getItem('totalPerguntasRespondidas') ? parseInt(localStorage.getItem('totalPerguntasRespondidas')) : 1;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page4Btn1.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ✔";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ❌";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #00ff00";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #ff0000";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            console.log(localStorage.getItem('totalPerguntasRespondidas') === 3);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-poseidon-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-poseidon-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html"; 
                }
            }, 3000);
        });

        page4Btn2.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ✔";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ❌";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #00ff00";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #ff0000";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-poseidon-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-poseidon-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }
            }, 3000);
        });

        page4Btn3.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ✔";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ❌";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #00ff00";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #ff0000";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-poseidon-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-poseidon-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";    
                }
            }, 3000);
        });

        page4Btn4.addEventListener('click', () => {
            page4Btn1.value = "Resposta 1 ✔";
            page4Btn2.value = "Resposta 2 ❌";
            page4Btn3.value = "Resposta 3 ❌";
            page4Btn4.value = "Resposta 4 ❌";

            page4Btn1.style.border = "3px solid #00ff00";
            page4Btn1.style.borderRadius = "5px";
            page4Btn2.style.border = "3px solid #ff0000";
            page4Btn2.style.borderRadius = "5px";
            page4Btn3.style.border = "3px solid #ff0000";
            page4Btn3.style.borderRadius = "5px";
            page4Btn4.style.border = "3px solid #ff0000";
            page4Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = points + pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 1){
                    window.location.href = "fase-poseidon-2.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 2){
                    window.location.href = "fase-poseidon-3.html";    
                }

                if(parseInt(localStorage.getItem('totalPerguntasRespondidas')) === 3){
                    window.location.href = "fases.html";  
                }
            }, 3000);
        });
    }
});

       
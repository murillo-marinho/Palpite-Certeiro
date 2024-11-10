document.addEventListener('DOMContentLoaded', () => {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
    
    let pointsAdd = 0;

    //page 1
    if(page1 !== null){
        const perguntasAcertadas = 1;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page1Btn1 = document.getElementById('page1_btn1');
        const page1Btn2 = document.getElementById('page1_btn2');
        const page1Btn3 = document.getElementById('page1_btn3');
        const page1Btn4 = document.getElementById('page1_btn4');

        const totalPerguntasRespondidas = 1;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page1Btn1.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ✔";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #00ff00";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-temis-2.html";
            }, 3000);
        });

        page1Btn2.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ✔";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #00ff00";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-temis-2.html";
            }, 3000);
        });

        page1Btn3.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ✔";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #00ff00";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 10;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {
                window.location.href = "fase-temis-2.html";
            }, 3000);
        });

        page1Btn4.addEventListener('click', () => {
            page1Btn1.value = "Resposta 1 ❌";
            page1Btn2.value = "Resposta 2 ❌";
            page1Btn3.value = "Resposta 3 ✔";
            page1Btn4.value = "Resposta 4 ❌";

            page1Btn1.style.border = "3px solid #ff0000";
            page1Btn1.style.borderRadius = "5px";
            page1Btn2.style.border = "3px solid #ff0000";
            page1Btn2.style.borderRadius = "5px";
            page1Btn3.style.border = "3px solid #00ff00";
            page1Btn3.style.borderRadius = "5px";
            page1Btn4.style.border = "3px solid #ff0000";
            page1Btn4.style.borderRadius = "5px";

            pointsAdd = 0;
            points = pointsAdd;
            localStorage.setItem('points', points);

            setTimeout(() => {

                window.location.href = "fase-temis-2.html";
            }, 3000);
        });
    }

    //page 2
    if(page2 !== null){
        const perguntasAcertadas = 2;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page2Btn1 = document.getElementById('page2_btn1');
        const page2Btn2 = document.getElementById('page2_btn2');
        const page2Btn3 = document.getElementById('page2_btn3');
        const page2Btn4 = document.getElementById('page2_btn4');
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
                window.location.href = "fase-temis-3.html";
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
                window.location.href = "fase-temis-3.html";
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
                window.location.href = "fase-temis-3.html";
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
                
                window.location.href = "fase-temis-3.html";
            }, 3000);
        });
    }

    //page 3
    if(page3 !== null){
        const perguntasAcertadas = 3;
        localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadas);

        localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

        const page3Btn1 = document.getElementById('page3_btn1');
        const page3Btn2 = document.getElementById('page3_btn2');
        const page3Btn3 = document.getElementById('page3_btn3');
        const page3Btn4 = document.getElementById('page3_btn4');
        const totalPerguntasRespondidas = 3;
        localStorage.setItem('totalPerguntasRespondidas', totalPerguntasRespondidas);

        page3Btn1.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ❌";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ✔";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #ff0000";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #00ff00";
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

        page3Btn2.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ❌";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ✔";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #ff0000";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #00ff00";
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
            page3Btn1.value = "Resposta 1 ❌";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ✔";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #ff0000";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #00ff00";
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

        page3Btn4.addEventListener('click', () => {
            page3Btn1.value = "Resposta 1 ❌";
            page3Btn2.value = "Resposta 2 ❌";
            page3Btn3.value = "Resposta 3 ✔";
            page3Btn4.value = "Resposta 4 ❌";

            page3Btn1.style.border = "3px solid #ff0000";
            page3Btn1.style.borderRadius = "5px";
            page3Btn2.style.border = "3px solid #ff0000";
            page3Btn2.style.borderRadius = "5px";
            page3Btn3.style.border = "3px solid #00ff00";
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
});
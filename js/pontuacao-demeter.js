document.addEventListener('DOMContentLoaded', () => {
    var perguntasAcertadas = localStorage.getItem('perguntasAcertadasDemeter') ? parseInt(localStorage.getItem('perguntasAcertadasDemeter')) : null;
    if(perguntasAcertadas === null){
        perguntasAcertadas = 0;
    }

    const pontuation = document.getElementById('pontuation');

    let pontuationActual = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) + 1 : 0;
    resto = 0;
        
    if(pontuationActual === 1){
        pontuationActual =  33.33;
        resto = 66.66;
        console.log(pontuationActual);
    console.log(resto);

        pontuation.style.background= "linear-gradient(to right, rgba(12, 14, 90,0.9) "+pontuationActual+"%, #fff "+resto+"%)";
    }else if(pontuationActual === 11){
        pontuationActual =  66.66;
        resto = 33.33;
        console.log(pontuationActual);
    console.log(resto);

        pontuation.style.background= "linear-gradient(to right, rgba(12, 14, 90,0.9) "+pontuationActual+"%, #fff "+resto+"%)";
    }else if(pontuationActual === 21){
        pontuationActual = 100;
        resto = 0;
        console.log(pontuationActual);
    console.log(resto);

        pontuation.style.background= "linear-gradient(to right, rgba(12, 14, 90,0.9) "+pontuationActual+"%, #fff "+resto+"%)";
    }
    
    console.log(pontuationActual);
    console.log(resto);

    pontuation.innerText = perguntasAcertadas + "/3";
    pontuation.style.color = "rgb(0,200,200)";
    pontuation.style.textAlign = "center";

});
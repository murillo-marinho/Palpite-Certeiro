document.addEventListener('DOMContentLoaded', () => {
    const meuGuia = localStorage.getItem('meu_guia');
    const btnAjudaGuia = document.getElementById('btn_ajuda_guia');
    const modalGuia = document.getElementById('modal-guia');
    const btnfecharModal = document.getElementById('btn_fechar_modal');
    const btnConfirmarAjuda = document.getElementById('btn_confirmar_ajuda');
    const nomeGuiaAtual = document.getElementById('nome_guia');
    nomeGuiaAtual.innerHTML = meuGuia;

    const pontuation = document.getElementById('pontuation');

    const poderes = document.getElementById('poderes');
    const limitePoderesTemisPorFase = 2;
    let limitePoderesTemisLocalStorage = localStorage.getItem('limitePoderesTemisLocalStorage') ? parseInt(localStorage.getItem('limitePoderesTemisLocalStorage')) : 0;

    const limitePoderesZeusPorFase = 1;
    let limitePoderesZeusLocalStorage = localStorage.getItem('limitePoderesZeusLocalStorage') ? parseInt(localStorage.getItem('limitePoderesZeusLocalStorage')) : 0;

    const limitePoderesAtenaPorFase = 3;
    let limitePoderesAtenaLocalStorage = localStorage.getItem('limitePoderesAtenaLocalStorage') ? parseInt(localStorage.getItem('limitePoderesAtenaLocalStorage')) : 0;

    const faseAtual = localStorage.getItem('fase_atual');
    let questaoAtualDemeter = localStorage.getItem('questaoAtualDemeter');
    let questaoAtualPoseidon = localStorage.getItem('questaoAtualPoseidon');
    let questaoAtualSubmundo = localStorage.getItem('questaoAtualSubmundo');
    let questaoAtualMonteOlimpo = localStorage.getItem('questaoAtualMonteOlimpo');

    const resposta1Questao1FaseDemeter = document.getElementById('res_1_questao_1_fase_demeter');
    const resposta2Questao1FaseDemeter = document.getElementById('res_2_questao_1_fase_demeter');
    const resposta3Questao1FaseDemeter = document.getElementById('res_3_questao_1_fase_demeter');
    const resposta4Questao1FaseDemeter = document.getElementById('res_4_questao_1_fase_demeter');

    const resposta1Questao2FaseDemeter = document.getElementById('res_1_questao_2_fase_demeter');
    const resposta2Questao2FaseDemeter = document.getElementById('res_2_questao_2_fase_demeter');
    const resposta3Questao2FaseDemeter = document.getElementById('res_3_questao_2_fase_demeter');
    const resposta4Questao2FaseDemeter = document.getElementById('res_4_questao_2_fase_demeter');

    const resposta1Questao3FaseDemeter = document.getElementById('res_1_questao_3_fase_demeter');
    const resposta2Questao3FaseDemeter = document.getElementById('res_2_questao_3_fase_demeter');
    const resposta3Questao3FaseDemeter = document.getElementById('res_3_questao_3_fase_demeter');
    const resposta4Questao3FaseDemeter = document.getElementById('res_4_questao_3_fase_demeter');

    const singleResposta1Questao1FaseDemeter = document.getElementById('single_res_1_questao_1_fase_demeter');
    const singleResposta2Questao1FaseDemeter = document.getElementById('single_res_2_questao_1_fase_demeter');
    const singleResposta3Questao1FaseDemeter = document.getElementById('single_res_3_questao_1_fase_demeter');
    const singleResposta4Questao1FaseDemeter = document.getElementById('single_res_4_questao_1_fase_demeter');

    const singleResposta1Questao2FaseDemeter = document.getElementById('single_res_1_questao_2_fase_demeter');
    const singleResposta2Questao2FaseDemeter = document.getElementById('single_res_2_questao_2_fase_demeter');
    const singleResposta3Questao2FaseDemeter = document.getElementById('single_res_3_questao_2_fase_demeter');
    const singleResposta4Questao2FaseDemeter = document.getElementById('single_res_4_questao_2_fase_demeter');

    const singleResposta1Questao3FaseDemeter = document.getElementById('single_res_1_questao_3_fase_demeter');
    const singleResposta2Questao3FaseDemeter = document.getElementById('single_res_2_questao_3_fase_demeter');
    const singleResposta3Questao3FaseDemeter = document.getElementById('single_res_3_questao_3_fase_demeter');
    const singleResposta4Questao3FaseDemeter = document.getElementById('single_res_4_questao_3_fase_demeter');

    /*poseidon*/
    const resposta1Questao1FasePoseidon = document.getElementById('res_1_questao_1_fase_poseidon');
    const resposta2Questao1FasePoseidon = document.getElementById('res_2_questao_1_fase_poseidon');
    const resposta3Questao1FasePoseidon = document.getElementById('res_3_questao_1_fase_poseidon');
    const resposta4Questao1FasePoseidon = document.getElementById('res_4_questao_1_fase_poseidon');

    const resposta1Questao2FasePoseidon = document.getElementById('res_1_questao_2_fase_poseidon');
    const resposta2Questao2FasePoseidon = document.getElementById('res_2_questao_2_fase_poseidon');
    const resposta3Questao2FasePoseidon = document.getElementById('res_3_questao_2_fase_poseidon');
    const resposta4Questao2FasePoseidon = document.getElementById('res_4_questao_2_fase_poseidon');

    const resposta1Questao3FasePoseidon = document.getElementById('res_1_questao_3_fase_poseidon');
    const resposta2Questao3FasePoseidon = document.getElementById('res_2_questao_3_fase_poseidon');
    const resposta3Questao3FasePoseidon = document.getElementById('res_3_questao_3_fase_poseidon');
    const resposta4Questao3FasePoseidon = document.getElementById('res_4_questao_3_fase_poseidon');

    const singleResposta1Questao1FasePoseidon = document.getElementById('single_res_1_questao_1_fase_poseidon');
    const singleResposta2Questao1FasePoseidon = document.getElementById('single_res_2_questao_1_fase_poseidon');
    const singleResposta3Questao1FasePoseidon = document.getElementById('single_res_3_questao_1_fase_poseidon');
    const singleResposta4Questao1FasePoseidon = document.getElementById('single_res_4_questao_1_fase_poseidon');

    const singleResposta1Questao2FasePoseidon = document.getElementById('single_res_1_questao_2_fase_poseidon');
    const singleResposta2Questao2FasePoseidon = document.getElementById('single_res_2_questao_2_fase_poseidon');
    const singleResposta3Questao2FasePoseidon = document.getElementById('single_res_3_questao_2_fase_poseidon');
    const singleResposta4Questao2FasePoseidon = document.getElementById('single_res_4_questao_2_fase_poseidon');

    const singleResposta1Questao3FasePoseidon = document.getElementById('single_res_1_questao_3_fase_poseidon');
    const singleResposta2Questao3FasePoseidon = document.getElementById('single_res_2_questao_3_fase_poseidon');
    const singleResposta3Questao3FasePoseidon = document.getElementById('single_res_3_questao_3_fase_poseidon');
    const singleResposta4Questao3FasePoseidon = document.getElementById('single_res_4_questao_3_fase_poseidon');

    /**submundo */
    const resposta1Questao1FaseSubmundo = document.getElementById('res_1_questao_1_fase_submundo');
    const resposta2Questao1FaseSubmundo = document.getElementById('res_2_questao_1_fase_submundo');
    const resposta3Questao1FaseSubmundo = document.getElementById('res_3_questao_1_fase_submundo');
    const resposta4Questao1FaseSubmundo = document.getElementById('res_4_questao_1_fase_submundo');

    const resposta1Questao2FaseSubmundo = document.getElementById('res_1_questao_2_fase_submundo');
    const resposta2Questao2FaseSubmundo = document.getElementById('res_2_questao_2_fase_submundo');
    const resposta3Questao2FaseSubmundo = document.getElementById('res_3_questao_2_fase_submundo');
    const resposta4Questao2FaseSubmundo = document.getElementById('res_4_questao_2_fase_submundo');

    const resposta1Questao3FaseSubmundo = document.getElementById('res_1_questao_3_fase_submundo');
    const resposta2Questao3FaseSubmundo = document.getElementById('res_2_questao_3_fase_submundo');
    const resposta3Questao3FaseSubmundo = document.getElementById('res_3_questao_3_fase_submundo');
    const resposta4Questao3FaseSubmundo = document.getElementById('res_4_questao_3_fase_submundo');

    const singleResposta1Questao1FaseSubmundo = document.getElementById('single_res_1_questao_1_fase_submundo');
    const singleResposta2Questao1FaseSubmundo = document.getElementById('single_res_2_questao_1_fase_submundo');
    const singleResposta3Questao1FaseSubmundo = document.getElementById('single_res_3_questao_1_fase_submundo');
    const singleResposta4Questao1FaseSubmundo = document.getElementById('single_res_4_questao_1_fase_submundo');

    const singleResposta1Questao2FaseSubmundo = document.getElementById('single_res_1_questao_2_fase_submundo');
    const singleResposta2Questao2FaseSubmundo = document.getElementById('single_res_2_questao_2_fase_submundo');
    const singleResposta3Questao2FaseSubmundo = document.getElementById('single_res_3_questao_2_fase_submundo');
    const singleResposta4Questao2FaseSubmundo = document.getElementById('single_res_4_questao_2_fase_submundo');

    const singleResposta1Questao3FaseSubmundo = document.getElementById('single_res_1_questao_3_fase_submundo');
    const singleResposta2Questao3FaseSubmundo = document.getElementById('single_res_2_questao_3_fase_submundo');
    const singleResposta3Questao3FaseSubmundo = document.getElementById('single_res_3_questao_3_fase_submundo');
    const singleResposta4Questao3FaseSubmundo = document.getElementById('single_res_4_questao_3_fase_submundo');

    /**Monte Olimpo */
    const resposta1Questao1FaseMonteOlimpo = document.getElementById('res_1_questao_1_fase_olimpo');
    const resposta2Questao1FaseMonteOlimpo = document.getElementById('res_2_questao_1_fase_olimpo');
    const resposta3Questao1FaseMonteOlimpo = document.getElementById('res_3_questao_1_fase_olimpo');
    const resposta4Questao1FaseMonteOlimpo = document.getElementById('res_4_questao_1_fase_olimpo');

    const resposta1Questao2FaseMonteOlimpo = document.getElementById('res_1_questao_2_fase_olimpo');
    const resposta2Questao2FaseMonteOlimpo = document.getElementById('res_2_questao_2_fase_olimpo');
    const resposta3Questao2FaseMonteOlimpo = document.getElementById('res_3_questao_2_fase_olimpo');
    const resposta4Questao2FaseMonteOlimpo = document.getElementById('res_4_questao_2_fase_olimpo');

    const resposta1Questao3FaseMonteOlimpo = document.getElementById('res_1_questao_3_fase_olimpo');
    const resposta2Questao3FaseMonteOlimpo = document.getElementById('res_2_questao_3_fase_olimpo');
    const resposta3Questao3FaseMonteOlimpo = document.getElementById('res_3_questao_3_fase_olimpo');
    const resposta4Questao3FaseMonteOlimpo = document.getElementById('res_4_questao_3_fase_olimpo');

    const singleResposta1Questao1FaseMonteOlimpo = document.getElementById('single_res_1_questao_1_fase_olimpo');
    const singleResposta2Questao1FaseMonteOlimpo = document.getElementById('single_res_2_questao_1_fase_olimpo');
    const singleResposta3Questao1FaseMonteOlimpo = document.getElementById('single_res_3_questao_1_fase_olimpo');
    const singleResposta4Questao1FaseMonteOlimpo = document.getElementById('single_res_4_questao_1_fase_olimpo');

    const singleResposta1Questao2FaseMonteOlimpo = document.getElementById('single_res_1_questao_2_fase_olimpo');
    const singleResposta2Questao2FaseMonteOlimpo = document.getElementById('single_res_2_questao_2_fase_olimpo');
    const singleResposta3Questao2FaseMonteOlimpo = document.getElementById('single_res_3_questao_2_fase_olimpo');
    const singleResposta4Questao2FaseMonteOlimpo = document.getElementById('single_res_4_questao_2_fase_olimpo');

    const singleResposta1Questao3FaseMonteOlimpo = document.getElementById('single_res_1_questao_3_fase_olimpo');
    const singleResposta2Questao3FaseMonteOlimpo = document.getElementById('single_res_2_questao_3_fase_olimpo');
    const singleResposta3Questao3FaseMonteOlimpo = document.getElementById('single_res_3_questao_3_fase_olimpo');
    const singleResposta4Questao3FaseMonteOlimpo = document.getElementById('single_res_4_questao_3_fase_olimpo');

    
    const mudarPerguntaParaDica = document.getElementById('mudarPerguntaParaDica');

    if(localStorage.getItem('icone_guia_escondido')  !== null && localStorage.getItem('icone_guia_escondido')  !== false){
        btnAjudaGuia.style.opacity = "0";
        pontuation.style.top = "90px";
    }

    function verificarLimiteAtena(){
        const verificacaoLimiteAtena = (limitePoderesAtenaPorFase - limitePoderesAtenaLocalStorage) <= 0;
        //console.log("Limite dentro da verificacao="+limitePoderesAtenaPorFase);
        //console.log("local storage dentro da verficacao="+limitePoderesAtenaLocalStorage);
        //console.log((limitePoderesAtenaPorFase - limitePoderesAtenaLocalStorage) <= 0);
        if(verificacaoLimiteAtena){
            btnAjudaGuia.style.opacity = "0";
            pontuation.style.top = "130px";
            localStorage.setItem('icone_guia_escondido',true);
        }else{
            btnAjudaGuia.style.opacity = "1";
            pontuation.style.top = "130px";
        }
    }

    if(meuGuia === "Atena"){
        if(faseAtual === "Demeter"){
            verificarLimiteAtena();
        }

        if(faseAtual === "Poseidon"){
            verificarLimiteAtena();
        }

        if(faseAtual === "Submundo"){
            verificarLimiteAtena();
        }

        if(faseAtual === "Monte Olimpo"){
            verificarLimiteAtena();
        }
    }

    if(meuGuia === "Têmis"){
        if(faseAtual === "Demeter"){
            verificarLimiteTemis();
        }

        if(faseAtual === "Poseidon"){
            verificarLimiteTemis();
        }

        if(faseAtual === "Submundo"){
            verificarLimiteTemis();
        }

        if(faseAtual === "Monte Olimpo"){
            verificarLimiteTemis();
        }
    }

    if(meuGuia === "Zeus"){
        if(faseAtual === "Demeter"){
            verificarLimiteZeus();
        }

        if(faseAtual === "Poseidon"){
            verificarLimiteZeus();
        }

        if(faseAtual === "Submundo"){
            verificarLimiteZeus();
        }

        if(faseAtual === "Monte Olimpo"){
            verificarLimiteZeus();
        }
    }
    
    function verificarLimiteTemis(){
        const verificacaoLimiteTemis = (limitePoderesTemisPorFase - limitePoderesTemisLocalStorage) <= 0;
         //console.log("Limite dentro da verificacao="+limitePoderesTemisPorFase);
        // console.log("local storage dentro da verficacao="+limitePoderesTemisLocalStorage);
         //console.log(verificacaoLimiteTemis);
        if(verificacaoLimiteTemis){
            btnAjudaGuia.style.opacity = "0";
            pontuation.style.top = "130px";
            localStorage.setItem('icone_guia_escondido',true);
        }else{
            btnAjudaGuia.style.opacity = "1";
            pontuation.style.top = "130px";
        }
    }

    function verificarLimiteZeus(){
        const verificacaoLimiteZeus = (limitePoderesZeusPorFase - limitePoderesZeusLocalStorage) <= 0;
        if(verificacaoLimiteZeus){
            btnAjudaGuia.style.opacity = "0";
            pontuation.style.top = "130px";
            localStorage.setItem('icone_guia_escondido',true);
        }
        else{
            btnAjudaGuia.style.opacity = "1";
            pontuation.style.top = "130px";
        }
    }

    function verificarLimites(){
        if(meuGuia === "Atena"){
            poderes.innerHTML = "Dicas sobre a resposta. (limite de 3 vezes por fase)";
            poderes.style.fontSize = "20px";
    
            if(faseAtual === "Demeter"){
                if(questaoAtualDemeter === 1){
                    window.location.href = "fase-demeter-1.html";
                }
    
                if(questaoAtualDemeter === 2){
                    window.location.href = "fase-demeter-2.html";
                }
                
                if(questaoAtualDemeter === 3){
                    window.location.href = "fase-demeter-3.html";
                }
            }
    
            if(faseAtual === "Poseidon"){
                if(questaoAtualPoseidon === 1){
                    window.location.href = "fase-poseidon-1.html";
                }
    
                if(questaoAtualPoseidon === 2){
                    window.location.href = "fase-poseidon-2.html";
                }
                
                if(questaoAtualPoseidon === 3){
                    window.location.href = "fase-poseidon-3.html";
                }
            }
    
            if(faseAtual === "Submundo"){
                if(questaoAtualSubmundo === 1){
                    window.location.href = "fase-submundo-1.html";
                }
    
                if(questaoAtualSubmundo === 2){
                    window.location.href = "fase-submundo-2.html";
                }
                
                if(questaoAtualSubmundo === 3){
                    window.location.href = "fase-submundo-3.html";
                }
            }
    
            if(faseAtual === "Monte Olimpo"){
                if(questaoAtualMonteOlimpo === 1){
                    window.location.href = "fase-olimpo-1.html";
                }
    
                if(questaoAtualMonteOlimpo === 2){
                    window.location.href = "fase-olimpo-2.html";
                }
                
                if(questaoAtualMonteOlimpo === 3){
                    window.location.href = "fase-olimpo-3.html";
                }
            }
            
        }else if(meuGuia === "Zeus"){
            poderes.innerHTML = "Permite que você troque a pergunta (limite de 1 vez por fase).";
            poderes.style.fontSize = "20px";
    
            if(faseAtual === "Demeter"){
                if(questaoAtualDemeter === 1){
                    window.location.href = "fase-demeter-1.html";
                }
    
                if(questaoAtualDemeter === 2){
                    window.location.href = "fase-demeter-2.html";
                }
                
                if(questaoAtualDemeter === 3){
                    window.location.href = "fase-demeter-3.html";
                }
            }
    
            if(faseAtual === "Poseidon"){
                if(questaoAtualPoseidon === 1){
                    window.location.href = "fase-poseidon-1.html";
                }
    
                if(questaoAtualPoseidon === 2){
                    window.location.href = "fase-poseidon-2.html";
                }
                
                if(questaoAtualPoseidon === 3){
                    window.location.href = "fase-poseidon-3.html";
                }
            }
    
            if(faseAtual === "Submundo"){
                if(questaoAtualSubmundo === 1){
                    window.location.href = "fase-submundo-1.html";
                }
    
                if(questaoAtualSubmundo === 2){
                    window.location.href = "fase-submundo-2.html";
                }
                
                if(questaoAtualSubmundo === 3){
                    window.location.href = "fase-submundo-3.html";
                }
            }
    
            if(faseAtual === "Monte Olimpo"){
                if(questaoAtualMonteOlimpo === 1){
                    window.location.href = "fase-olimpo-1.html";
                }
    
                if(questaoAtualMonteOlimpo === 2){
                    window.location.href = "fase-olimpo-2.html";
                }
                
                if(questaoAtualMonteOlimpo === 3){
                    window.location.href = "fase-olimpo-3.html";
                }
            }
    
        }else if(meuGuia ==="Têmis"){
            poderes.innerHTML = "Retira 2 alternativas erradas (limite de 2 vezes por fase).";
            poderes.style.fontSize = "20px";
    
            if(faseAtual === "Demeter"){
                if(questaoAtualDemeter === 1){
                    window.location.href = "fase-demeter-1.html";
                }
    
                if(questaoAtualDemeter === 2){
                    window.location.href = "fase-demeter-2.html";
                }
                
                if(questaoAtualDemeter === 3){
                    window.location.href = "fase-demeter-3.html";
                }
            }
    
            if(faseAtual === "Poseidon"){
                if(questaoAtualPoseidon === 1){
                    window.location.href = "fase-poseidon-1.html";
                }
    
                if(questaoAtualPoseidon === 2){
                    window.location.href = "fase-poseidon-2.html";
                }
                
                if(questaoAtualPoseidon === 3){
                    window.location.href = "fase-poseidon-3.html";
                }
            }
    
            if(faseAtual === "Submundo"){
                if(questaoAtualSubmundo === 1){
                    window.location.href = "fase-submundo-1.html";
                }
    
                if(questaoAtualSubmundo === 2){
                    window.location.href = "fase-submundo-2.html";
                }
                
                if(questaoAtualSubmundo === 3){
                    window.location.href = "fase-submundo-3.html";
                }
            }
    
            if(faseAtual === "Monte Olimpo"){
                if(questaoAtualMonteOlimpo === 1){
                    window.location.href = "fase-olimpo-1.html";
                }
    
                if(questaoAtualMonteOlimpo === 2){
                    window.location.href = "fase-olimpo-2.html";
                }
                
                if(questaoAtualMonteOlimpo === 3){
                    window.location.href = "fase-olimpo-3.html";
                }
            }
        }
    }
    verificarLimites();

    /**evento ajuda guia */
    btnAjudaGuia.addEventListener('click', () => {
        modalGuia.style.display = "flex";
        const imagemGuiaModal = document.getElementById('modal-guia');
        var imagem = document.createElement('img');
        imagem.classList.add('img-modal');

        if(meuGuia === "Têmis"){
            imagem.src = "/img/themis-modal.png";
            imagemGuiaModal.appendChild(imagem);
        }

        if(meuGuia === "Zeus"){
            imagem.src = "/img/zeus-modal.png";
            imagemGuiaModal.appendChild(imagem); 

            verificarLimiteZeus();
        }

        if(meuGuia === "Atena"){
            imagem.src = "/img/atena-modal.png";
            imagemGuiaModal.appendChild(imagem); 

            verificarLimiteAtena();
        }
    }); 

    //**Evennto fechar modal */
    btnfecharModal.addEventListener('click', () => {
        fecharModal();
    }); 

    /**função fechar modal */
    function fecharModal(){
        verificarLimites();
        modalGuia.style.display = "none";
    }
    
    /**evento confirmar ajuda */
    btnConfirmarAjuda.addEventListener('click', () => {

        if(meuGuia === "Atena"){
            if(faseAtual === "Demeter"){
                if(parseInt(questaoAtualDemeter) === 1){

                    fecharModal();
                    const dica = "Lembre-se de que Deméter permite a colheita apenas quando o inverno já passou e o sol está presente. Pense em uma estação mais quente e iluminada!";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    verificarLimiteAtena();

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "Deméter é a deusa da agricultura e das colheitas. Suponha que estamos no reino dela, onde só há colheita se não for inverno e houver sol. Considerando essa regra, em qual das opções abaixo a colheita vai acontecer?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualDemeter) === 2){
                    fecharModal();
                    const dica = "Para as plantas crescerem, elas precisam tanto de água quanto de um solo fértil. Pense em uma situação onde ambas as condições estejam presentes ao mesmo tempo!";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    verificarLimiteAtena();
   
                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "No reino da deusa Deméter, para que as plantas cresçam, é necessário que haja água e o solo seja fértil.Em qual das opções abaixo as plantas vão crescer?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualDemeter) === 3){
                    fecharModal();
                    const dica = "Para que as plantas cresçam fortes e saudáveis, elas precisam de todas as condições: solo fértil, água constante e luz solar. Verifique onde todas essas necessidades estão atendidas!";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    verificarLimiteAtena();

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "Deméter garantiu que o solo seja fértil, mas para que as plantas cresçam saudáveis, elas também precisam receber água regularmente e luz solar suficiente. Considerando essa regra, em qual das opções abaixo o crescimento das plantas será bem-sucedido?";
                    }, 10000);
                }
            }

            if(faseAtual === "Poseidon"){
                if(parseInt(questaoAtualPoseidon) === 1){
                    fecharModal();
                    const dica = "Pense nas condições apresentadas: quando Poseidon está irritado, ele causa tempestades. Também sabemos que, sempre que uma tempestade dessas ocorre, Poseidon está irritado. Qual opção traduz melhor essa relação de causa e efeito entre a irritação de Poseidon e as tempestades?";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    verificarLimiteAtena();

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "Se Poseidon está irritado, então ele causa grandes tempestades no mar. Hoje à noite, uma tempestade surgiu do nada. Sempre que há uma tempestade dessas, Poseidon está irritado.O que podemos concluir logicamente?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualPoseidon) === 2){
                    fecharModal();
                    const dica = "Lembre-se de que Atena não ficou feliz com o cavalo criado por Poseidon, preferindo a coruja como símbolo. Procure a opção que melhor reflete essa reação de Atena em relação ao cavalo e sua preferência pela coruja.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    verificarLimiteAtena();

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "No mito de Poseidon e a criação do cavalo, Poseidon, para conquistar a afeição de Atena, prometeu criar um animal maravilhoso. Ele criou o cavalo, mas Atena, embora impressionada, não ficou tão feliz com a criação. Ela preferiu a coruja, que se tornou seu símbolo.O que podemos concluir logicamente?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualPoseidon) === 3){
                    fecharModal();
                    const dica = "Atena puniu Medusa, mas não Poseidon, embora ele tenha sido a causa da situação. A punição foi desigual, talvez porque Poseidon era um deus poderoso e Medusa, uma mortal. Busque a opção que melhor reflete essa diferença no tratamento entre Poseidon e Medusa.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    verificarLimiteAtena();

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "No mito grego, Poseidon, o deus dos mares, seduziu Medusa, que era uma sacerdotisa de Atena. Como punição, Atena transformou Medusa em um monstro com cabelos de serpente. Quem olhasse para Medusa se transformaria em pedra. No entanto, Atena não puniu Poseidon por sua atitude, já que ele era um deus poderoso.O que podemos concluir logicamente?";
                    }, 10000);
                }
            }
    
            if(faseAtual === "Submundo"){
                /**Mudar para perguntas do submundo */
                if(parseInt(questaoAtualSubmundo) === 1){
                    fecharModal();
                    const dica = "Pense nas duas condições: a moeda representa a passagem, e a ausência de uma maldição permite a travessia segura. Ambas são necessárias para cruzar o rio.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "No reino de Hades, as almas só podem atravessar o rio Estige se tiverem uma moeda e se não forem amaldiçoadas.Considerando essa regra, em qual das opções abaixo uma alma pode atravessar o rio Estige?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualSubmundo) === 2){
                    fecharModal();
                    const dica = "Lembre-se que Cérbero é um guardião fiel ao seu mestre Hades, e ele permite a passagem apenas quando a alma não apresenta resistência nem ameaça. Ou seja, terá uma negação em apenas uma das condicionais.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "No reino de Hades, o cão Cérbero permite a passagem para as almas apenas se elas não carregarem nenhum objeto e tiverem permissão do próprio Hades. Em qual das opções abaixo uma alma consegue passar por Cérbero?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualSubmundo) === 3){
                    fecharModal();
                    const dica = "A floresta encanta-se com a combinação de escuridão e algo que brilha intensamente no céu. Pense no momento em que tudo parece mágico.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "No submundo, há uma floresta encantada onde as árvores só florescem se estiver anoitecendo e houver uma lua cheia. Em qual das opções abaixo as árvores irão florescer?";
                    }, 10000);
                }
            }
    
            if(faseAtual === "Monte Olimpo"){
                if(parseInt(questaoAtualMonteOlimpo) === 1){
                    fecharModal();
                    const dica = "Lembre-se da regra: 'Se houver admiração, então haverá amor'. Escolha a opção que apresenta tanto admiração quanto amor.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "Afrodite, a deusa do amor e da beleza, tem uma regra para garantir que o amor entre os mortais aconteça: 'Se houver admiração, então haverá amor'. Considerando essa regra, em qual das opções abaixo o amor acontecerá?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualMonteOlimpo) === 2){
                    fecharModal();
                    const dica = "Segundo Atena, estudar leva à sabedoria. Procure a resposta que mostra alguém que estudou e ficou mais sábio.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "Atena, deusa da sabedoria, possui uma regra que diz: 'Se uma pessoa estudar, então ela ficará mais sábia'. Considerando essa regra, qual das opções abaixo indica que a pessoa ficará mais sábia?";
                    }, 10000);
                }
    
                if(parseInt(questaoAtualMonteOlimpo) === 3){
                    fecharModal();
                    const dica = "A regra de Apolo é clara: tocar a lira resulta em música. Escolha a opção onde a lira é tocada e a música acontece.";  
                    mudarPerguntaParaDica.textContent = dica;

                    limitePoderesAtenaLocalStorage = limitePoderesAtenaLocalStorage + 1;
                    localStorage.setItem('limitePoderesAtenaLocalStorage',limitePoderesAtenaLocalStorage);

                    setTimeout(() => {
                        mudarPerguntaParaDica.textContent = "Apolo, deus da música, diz: 'Se alguém tocar a lira, então a música será tocada'. Considerando essa regra, qual das opções abaixo garante que a música será tocada?";
                    }, 10000);
                }
            }
        }
        else if(meuGuia === "Zeus"){
            if(faseAtual === "Demeter"){
                fecharModal();

                //const perguntasAcertadas = parseInt(localStorage.getItem('perguntasAcertadas')) - 1;
                //localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

                //const perguntasAcertadasDemeter = parseInt(localStorage.getItem('perguntasAcertadasDemeter')) - 1;
                //localStorage.setItem('perguntasAcertadasDemeter',perguntasAcertadasDemeter);

                //questaoAtualDemeter = questaoAtualDemeter - 1;
                //localStorage.setItem('questaoAtualDemeter',questaoAtualDemeter);

                //const totalPerguntasRespondidas = parseInt(localStorage.getItem('totalPerguntasRespondidas')) - 1;
                //localStorage.setItem('totalPerguntasRespondidas',totalPerguntasRespondidas);

                limitePoderesZeusLocalStorage = limitePoderesZeusLocalStorage + 1;
                localStorage.setItem('limitePoderesZeusLocalStorage',limitePoderesZeusLocalStorage);

                verificarLimiteZeus();

                setTimeout(() => {
                    window.location.href = "fase-demeter-4.html";
                }, 3000);
            }

            if(faseAtual === "Poseidon"){
                fecharModal();

                //const perguntasAcertadas = parseInt(localStorage.getItem('perguntasAcertadas')) - 1;
                //localStorage.setItem('perguntasAcertadas',perguntasAcertadas);

                //const perguntasAcertadasPoseidon = parseInt(localStorage.getItem('perguntasAcertadasPoseidon')) - 1;
                //localStorage.setItem('perguntasAcertadasPoseidon',perguntasAcertadasPoseidon);

                //questaoAtualPoseidon= questaoAtualPoseidon - 1;
                //localStorage.setItem('questaoAtualPoseidon',questaoAtualPoseidon);

                //const totalPerguntasRespondidas = parseInt(localStorage.getItem('totalPerguntasRespondidas')) - 1;
                //localStorage.setItem('totalPerguntasRespondidas',totalPerguntasRespondidas);

                limitePoderesZeusLocalStorage = limitePoderesZeusLocalStorage + 1;
                localStorage.setItem('limitePoderesZeusLocalStorage',limitePoderesZeusLocalStorage);

                verificarLimiteZeus();

                setTimeout(() => {
                    window.location.href = "fase-poseidon-4.html";
                }, 3000);
            }

            if(faseAtual === "Submundo"){
                fecharModal();

                limitePoderesZeusLocalStorage = limitePoderesZeusLocalStorage + 1;
                localStorage.setItem('limitePoderesZeusLocalStorage',limitePoderesZeusLocalStorage);

                verificarLimiteZeus();

                setTimeout(() => {
                    window.location.href = "fase-submundo-4.html";
                }, 3000);
            }

            if(faseAtual === "Monte Olimpo"){
                fecharModal();

                limitePoderesZeusLocalStorage = limitePoderesZeusLocalStorage + 1;
                localStorage.setItem('limitePoderesZeusLocalStorage',limitePoderesZeusLocalStorage);

                verificarLimiteZeus();

                setTimeout(() => {
                    window.location.href = "fase-olimpo-4.html";
                }, 3000);
            }

        }else if(meuGuia ==="Têmis"){
            verificarLimites();

            if(faseAtual === "Demeter"){
                fecharModal();

                if(parseInt(questaoAtualDemeter) === 1){
                    singleResposta1Questao1FaseDemeter.style.display = "none";
                    singleResposta3Questao1FaseDemeter.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualDemeter) === 2){
                    singleResposta2Questao2FaseDemeter.style.display = "none";
                    singleResposta4Questao2FaseDemeter.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualDemeter) === 3){
                    singleResposta3Questao3FaseDemeter.style.display = "none";
                    singleResposta2Questao3FaseDemeter.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }

                console.log("Foi uma vez: "+ limitePoderesTemisLocalStorage);
                console.log("Limite: "+ limitePoderesTemisPorFase);
            }

            if(faseAtual === "Poseidon"){
                fecharModal();

                if(parseInt(questaoAtualPoseidon) === 1){
                    singleResposta1Questao1FasePoseidon.style.display = "none";
                    singleResposta4Questao1FasePoseidon.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualPoseidon) === 2){
                    singleResposta2Questao2FasePoseidon.style.display = "none";
                    singleResposta3Questao2FasePoseidon.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualPoseidon) === 3){
                    verificarLimiteTemis();
                    singleResposta4Questao3FasePoseidon.style.display = "none";
                    singleResposta2Questao3FasePoseidon.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
            }
    
            if(faseAtual === "Submundo"){
                fecharModal();

                if(parseInt(questaoAtualSubmundo) === 1){
                    singleResposta1Questao1FaseSubmundo.display = "none";
                    singleResposta2Questao1FaseSubmundo.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualSubmundo) === 2){
                    singleResposta2Questao2FaseSubmundo.style.display = "none";
                    singleResposta4Questao2FaseSubmundo.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualSubmundo) === 3){
                    singleResposta4Questao3FaseSubmundo.style.display = "none";
                    singleResposta3Questao3FaseSubmundo.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
            }
    
            if(faseAtual === "Monte Olimpo"){
                if(parseInt(questaoAtualMonteOlimpo) === 1){
                    singleResposta1Questao1FaseMonteOlimpo.style.display = "none";
                    singleResposta2Questao1FaseMonteOlimpo.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualMonteOlimpo) === 2){
                    singleResposta1Questao2FaseMonteOlimpo.style.display = "none";
                    singleResposta3Questao2FaseMonteOlimpo.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
    
                if(parseInt(questaoAtualMonteOlimpo) === 3){
                    singleResposta2Questao3FaseMonteOlimpo.style.display = "none";
                    singleResposta3Questao3FaseMonteOlimpo.style.display = "none";

                    limitePoderesTemisLocalStorage = limitePoderesTemisLocalStorage + 1;
                    localStorage.setItem('limitePoderesTemisLocalStorage',limitePoderesTemisLocalStorage);

                    verificarLimiteTemis();
                }
            }
        }
    });
});
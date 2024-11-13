document.addEventListener('DOMContentLoaded', () => {
    const temis = document.getElementById('guia-temis');
    const zeus = document.getElementById('guia-zeus');
    const atena = document.getElementById('guia-atena');

    temis.addEventListener('click', () => {
        localStorage.setItem('meu_guia','Têmis');
    });
    
    zeus.addEventListener('click', () => {
        localStorage.setItem('meu_guia','Zeus');
    });

    atena.addEventListener('click', () => {
        localStorage.setItem('meu_guia','Atena');
    });
});
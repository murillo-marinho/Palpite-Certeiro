function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            closeModal(modals[i].id);
        }
    }
}

function saveName() {
    const playerNameInput = document.getElementById('playerName');
    const playerName = playerNameInput.value.trim();

    if (playerName) {
        if(playerName.length >= 13){
            playerNameInput.style.border = "3px solid #ff0000";
            playerNameInput.value = "Nome precisa ter menos que 13 caracteres";

            setTimeout(() => {
                playerNameInput.value = "";
            }, 5000);
            return;
        }

        localStorage.setItem('playerName', playerName);
 
        document.getElementById('message').innerHTML = 'Vamos, '+ playerName +'! É hora de iniciar a sua jornada!';

        setTimeout(() => {
            window.location.href = 'guia.html';
        }, 2000);
    } else {
        document.getElementById('message').textContent = 'Por favor, insira um nome.';
    }
}

function fadeOutAndRedirect(url) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    overlay.style.pointerEvents = 'auto';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    overlay.style.opacity = '0';

    setTimeout(() => {
        overlay.style.transition = 'opacity 2s';
        overlay.style.opacity = '1';

        setTimeout(() => {
            window.location.href = url;
        }, 2000);
    }, 0);
}

const perfil = localStorage.getItem('playerName');
const getNamespace = document.getElementById('getName');
getNamespace.innerHTML = perfil;

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();    }
}, { passive: false });

document.addEventListener('gesturestart', function(event) {
    event.preventDefault(); 
});
function navigateToPhase(phase) {

    let url = '';
    switch (phase) {
        case 'afrodite':
            url = 'fase-afrodite.html';
            break;
        case 'demeter':
            url = 'fase-demeter.html';
            break;
        case 'submundo':
            url = 'fase-submundo.html';
            break;
        case 'olimpo':
            url = 'fase-olimpo.html';
            break;
    }

    if (url) {
        window.location.href = url;
    }
}
window.onload = function() {
    document.body.style.opacity = '1';
};
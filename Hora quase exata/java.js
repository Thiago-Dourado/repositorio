function carregar(){
    var msg = window.document.getElementById('msg');
    var pic = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours(); 
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        pic.src = 'manha.png';
        document.body.style.background = '#FFCF63'
        document.body.style.transition = "background-color 1s";
    } else if (hora >= 12 && hora <= 18) {
        pic.src = 'tarde.png';
        document.body.style.background = '#9DD2FF'
        document.body.style.transition = "background-color 1s";
    } else {
        pic.src = 'noie.png'; 
        document.body.style.background = '#0C5D59'
        document.body.style.transition = "background-color 1s";
    }
}
$('#wpp').mask('(99) 99999-9999');
var b = document.querySelectorAll('div.radio-button');
var icon = document.querySelectorAll('span.icon-check');
var website = document.querySelector('#divWeb');
var whatsapp = document.querySelector('#divWpp');
var texto = document.querySelector('#divText');

//

var webUrl = document.querySelector('#webUrl');
var whats = document.querySelector('#wpp');
var yourText = document.querySelector('#texto');
var field = document.querySelectorAll('input.field');

var urlField = document.querySelector('#url-field');
var wppField = document.querySelector('#wpp-field');
var textField = document.querySelector('#text-field')
var targetQr = document.querySelector('#targetQr');
var qrImage = document.querySelector('#qrcode');
var btnDownload = document.querySelector('#btn-download');
var linkDownload = document.querySelector('#link-download');
var qrspace = document.querySelector('#qr-gerado');

document.body.onload = function(){ // 1-bloco
    icon[0].classList.add('icon-check-a'); //ativando icone ao clicar
    icon[1].classList.remove('icon-check-a'); //desativando icone ao clicar
    icon[2].classList.remove('icon-check-a'); //desativando icone ao clicar
    b[0].classList.add('active-element'); //adicionando class na div ao clicar 
    b[1].classList.remove('active-element'); //removendo class na div ao clicar borda
    b[2].classList.remove('active-element'); //removendo class na div ao clicar borda
    urlField.style.display = 'block';
    

}
website.onclick = function(){ // 1-bloco
    icon[0].classList.add('icon-check-a'); //ativando icone ao clicar
    icon[1].classList.remove('icon-check-a'); //desativando icone ao clicar
    icon[2].classList.remove('icon-check-a'); //desativando icone ao clicar
    b[0].classList.add('active-element'); //adicionando class na div ao clicar 
    b[1].classList.remove('active-element'); //removendo class na div ao clicar borda
    b[2].classList.remove('active-element'); //removendo class na div ao clicar borda

    urlField.style.display = 'block';
    wppField.style.display = 'none';
    textField.style.display = 'none';
    qrImage.src = ``;
    btnDownload.style.display = 'none';
    qrspace.style.display = 'none';
}

whatsapp.onclick = function(){ // 2-bloco
    icon[1].classList.add('icon-check-a'); //ativando icone ao clicar
    icon[0].classList.remove('icon-check-a'); //desativando icone ao clicar
    icon[2].classList.remove('icon-check-a'); //desativando icone ao clicar
    b[1].classList.add('active-element'); //adicionando class na div ao clicar borda
    b[0].classList.remove('active-element'); //removendo class na div ao clicar borda
    b[2].classList.remove('active-element'); //removendo class na div ao clicar borda

    wppField.style.display = 'block';
    urlField.style.display = 'none';
    textField.style.display = 'none';
    qrImage.src = ``;
    btnDownload.style.display = 'none';
    qrspace.style.display = 'none';
}

texto.onclick = function(){ // 3-bloco
    icon[2].classList.add('icon-check-a'); //ativando icone ao clicar
    icon[0].classList.remove('icon-check-a'); //desativando icone ao clicar
    icon[1].classList.remove('icon-check-a'); //desativando icone ao clicar
    b[2].classList.add('active-element'); //adicionando class na div ao clicar borda
    b[0].classList.remove('active-element'); //removendo class na div ao clicar borda
    b[1].classList.remove('active-element'); //removendo class na div ao clicar borda

    textField.style.display = 'block';
    urlField.style.display = 'none';
    wppField.style.display = 'none';
    qrImage.src = ``;
    btnDownload.style.display = 'none';
    qrspace.style.display = 'none';
}
function resultadoWeb(){
    webUrlValue = webUrl.value; // Value of Input
    qrImage.src = `https://qrickit.com/api/qr.php?d=${webUrlValue}`;
    qrImage.style.cssText = 'display:flex;margin:30px auto;';
    linkDownload.href = `https://qrickit.com/api/qr.php?d=${webUrlValue}`;
    linkDownload.target = '_blank';
    qrspace.style.display = 'block';
    setTimeout(function() {
        btnDownload.style.display = 'block';
        qrspace.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }, 1000);
    
}

function resultadoWpp(){
    whatsValue = whats.value; // Value of Input
    whatsValueConvert = whatsValue.replace(/[(|)|-|" "]/g, "");
    qrImage.src = `https://qrickit.com/api/qr.php?d=https://api.whatsapp.com/send?phone=55${whatsValueConvert}`;
    qrImage.style.cssText = 'display:flex;margin:30px auto;';
    linkDownload.href = `https://qrickit.com/api/qr.php?d=${whatsValueConvert}`;
    linkDownload.target = '_blank';
    qrspace.style.display = 'block';
    setTimeout(function() {
        btnDownload.style.display = 'block';
        qrspace.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }, 1000);
}

function resultadoText(){
    textValue = yourText.value; // Value of Input
    qrImage.src = `https://qrickit.com/api/qr.php?d=${textValue}`;
    qrImage.style.cssText = 'display:flex;margin:30px auto;';
    linkDownload.href = `https://qrickit.com/api/qr.php?d=${textValue}`;
    linkDownload.target = '_blank';
    qrspace.style.display = 'block';
    setTimeout(function() {
        btnDownload.style.display = 'block';
        qrspace.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    }, 1000);
}

function redirectMain(){
    window.location.href = 'index.html';
}
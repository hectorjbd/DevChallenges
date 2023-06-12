const abrir = document.getElementById('open');
const cerrar = document.getElementById('close');
const menuMobile = document.getElementById('menuMobile')

abrir.onclick = function(){
    abrir.style.display = 'none'
    cerrar.style.display = 'block'
    menuMobile.style.display = 'block'
}

cerrar.onclick = function(){
    abrir.style.display = 'block'
    cerrar.style.display = 'none'
    menuMobile.style.display = 'none'
}
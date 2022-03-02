let btnMenu =document.getElementById('btn-menu');
let nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
    btnMenu.classList.toggle('change-logo');
    nav.classList.toggle('mostrar');
})
var menu = document.getElementById('menuu');
var burgerMenu1 = document.getElementById('burguer1');
var burgerMenu2 = document.getElementById('burguer2');
var burgerMenu3 = document.getElementById('burguer3');
var nav = document.getElementById('navbarr');
var nombre = document.getElementById('nombree');
var linea = document.getElementById('lineaa');
menu.addEventListener('click', function(){
    nav.classList.toggle("abierta");
    burgerMenu1.classList.toggle("abierta");
    burgerMenu2.classList.toggle("abierta");
    burgerMenu3.classList.toggle("abierta");
    nombre.classList.toggle("abierta");
    lineaa.classList.toggle("abierta");
})
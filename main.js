var menu = document.getElementById('menuu');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var nav = document.getElementById('navbarr');
var nombre = document.getElementById('nombree');
var linea = document.getElementById('lineaa');
menu.addEventListener('click', function(){
    nav.classList.toggle("abierta");
    menu1.classList.toggle("abierta");
    menu2.classList.toggle("abierta");
    nombre.classList.toggle("abierta");
    lineaa.classList.toggle("abierta");
})





const btnMobile = document.getElementById('btn-mobile');


// toggle para menu do hamburguer
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
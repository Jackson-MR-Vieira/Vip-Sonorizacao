// ================= SLIDER (SÓ SE EXISTIR) =================
const sliderArea = document.querySelector('.slider');

if (sliderArea) {
    let imgSlider = document.querySelectorAll('.slider-container .slider-box');
    let btnProx = document.querySelector('#proxima');
    let btnAnter = document.querySelector('#anterior');
    let btnNav = document.querySelectorAll('.btn-nav-box .btn-nav');

    let contadorImg = imgSlider.length;
    let imgAtiva = 0;

    let tempo = 4500;
    let autoPlay;

    function iniciarAutoPlay() {
        autoPlay = setInterval(() => {
            imgAtiva++;
            if (imgAtiva >= contadorImg) {
                imgAtiva = 0;
            }
            mostrarSlider();
        }, tempo);
    }

    function resetarAutoPlay() {
        clearInterval(autoPlay);
        iniciarAutoPlay();
    }

    function mostrarSlider() {
        let antigaImg = document.querySelector('.slider-container .slider-box.ativo');
        let antigoBtnNav = document.querySelector('.btn-nav-box .btn-nav.ativo');

        if (antigaImg) antigaImg.classList.remove('ativo');
        if (antigoBtnNav) antigoBtnNav.classList.remove('ativo');

        imgSlider[imgAtiva].classList.add('ativo');
        btnNav[imgAtiva].classList.add('ativo');
    }

    btnProx.addEventListener('click', () => {
        imgAtiva++;
        if (imgAtiva >= contadorImg) imgAtiva = 0;
        mostrarSlider();
        resetarAutoPlay();
    });

    btnAnter.addEventListener('click', () => {
        imgAtiva--;
        if (imgAtiva < 0) imgAtiva = contadorImg - 1;
        mostrarSlider();
        resetarAutoPlay();
    });

    btnNav.forEach((btn, indice) => {
        btn.addEventListener('click', () => {
            imgAtiva = indice;
            mostrarSlider();
            resetarAutoPlay();
        });
    });

    iniciarAutoPlay();

    sliderArea.addEventListener('mouseenter', () => clearInterval(autoPlay));
    sliderArea.addEventListener('mouseleave', iniciarAutoPlay);
}


const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav.menu');
const menuLinks = document.querySelectorAll('nav.menu a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    menuToggle.classList.toggle('ativo');
    document.body.classList.toggle('menu-open');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
        menuToggle.classList.remove('ativo');
        document.body.classList.remove('menu-open');
    });
});



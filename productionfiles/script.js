const header = document.querySelector('header');
const menuBtn = header.querySelector('.menuBtn');
const main = document.querySelector('main');
const menu = main.querySelector('.menu');

window.addEventListener('load', () => scrollHeader(window.scrollY))
window.addEventListener('scroll', () => scrollHeader(window.scrollY))
menuBtn.onclick = () => {
    header.classList.toggle('open');
    main.classList.toggle('open');
}

function scrollHeader(scrollY){
    if (scrollY > 50){
        header.classList.add('scroll');
        menu.classList.add('adjust');
    }else{
        header.classList.remove('scroll');
        menu.classList.remove('adjust');
    }
}
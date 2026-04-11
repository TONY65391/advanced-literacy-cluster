const header = document.querySelector('header')
const menu = header.querySelector('.menu')
window.addEventListener('load', () => scrollHeader(window.scrollY))
window.addEventListener('scroll', () => scrollHeader(window.scrollY))
menu.onclick = () => {
    menu.classList.toggle('open');
}

function scrollHeader(scrollY){
    if (scrollY > 50){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll');
    }
}
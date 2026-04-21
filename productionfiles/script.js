const header = document.querySelector('header');
const menuBtn = header.querySelector('.menuBtn');
const main = document.querySelector('main');
const menu = main.querySelector('.menu');

const slides = [...document.querySelectorAll('main .heroGrid .grid .slide')];
if (slides){
    var currentIndex = 0;
    function showSlide(){
        if (currentIndex === slides.length){
            currentIndex = 0;
        }
        slides.forEach(slide => {slide.classList.remove('active')});
        slides[currentIndex].classList.add('active');
        currentIndex++;
    }
    setInterval(() => {
        showSlide();
    }, 4500);
}
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
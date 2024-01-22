console.log('JS OK');

// # RECUPERO ELEMENTI
// img container
const slidesContainer = document.getElementById('img-container');
console.log(slidesContainer)

// arrow bot
const arrowBot = document.getElementById("a-next");

// arrow top 
const arrowTop = document.getElementById("a-prev");

// valore slide mostrata
let slideIndex = 0

// # CREO ARRAY
const imagesCarousel = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
console.log(imagesCarousel);

// # CICLO FOR
let slidesHTML = ''

for(let i=0; i < imagesCarousel.length; i++) {

    const image = imagesCarousel[i];

    let activeClass;

    // condizione
    if(i == slideIndex) {
        activeClass = 'active'
    } else {
        activeClass = '';
    }

    // elemento da inserire nel container
    slidesHTML += `<img src="./img/${image}" class="slides ${activeClass}" alt="slides ${i}">`;
}

slidesContainer.innerHTML = slidesHTML;


// * FRECCIE
// Freccia bot prossima
arrowBot.addEventListener ('click', function(){

    // recupero slides
    const allSlides = document.getElementsByClassName('slides');

    // recupero img con sia classe slide che active
    const currentSlide = document.querySelector('.slides.active');

    // rimuovo classe active
    const currentSlideSlide = allSlides[slideIndex];
    currentSlide.classList.remove('active');

    // incremento valore slide mostrata
    slideIndex;

    // condizione se il volore della slide mostrata è uguale all'ultimo elemento dell'array torna al primo
    if(slideIndex >= imagesCarousel.length - 1){
        slideIndex = 0;
    } else {
        slideIndex++;
    }

    // aggiungo la classe
    const nextSlide = allSlides[slideIndex];
    nextSlide.classList.add('active')
});


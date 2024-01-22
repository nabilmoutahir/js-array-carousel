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



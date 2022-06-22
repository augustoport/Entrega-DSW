//CARROSSEL

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});


//próx slide
const nextSlide = document.querySelector(".btn-next");
let curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    //   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

//slide anterior
const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});


//SIDEBAR

document.querySelector('.dismiss, .overlay').addEventListener('click', function close() {
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.dismiss').classList.remove('active');
});

document.querySelector('.open-menu').addEventListener('click', function open(e) {
    e.preventDefault();
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.dismiss').classList.toggle('active');
});


//FORM

function enviar(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    let object = createObjectFromForm(formData);
    alert(`Dados enviados: 
        ${JSON.stringify(object)}
        Horário de envio: ${new Date(event.timeStamp).toTimeString()}
    `);

}

function createObjectFromForm(formData){
    let obj = {};
    formData.forEach((key, value) => obj[key] = value);
    return obj;
}
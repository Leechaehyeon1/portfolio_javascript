const viewBtn = document.querySelector('.view');
const intro = document.querySelector('.intro');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

viewBtn.addEventListener('click', function(){
  intro.classList.add('active')
});

nextBtn.addEventListener('click', function(){
  nextSlide();
});

prevBtn.addEventListener('click', function(){
  prevSlide();
});

let slideNumber = 0;
const nextSlide = () => {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('.slide');
  const currentSlide = slider.querySelectorAll('.active');

  currentSlide[0].classList.remove('active');
  if(slideNumber === (slides.length-1)){
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  slides[slideNumber].classList.add('active');
}

const prevSlide = () => {
  const slider = document.querySelector('.slider');
  const slides = slider.querySelectorAll('.slide');
  const currentSlide = slider.querySelectorAll('.active');

  currentSlide[0].classList.remove('active');
  if(slideNumber === 0){
    slideNumber = slides.length-1;
  } else {
    slideNumber--;
  }
  slides[slideNumber].classList.add('active');
}

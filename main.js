let slideIndex = 1;

fetch('./slide-data.json')
  .then(response => response.json())
  .then(jsonData => {
    const totalSlides = jsonData.length;
    const slideShowContainer = document.querySelector('.slideshow');

    jsonData.forEach((objSlide, index) => {
      const slideContainer = document.createElement('div');
      slideContainer.classList.add('slideshow__slides', 'slideshow__slides--fade');
      const numberTextContainer = document.createElement('div');
      numberTextContainer.classList.add('slideshow__numbertext');
      numberTextContainer.innerHTML = `${index + 1} / ${totalSlides}`;
      const imgContainer = document.createElement('img');
      imgContainer.src = `${objSlide.imageUrl}`;
      const captionContainer = document.createElement('div');
      captionContainer.classList.add('slideshow__text');
      captionContainer.innerHTML = `${objSlide.caption}`;

      slideContainer.append(numberTextContainer, imgContainer, captionContainer);
      slideShowContainer.appendChild(slideContainer);
    });

    showSlides(slideIndex);
  });

function showSlides(n) {
  let slides = document.getElementsByClassName('slideshow__slides');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function plusSlides() {
  showSlides(slideIndex += 1);
}

function minusSlides() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
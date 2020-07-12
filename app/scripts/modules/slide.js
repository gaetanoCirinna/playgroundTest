let index = 1;

const showSlide = (n) => {
  const slides = document.getElementsByClassName("large-hero__slide");
  const counter = document.getElementsByClassName("counter__element");

  // SLIDES
  if (n > slides.length) {
    index = 1;
  } else if (n < 1) {
    index = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    if (i === index - 1 && slides[index - 1]) {
      slides[index - 1].style.display = "block";
    }
  }

  // COUNTER
  for (let i = 0; i < counter.length; i++) {
    if (index - 1 === i) {
      counter[i].classList.add("active");
    } else {
      counter[i].classList.remove("active");
    }
  }
};
const counterSlide = (n) => {
  console.log();
  showSlide((index = n));
};
const plusSlide = (n) => {
  showSlide((index += n));
};
const lessSlide = (n) => {
  showSlide((index += n));
};
showSlide(index);

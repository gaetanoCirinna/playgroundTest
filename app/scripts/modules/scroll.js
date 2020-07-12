const navbar = document.getElementById("navbar");
const navbarPosition = navbar.offsetTop;
window.onscroll = (e) => {
  console.log(navbarPosition);
  console.log(window.pageYOffset);

  console.log(window.pageYOffset === 0 ? "ciao" : "merda");
  if (window.pageYOffset >= navbarPosition) {
    navbar.classList.add("sticky");
  }
  if (window.pageYOffset === 0) {
    navbar.classList.remove("sticky");
  }
};

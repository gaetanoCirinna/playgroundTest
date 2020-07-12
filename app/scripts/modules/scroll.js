const navbar = document.getElementById("navbar");
const navbarPosition = navbar.offsetTop;
window.onscroll = (e) => {
  if (window.pageYOffset >= navbarPosition) {
    navbar.classList.add("sticky");
  }
  if (window.pageYOffset === 0) {
    navbar.classList.remove("sticky");
  }
};

const cookie = document.getElementById("cookie");

const closeCookie = () => {
  cookie.classList.add("deactive");
  setTimeout(() => {
    cookie.style.display = "none";
  }, 300);
};

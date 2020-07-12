"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var titleTabs = document.getElementsByClassName("tab-title");
var tabs = document.getElementsByClassName("tabs-container__element");

var fetchJSONFile = function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);

        if (callback) {
          console.log(data);
          callback(data);
        }
      }
    }
  };

  httpRequest.open("GET", path);
  httpRequest.send();
};

var showTitleTab = function showTitleTab() {
  console.log("entra");

  var _loop = function _loop(i) {
    console.log("entra anche qui");
    fetchJSONFile("/../../assets/ajax/tab" + (i + 1) + ".json", function (data) {
      if (data) {
        var title = document.getElementById("tab-title" + (i + 1));
        var textArray = data["item"].title;
        var text = document.createTextNode(textArray);
        title.innerHTML = "";
        title.appendChild(text);
      }
    });
  };

  for (var i = 0; i < titleTabs.length; i++) {
    _loop(i);
  }
};

var showTab = function showTab(n) {
  for (var i = 0; i < tabs.length; i++) {
    // Aggiungere la class active ai titoli
    var elementTab = document.getElementsByClassName("tabs-container__element");

    if (i === n - 1) {
      fetchJSONFile("/../../assets/ajax/tab" + n + ".json", function (data) {
        if (data) {
          var paragraph = document.getElementById("tab-text");

          var textArray = _toConsumableArray(data["item"].content);

          var text = document.createTextNode(textArray);
          paragraph.innerHTML = "";
          paragraph.appendChild(text);
        }
      });
      elementTab[i].classList.add("active");
    } else {
      elementTab[i].classList.remove("active");
    }
  }
};

showTab(1);
showTitleTab();
var cookie = document.getElementById("cookie");

var closeCookie = function closeCookie() {
  cookie.classList.add("deactive");
  setTimeout(function () {
    cookie.style.display = "none";
  }, 300);
};

var navbar = document.getElementById("navbar");
var navbarPosition = navbar.offsetTop;

window.onscroll = function (e) {
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

var index = 1;

var showSlide = function showSlide(n) {
  var slides = document.getElementsByClassName("large-hero__slide");
  var counter = document.getElementsByClassName("counter__element"); // SLIDES

  if (n > slides.length) {
    index = 1;
  } else if (n < 1) {
    index = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    if (i === index - 1 && slides[index - 1]) {
      slides[index - 1].style.display = "block";
    }
  } // COUNTER


  for (var _i = 0; _i < counter.length; _i++) {
    if (index - 1 === _i) {
      counter[_i].classList.add("active");
    } else {
      counter[_i].classList.remove("active");
    }
  }
};

var counterSlide = function counterSlide(n) {
  console.log();
  showSlide(index = n);
};

var plusSlide = function plusSlide(n) {
  showSlide(index += n);
};

var lessSlide = function lessSlide(n) {
  showSlide(index += n);
};

showSlide(index);
//# sourceMappingURL=scripts.js.map

const titleTabs = document.getElementsByClassName("tab-title");
const tabs = document.getElementsByClassName("tabs-container__element");

const fetchJSONFile = (path, callback) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        const data = JSON.parse(httpRequest.responseText);
        if (callback) {
          callback(data);
        }
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
};

const showTitleTab = () => {
  for (let i = 0; i < titleTabs.length; i++) {
    fetchJSONFile("/../../assets/ajax/tab" + (i + 1) + ".json", (data) => {
      if (data) {
        var title = document.getElementById("tab-title" + (i + 1));
        const textArray = data["item"].title;
        var text = document.createTextNode(textArray);

        title.innerHTML = "";
        title.appendChild(text);
      }
    });
  }
};
const showTab = (n) => {
  for (let i = 0; i < tabs.length; i++) {
    // Aggiungere la class active ai titoli
    const elementTab = document.getElementsByClassName(
      "tabs-container__element"
    );
    if (i === n - 1) {
      fetchJSONFile("/../../assets/ajax/tab" + n + ".json", (data) => {
        if (data) {
          var paragraph = document.getElementById("tab-text");

          const textArray = [...data["item"].content];
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

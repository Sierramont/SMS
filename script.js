var selected;

function freeSelected() {
  document.getElementById("free-selector").innerText = "I Accepted the Rules";
  selected = "free";
  document.getElementsByClassName("continue-btn").item(0).style.cssText = `background-color: white;
  color: black !important;
  position: relative;
  bottom: 20px;
  border: 0px;
  border-radius: 50px;
  width: 20%;
  height: 50px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 0.5em;`
}
function correctlyPlaceElements() {
  document.getElementById("plans").style.cssText =
    "top: " + (screen.availHeight * 2).toString() + "px;";
  for (let i = 0; i < document.getElementsByClassName("plan-box").length; i++) {
    document.getElementsByClassName("plan-box").item(i).style.cssText =
      "height: " + (screen.availHeight - 394).toString() + "px;";
  }
    for (let i = 0; i < document.getElementsByClassName("selector").length; i++) {
    document.getElementsByClassName("selector").item(i).style.cssText =
      "top: " + (screen.availHeight - 744).toString() + "px;";
  }
  document.getElementsByClassName("down").item(0).style.cssText = "top: " + (screen.availHeight - 317) + "px;"
}

function continueBtnClick() {
  if(!selected) return;
  if(selected == "free") {
    window.open("https://discord.gg/zxFDjyy")
  }
}

function toPlans() {
  location
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    correctlyPlaceElements();
    setInterval(() => {
      correctlyPlaceElements();
    }, 2000)
  },
  false
);

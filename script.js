const container = document.querySelector(".container");
const button = document.createElement("button");
const gridInfo = document.createElement("h2");

const gameInfoContainer = document.querySelector(".game-info");

button.textContent = "New Grid";
gameInfoContainer.appendChild(button);

button.addEventListener("click", getNumberOfDivs);
function insertXDivsInContainer(number) {

  for (let i = 0; i < number*number; i++) {
    const div = document.createElement("div");
    div.style.flex = `1 0 calc(100% / ${number})`;
    container.appendChild(div);
  }
}

function changeGameInfo(number) {
  const gridInfo = document.createElement("h2");
  gridInfo.innerText = `${number} * ${number}`
  gameInfoContainer.appendChild(gridInfo);

}
function getNumberOfDivs() {
  const number = prompt("Enter number of columns or rows between 1 and 100");
  container.innerHTML = "";
  if (number < 1) {
    alert("Too few divs");
  }
  if (number > 100) {
    alert("Too many divs");
  } else {
    insertXDivsInContainer(number);
    changeGameInfo(number);
  }

}

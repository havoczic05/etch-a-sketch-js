const container = document.querySelector(".container");
const button = document.createElement("button");
const gridInfo = document.createElement("h2");


const gameInfoContainer = document.querySelector(".game-info");

button.textContent = "New Grid";
gameInfoContainer.appendChild(button);
gameInfoContainer.appendChild(gridInfo);

button.addEventListener("click", getNumberOfDivs);
function insertXDivsInContainer(number) {

  for (let i = 0; i < number * number; i++) {
    const div = document.createElement("div");
    div.style.flex = `1 0 calc(100% / ${number})`;
    div.addEventListener("mouseover", () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      div.style.backgroundColor = randomColor;
    });
    container.appendChild(div);
  }
}

function changeGameInfo(number) {
  const gridInfo = document.querySelector("h2");
  if (number == null) {
    gridInfo.innerText = "You have to write a number";
  } else {
    gridInfo.innerText = `${number} * ${number}`
  }


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

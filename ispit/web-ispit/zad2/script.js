function checkSolved() {
  let numUnsolved = 9;
  for (let i = 1; i <= 9; i++) {
    /** @type {HTMLDivElement} */
    const tile = document.querySelector(`.tile:nth-child(${i})`);
    if (parseInt(tile.id) === i) {
      tile.classList.add("solved");
      tile.onclick = null;
      numUnsolved -= 1;
    }
    console.log(numUnsolved);
    if (numUnsolved === 0) {
      const gameContainer = document.querySelector(".game-container");
      gameContainer.classList.add("hidden");
      gameContainer.classList.remove("game-container");
      document.getElementById("msgGameOver").classList.remove("hidden");
    }
  }
}

/**
 * @param {HTMLDivElement} frst
 * @param {HTMLDivElement} scnd
 */
function swapTiles(frst, scnd) {
  const counter = document.getElementById("counter");
  counter.textContent = parseInt(counter.textContent) + 1;

  const tmp = frst.id;
  frst.id = scnd.id;
  scnd.id = tmp;

  frst.textContent = frst.id;
  scnd.textContent = scnd.id;
}

let selected = null;

for (const tile of document.querySelectorAll(".tile")) {
  tile.id = tile.textContent;
  tile.onclick = function () {
    if (selected === null) {
      tile.classList.add("selected");
      selected = tile;
    } else if (tile !== selected) {
      swapTiles(tile, selected);
      selected.classList.remove("selected");
      selected = null;
      checkSolved();
    }
  };
}

checkSolved();

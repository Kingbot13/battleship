

const dom = (player1, computer, playerBoard, computerBoard, grid, ai, el) => {
  const display = document.getElementById("display");
  display.append(
    grid(playerBoard.board.length),
    grid(computerBoard.board.length)
  );
  // WARNING: potential bug could arise here if number of display children changes
  const grid1 = display.firstChild;
  const grid2 = display.lastChild;
  for (let i = 0; i < grid1.childNodes.length; i++) {
    grid1.childNodes[i].classList.add("player-grid");
  }
  for (let i = 0; i < grid2.childNodes.length; i++) {
    grid2.childNodes[i].classList.add("computer-grid");
  }

  const directionBtn = document.getElementById("direction");
  directionBtn.addEventListener("click", () => {
    directionBtn.textContent === "Horizontal"
      ? (directionBtn.textContent = "Vertical")
      : (directionBtn.textContent = "Horizontal");
  });
  // grab all player 1 squares for computer to select
  let nodelist = document.querySelectorAll("div.player-grid");
  // create copy that can be mutated
  let listCopy = [];
  for (let i = 0; i < nodelist.length; i++) {
    listCopy.push(nodelist[i]);
  }
  if (!player1.isTurn && !computer.isTurn) {
    player1.isTurn = true;
  }
  let playerShips = 0;
  let computerShips = 0;
  document.addEventListener("click", el);
};

export default dom;

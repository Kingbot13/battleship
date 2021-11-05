import grid from './grid-gen';

const dom = (() => {
  const display = document.getElementById("display");
  display.append(
    grid(100),
    grid(100)
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
  return {grid1, grid2, directionBtn, display}
})();

export default dom;

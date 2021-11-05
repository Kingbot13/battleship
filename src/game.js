const game = (playerBoard, computerBoard, player1, computer, ai, playerShips, computerShips, directionBtn, grid1, grid2) => {

  // wait until ships are placed before continuing
  const shipList = [
    computerBoard.carrier,
    computerBoard.battleship,
    computerBoard.destroyer,
    computerBoard.submarine,
    computerBoard.patrol,
  ];
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
   document.addEventListener("click", function el(e) {
     if (
       e.target &&
       e.target.classList.contains("player-grid") &&
       playerShips < 5
     ) {
       switch (playerShips) {
         case 0:
           playerBoard.placeShip(
             directionBtn.textContent.toLowerCase(),
             parseInt(e.target.dataset.id),
             playerBoard.carrier
           );
           playerShips++;
           break;
         case 1:
           playerBoard.placeShip(
             directionBtn.textContent.toLowerCase(),
             parseInt(e.target.dataset.id),
             playerBoard.battleship
           );
           playerShips++;
           break;
         case 2:
           playerBoard.placeShip(
             directionBtn.textContent.toLowerCase(),
             parseInt(e.target.dataset.id),
             playerBoard.destroyer
           );
           playerShips++;
           break;
         case 3:
           playerBoard.placeShip(
             directionBtn.textContent.toLowerCase(),
             parseInt(e.target.dataset.id),
             playerBoard.submarine
           );
           playerShips++;
           break;
         case 4:
           playerBoard.placeShip(
             directionBtn.textContent.toLowerCase(),
             parseInt(e.target.dataset.id),
             playerBoard.patrol
           );
           playerShips++;
   
           break;
   
         default:
           throw new Error("Switch error");
       }
       for (let i = 0; i < grid1.childNodes.length; i++) {
         if (playerBoard.board[i] !== "") {
           grid1.childNodes[i].classList.add("ship");
         }
       }
       // randomly place ships for computer player
       if (computerShips < 5 && playerShips === 5) {
         // NOTE: run more tests on legalPlacement as ships are overlapping
         while (computerShips < 5) {
           try {
             let boardCopy = computerBoard.board.filter((square) => square === "");
             // randomly decide direction
             let computerDirection =
               Math.random() >= 0.5 ? "horizontal" : "vertical";
             let location = ai(0, boardCopy.length);
             if (
               computerBoard.legalPlacement(
                 boardCopy,
                 location,
                 computerDirection,
                 shipList[computerShips].health.length
               )
             ) {
               computerBoard.placeShip(
                 computerDirection,
                 location,
                 shipList[computerShips]
               );
               computerShips++;
             }
           } catch (err) {
             console.log(err);
             continue;
           }
         }
         for (let i = 0; i < grid2.childNodes.length; i++) {
           // temporarily display positions of computer ships for testing
           if (computerBoard.board[i] !== "") {
             grid2.childNodes[i].classList.add("ship");
           }
         }
       }
     } else {
       if (
         e.target &&
         e.target.classList.contains("computer-grid") &&
         player1.isTurn
       ) {
         computerBoard.receiveAttack(e.target.dataset.id);
         if (e.target.classList.contains("ship")) {
           e.target.classList.toggle("hit");
         } else {
           e.target.classList.toggle("miss");
         }
         if (computerBoard.shipsSunk()) {
           alert("player wins!");
           // document.removeEventListener("click", el);
         }
         player1.isTurn = false;
         computer.isTurn = true;
         // grab random square and simulate click, then remove square from array
         let i = ai(0, listCopy.length);
         listCopy[i].click();
         listCopy.splice(i, 1);
         console.log(computerBoard.shipsSunk());
         console.log("carrier", computerBoard.carrier.isSunk());
       } else if (
         e.target &&
         e.target.classList.contains("player-grid") &&
         computer.isTurn
       ) {
         playerBoard.receiveAttack(e.target.dataset.id);
         if (playerBoard.board[e.target.dataset.id] === "shot") {
           e.target.classList.toggle("miss");
         } else {
           e.target.classList.toggle("hit");
         }
         if (playerBoard.shipsSunk()) {
           alert("computer wins!");
           // document.removeEventListener("click", el);
         }
         player1.isTurn = true;
         computer.isTurn = false;
       } else {
         throw new Error("something wrong with event listener");
       }
     }
   })
};

export default game;

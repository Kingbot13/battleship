const gameBoard = (shipFunc, name) => {
    // gameboard places ships at coordinates
    // use array to create board
    const board = [];
    for (let i = 0; i < 100; i++) {
        board.push('');
    };
    const ships = {
        carrier : shipFunc(5),
        battleship : shipFunc(4),
        destroyer : shipFunc(3),
        submarine : shipFunc(3),
        patrol : shipFunc(2),
    };
    return {board, name, ships};
};

export default gameBoard;
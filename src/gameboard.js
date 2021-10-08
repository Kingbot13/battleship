const gameBoard = () => {
    // gameboard places ships at coordinates
    // use array to create board
    const board = [];
    for (let i = 0; i < 100; i++) {
        board.push('');
    };
    return {board};
};

export default gameBoard;
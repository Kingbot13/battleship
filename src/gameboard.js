import ship from './ship';

const gameBoard = (name) => {
    // gameboard places ships at coordinates
    // use array to create board
    const board = [];
    for (let i = 0; i < 100; i++) {
        board.push('');
    };
    const carrier = ship(5);
    const battleship = ship(4);
    const destroyer = ship(3);
    const submarine = ship(3);
    const patrol = ship(2);
    return {board, name, carrier, battleship, destroyer, submarine, patrol};
};

export default gameBoard;
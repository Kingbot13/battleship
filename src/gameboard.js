import ship from './ship';

const gameBoard = (name) => {
    const board = [];
    for (let i = 0; i < 100; i++) {
        board.push('');
    };
    const carrier = ship(5);
    const battleship = ship(4);
    const destroyer = ship(3);
    const submarine = ship(3);
    const patrol = ship(2);
    const placeShip = (direction, coordinate, ship) => {
        let marker;
        switch (ship) {
            case carrier:
                marker = 'c';
                break;
            case battleship:
                marker = 'b';
                break;
            case destroyer:
                marker = 'd';
                break;
            case submarine:
                marker = 's';
                break;
            case patrol:
                marker = 'p';
                break;
        
            default:
                break;
        };
        if (direction === 'horizontal') {
            for (let i = 0; i < ship.health.length; i++) {
                board.splice(coordinate + i, 1, marker)
            }
        }
    }
    return {board, name, carrier, battleship, destroyer, submarine, patrol};
};

export default gameBoard;
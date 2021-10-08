function ship(length){
    const health = [];
    // fill health array
    for (let i = 0; i < length; i++) {
        health.push("");
    };
    const hit = (num) => {
        return health.splice(num - 1, 1, "x")
    }
    const isSunk = () => {

    }
    return {health, hit(), isSunk()};
};
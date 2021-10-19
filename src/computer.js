const computer = (min, max, callback) => {
    return callback(Math.floor(Math.random() * (max - min + 1)) + 1);
}

export default computer;
const computer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

export default computer;
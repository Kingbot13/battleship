const gridGen = (num) => {
    const container = document.createElement('div');
    container.classList.add('grid-container');
    for(let i = 0; i < num; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid-item');
        grid.dataset.id = i;
        container.appendChild(grid);

    };
    return container;
};

export default gridGen;

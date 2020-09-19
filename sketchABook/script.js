
//let gridSizeButton = document.getElementById('gridSizeButton');

let gridContainer = document.getElementById('gridContainer');

createGrid(16);

gridSizeButton.addEventListener('click', function (e) {

    console.log(e);
    resetGrid();
    createGrid(getGridSize());

});

gridResetButton.addEventListener('click', function (e) {

    let gridSize = gridContainer.style.gridTemplateColumns.match(/^\d+|\d+\b|\d+(?=\w)/g);
    resetGrid();
    createGrid(gridSize[0]);

});

gridColorBlackButton.addEventListener('click', function (e) {

    eventListenerElementBlack();

});

gridColorRandomButton.addEventListener('click', function (e) {

    eventListenerElementRandom();
    
});

function getGridSize(){
    
    createGrid();

    do{
        gridSize = prompt(`Insira o tamanho do grid, de 20 a 120`);
    }while (gridSize < 20 || gridSize > 120)

    return gridSize;

}

function createGrid(gridSize){

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    createdGridElemnents(gridSize);

}

function createdGridElemnents(gridSize){

    gridSize *= gridSize;

    for( i=0; i < gridSize; i++ ) {

        let div = document.createElement('div');
        div.classList.add('gridElement');
        gridContainer.appendChild(div);

    };

    eventListenerElementBlack();

}

function eventListenerElementBlack(){
    
    let gridElementListener = document.querySelectorAll('.gridElement');

    gridElementListener.forEach(element => {

        element.addEventListener('mouseover', function (e) {

            element.style.backgroundColor = `black`;

        });
   
    });

}

function eventListenerElementRandom(){
    
    let gridElementListener = document.querySelectorAll('.gridElement');

    gridElementListener.forEach(element => {

        element.addEventListener('mouseover', function (e) {

            element.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;;

        });
   
    });

}

//

function random255(){

    return (Math.random()*255)+1;
}

function resetGrid(){

    let gridElementListener = document.querySelectorAll('.gridElement');

    gridElementListener.forEach(element => {

        gridContainer.removeChild(element);

    });
}

//grid-template-rows:    repeat(4, 1fr);
//grid-template-columns: repeat(3, 1fr);
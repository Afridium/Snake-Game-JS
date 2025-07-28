console.log("Js File Linked Successfully");

const blockSize = 25;
const col = 40;
const row = 25;
let boardSize;
let ctx;

//making of snake
let snakeX = 5*blockSize;
let snakeY = 5*blockSize;

//makign of foood
let foodX;
let foodY;

window.onload = function () {
    boardSize = document.getElementById('canvasSize');
    boardSize.height = blockSize * row;
    boardSize.width = blockSize * col;
    ctx = boardSize.getContext('2d');
    foodPostion();
    update();
}

function update() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, blockSize * col, blockSize * row);

    //snake
    ctx.fillStyle = 'yellow';
    ctx.fillRect(snakeX,snakeY,blockSize,blockSize);

    //food
    ctx.fillStyle = 'blue';
    ctx.fillRect(foodX,foodY,blockSize,blockSize);
}

function foodPostion(){
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}
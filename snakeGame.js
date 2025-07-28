console.log("Js File Linked Successfully");

const blockSize = 25;
const col = 40;
const row = 25;
let boardSize;
let ctx;

//making of snake
let snakeX = 5 * blockSize;
let snakeY = 5 * blockSize;

//makign of foood
let foodX;
let foodY;

//giving snake velocity
let velocityX = 0;
let velocityY = 0;

//giving snake a body
let snakeBody = [];

window.onload = function () {
    boardSize = document.getElementById('canvasSize');
    boardSize.height = blockSize * row;
    boardSize.width = blockSize * col;
    ctx = boardSize.getContext('2d');
    foodPostion();
    document.addEventListener('keyup', makeItMove);
    setInterval(update, 1000 / 5);
}

function update() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, blockSize * col, blockSize * row);

    
    ctx.fillStyle = 'blue';
    ctx.fillRect(foodX, foodY, blockSize, blockSize);

    let oldHead = [snakeX, snakeY];

    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([oldHead]);
        foodPostion();
    }

    

    if (snakeBody.length > 0) {
        for (let i = snakeBody.length - 1; i > 0; i--) {
            snakeBody[i] = snakeBody[i - 1];
        }
        
        snakeBody[0] = oldHead;
    }

    //setting updated position
    //snake
    ctx.fillStyle = 'yellow';
    for (let i = 0; i < snakeBody.length; i++) {
        ctx.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize);

}

function foodPostion() {
    foodX = Math.floor(Math.random() * col) * blockSize;
    foodY = Math.floor(Math.random() * row) * blockSize;
}

function makeItMove(event) {
    if (event.code == 'ArrowUp' && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (event.code == 'ArrowDown' && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (event.code == 'ArrowLeft' && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (event.code == 'ArrowRight' && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}
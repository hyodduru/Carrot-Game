'use strict';
// 1. game field 의 height 와 width를 알아온다.
// 2. 그 범위 내에서 random한 x,y값을 구한다.
// 3. 그 위치값을 각각의 item에 부여한다. 

//Random Arrangement
const gameField = document.querySelector('.game-field');

const fieldHeight = gameField.getBoundingClientRect().height;
const fieldWidth = gameField.getBoundingClientRect().width;

function randomWidthNHeight(){
    const width = Math.random()*fieldWidth;
   const height = Math.random()*fieldHeight;
   return `${width}px, ${height}px`
}

function createCarrot(){

const carrot = document.createElement('span');
const carrotImg = document.createElement('img');
        
        
carrotImg.setAttribute('src', 'carrot/img/carrot.png');
carrot.setAttribute('class', 'carrot');
carrot.style.transform = `translate(${randomWidthNHeight()})`
        
carrot.appendChild(carrotImg)
gameField.appendChild(carrot)

return carrot;}

for(let i = 0; i<10; i++){
    createCarrot();
}


function createBug(){
    const bug = document.createElement('span');
const bugImg = document.createElement('img');



bugImg.setAttribute('src', 'carrot/img/bug.png');
bug.setAttribute('class', 'bug');
bug.style.transform = `translate(${randomWidthNHeight()})`

bug.appendChild(bugImg)
gameField.appendChild(bug)

return bug;
}


for(let i = 0; i<7; i++){
    createBug();
}




//Timer
//const 















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




//playing 모드일 때, 아닐 때 구분해서 이벤트해주기 

let playing = false;

const startBtn = document.querySelector('.start-btn');
const timer = document.querySelector('.timer');

function startGame(){
    playing = true;
}

function stopGame(){
    playing = false;
}


function handleStartBtn(){
    if(!playing){
        startBtn.innerHTML = `<i class="fas fa-stop"></i>`
        playing = true;
      
    }else{    
        startBtn.innerHTML = `<i class="fas fa-play"></i>`;     
        playing = false; 
    }
}


function setTimer(){  
        let sec = 10;
    setInterval(()=>{
        if(sec>=0&&playing){
        timer.innerHTML = `0:${sec}`;
        sec--; }else{
            sec = 10; 
            return          
        }        
    }, 1000)
    }  


 

//replay btn

const replayBtn = document.querySelector('.replay-btn');
const popUp = document.querySelector('.pop-up');

replayBtn.addEventListener('click',()=>{
    location.reload();
})

startBtn.addEventListener('click',handleStartBtn)


setTimer();



function createItems(){ 
        
        for(let i = 0; i<10; i++){
            createCarrot();
        }
        
        for(let i = 0; i<7; i++){
            createBug();
        }
}
//start버튼을 누름으로써 item들의 등장. 

createItems();
gameField.classList.add('hidden')

startBtn.addEventListener('click',()=>{
    gameField.classList.remove('hidden')
})












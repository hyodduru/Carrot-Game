
// 1. game field 의 height 와 width를 알아온다.
// 2. 그 범위 내에서 random한 x,y값을 구한다.
// 3. 그 위치값을 각각의 item에 부여한다. 


//Create Items with Random Arrangement
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
carrot.setAttribute('data-id', 'carrot')
carrot.style.transform = `translate(${randomWidthNHeight()})`
        
carrot.appendChild(carrotImg)
gameField.appendChild(carrot)

return carrot;}



function createBug(){
    const bug = document.createElement('span');
const bugImg = document.createElement('img');



bugImg.setAttribute('src', 'carrot/img/bug.png');
bug.setAttribute('class', 'bug');
bug.setAttribute('data-id', 'bug');
bug.style.transform = `translate(${randomWidthNHeight()})`

bug.appendChild(bugImg)
gameField.appendChild(bug)

return bug;
}


function createItems(){ 
        
    for(let i = 0; i<10; i++){
        createCarrot();
    }
    
    for(let i = 0; i<7; i++){
        createBug();
    }
}



//playing 모드일 때, 아닐 때 구분해서 이벤트해주기 
let playing = false;


const replayBtn = document.querySelector('.replay-btn');
const startBtn = document.querySelector('.start-btn');
const timer = document.querySelector('.timer');
const count = document.querySelector('.count');
const popUp = document.querySelector('.pop-up');
const popUpMsg = document.querySelector('.pop-up-msg');


const bg = document.querySelector('.bg');
const alertBg = document.querySelector('.alert');
const bugPullBg = document.querySelector('.bug_pull');
const carrotPullBg = document.querySelector('.carrot_pull');
const gameWinBg = document.querySelector('.game_win');

function startGame(){
    playing = true;
    popUp.classList.add('hidden');
    bg.play();
    }

function stopGame(){
    startBtn.innerHTML = `<i class="fas fa-stop"></i>`; 
    playing = false;
    popUp.classList.remove('hidden');
    bg.pause();

}


function handleStartBtn(){
    if(!playing){
        playing = true;     
      
    }else {    
        startBtn.innerHTML = `<i class="fas fa-play"></i>`;     
        stopGame();
        popUpMsg.innerHTML = `Replay❓`;
        alertBg.play();
    }
}


function setTimer(){  
        let sec = 10;
    setInterval(()=>{
        if(sec>0&&playing)
        {timer.innerHTML = `0:${sec}`;
        sec--; }
        else if(sec==0)
        {stopGame();
        popUpMsg.innerHTML = 'You Lost💩';
        timer.innerHTML = `0:0`
        sec = 10; 
        return} 
        }        
    , 1000)
    }  


window.onload = function(){
        let reloading = sessionStorage.getItem("reloading");
        if(reloading){
            sessionStorage.removeItem('reloading');
            startGame();
            createItems();
            gameField.classList.remove('hidden')
        }
    }
   
function reloadP(){
        sessionStorage.setItem('reloading','true');
        document.location.reload();
    }
      




gameField.addEventListener('click',(event)=>{
    if(event.target.parentNode.dataset.id=='carrot'){
     const carrot = event.target.parentNode;
     carrot.remove();
     carrotPullBg.play();
     
    count.innerHTML = parseInt(count.innerHTML)-1;  
    if(count.innerHTML==0){
        stopGame();
        popUpMsg.innerHTML = 'You Won🎉'
        gameWinBg.play();
        }  
    }})

gameField.addEventListener('click',(event)=>{
    if(event.target.parentNode.dataset.id=='bug'){
      stopGame();
      bugPullBg.play();
      popUpMsg.innerHTML = `You Lost💩`
    }
})

startBtn.addEventListener('click', handleStartBtn)

startBtn.addEventListener('click',()=>{
    if(playing){reloadP();}
 })

replayBtn.addEventListener('click',()=>{
    reloadP();   
})

setTimer();









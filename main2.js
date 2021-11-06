
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




//playing 모드일 때, 아닐 때 구분해서 이벤트해주기 
let playing = false;


const replayBtn = document.querySelector('.replay-btn');
const startBtn = document.querySelector('.start-btn');

const timer = document.querySelector('.timer');
const count = document.querySelector('.count');
const popUp = document.querySelector('.pop-up');
const popUpMsg = document.querySelector('.pop-up-msg');


function startGame(){
    playing = true;
    popUp.classList.add('hidden');
    
    
}

function stopGame(){
    
    playing = false;
    popUp.classList.remove('hidden');
}







function handleStartBtn(){
    if(!playing){
        startBtn.innerHTML = `<i class="fas fa-stop"></i>`
        playing = true;
      
    }else {    
        startBtn.innerHTML = `<i class="fas fa-play"></i>`;     
       stopGame();
        popUpMsg.innerHTML = `Replay❓`;
        playing =false;

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






// playing mode일 때,
// 1. 당근 click 시 없어지기
// -> 당근 값을 가져오기 -> click event 실행시키기
// 2. 딩근 click시 counter 숫자 1씩 줄어들기
// -> counter 값을 가져오기 -> 당근 click event-> counter inner Text -1 
// 3. 벌레를 누를 시 playing =false 로 변경, replay pop창 뜨기 
// if 벌레 click => playing = false, popup hidden class remove, innerText change



gameField.addEventListener('click',(event)=>{
    if(event.target.parentNode.dataset.id=='carrot'){
     const carrot = event.target.parentNode;
     carrot.remove();
     
    count.innerHTML = parseInt(count.innerHTML)-1;  
    if(count.innerHTML==0){
        stopGame();
        popUpMsg.innerHTML = 'You Won🎉'
        }  
    }})

gameField.addEventListener('click',(event)=>{
    if(event.target.parentNode.dataset.id=='bug'){
      stopGame();
      popUpMsg.innerHTML = `You Lost💩`
    }
})


//handle pop up
// 1. stop btn click => replay pop up
// 2. setTimer return이 되었을 때 => lost pop up
// 3. 벌레를 click 했을 때 => lost pop up
// 4. setTimer 실행 중 당근을 다 잡았을 때 => won pop up
 
















function createItems(){ 
        
        for(let i = 0; i<10; i++){
            createCarrot();
        }
        
        for(let i = 0; i<7; i++){
            createBug();
        }
}
//start버튼을 누름으로써 item들의 등장. 



setTimer();
// createItems();

// gameField.classList.add('hidden')



startBtn.addEventListener('click',handleStartBtn);

startBtn.addEventListener('click',()=>{
     //gameField.classList.remove('hidden')
    if(playing){ reloadP();}
    handleStartBtn();
 })



replayBtn.addEventListener('click',()=>{

    reloadP();
   
   
})

//window.onload = startGame();
//window.onload = createItems();
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



// createItems => start 버튼을 누름으로써 등장.
// createItems => replay 버튼을 누름으로써 reload. playing 모드 이면서 
// replay => game mode start로 돌아가고 싶은 것...! 
// reload 되고 나서 startGame() 자동실행  





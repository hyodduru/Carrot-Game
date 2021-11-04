'use strict';
const carrot = document.querySelectorAll('.carrot');
const bug = document.querySelectorAll('.bug');

const carrots =  Array.from(carrot);
const bugs =  Array.from(bug);

let carrotsNBugs = carrots.concat(bugs)

const randomIndex = Math.floor(Math.random()*carrotsNBugs.length);


function shuffleArray(carrotsNBugs) {
    for (let i = carrotsNBugs.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random()*carrotsNBugs.length);
        [carrotsNBugs[i], carrotsNBugs[randomIndex]] = [carrotsNBugs[randomIndex], carrotsNBugs[i]];
    }
    return carrotsNBugs
}


console.log(shuffleArray(carrotsNBugs));


console.log(carrotsNBugs[0].outerHTML)

const imgArray = carrotsNBugs.map(item =>{
     return item.outerHTML
 })










const gameField = document.querySelector('.game-field');



console.log(carrotsNBugs[randomIndex].outerHTML)



gameField.innerHTML = imgArray
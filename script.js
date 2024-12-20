// const sum = (x,y) => {
//     console.log(x+y);

// }
// const sum = (x,y) => {
//     return x + y;
// }
// let result = sum(x,y)
// console.log(result+5)

// let pTag = document.querySelector("p");
// pTag.innerHTML = "Hello kub";
// pTag.style.color = "red"
// pTag.style.backgroundColor = "Grey"
// let button = document.querySelector("button");
// let body = document.querySelector("body");

let pTag = document.querySelector("#Re")



function changeRock () {
    Bot = Math.floor(Math.random()*3);
    console.log(Bot)
    if (Bot ==0) {
         pTag.innerHTML = "You win! Bot choose:scissor"
    } else if (Bot == 1) { 
        pTag.innerHTML = "You lose! Bot choose:Paper"
        }
        else if (Bot == 2) {
            pTag.innerHTML = "You Tie! Bot choose:Rock"}
    }
function changePaper () {
        Bot = Math.floor(Math.random()*3);
        console.log(Bot)
        if (Bot ==0) {
             pTag.innerHTML = "You lose! Bot choose:scissor"
             
        } else if (Bot == 1) { 
            pTag.innerHTML = "You Tie! Bot choose:Paper"
            }
            else if (Bot == 2) { pTag.innerHTML = "You win! Bot choose:Rock"}
        }
function changeScissor () {
        Bot = Math.floor(Math.random()*3);
        console.log(Bot)
        if (Bot ==0) {
             pTag.innerHTML = "You tie! Bot choose:scissor"
        } else if (Bot == 1) { 
            pTag.innerHTML = "You win! Bot choose:Paper"
            }
          else if (Bot == 2) {pTag.innerHTML = "You lose! Bot choose:Rock"}
        }

//    pTag.innerHTML = "You lose! Bot choose:Paper"


pTag.innerHTML = "You lose Bot choose:scissor"
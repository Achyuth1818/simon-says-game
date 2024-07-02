//creating two arrays to store the color sequnces of user
let gameSeq=[];
let userSeq=[];
//creating array of colors
let btns= ["brown", "blue", "yellow", "red"];
//initially game startted = false
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
//keypress is the keyboard event 
document.addEventListener("keypress",function(){
if(started==false){
started = true;
//as game gets started we called level to increase
levelUp();
}
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash"); 
},250);
}
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
  btn.classList.remove("userflash"); 
  },250);
  }
  function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level : ${level}`;
    let randomIndx = Math.floor(Math.random()*3);
    let ranColor = btns[randomIndx];
    let randBtn =document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    

    
    }
    function checkAns(idx){
if(userSeq[idx]==gameSeq[idx]){
  if(userSeq.length==gameSeq.length){
  setTimeout(levelUp,250);
  }
}else{
 h2.innerHTML=`Game over! Your Score = <b>${level}</b> <br> press any key to restart`;
 document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
  document.querySelector("body").style.backgroundColor="white";
},150);
 reset();
}

    }

function btnPress(){
let btn = this;
userFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started =false;
  gameSeq=[];
  userSeq=[];
  level=0;
}


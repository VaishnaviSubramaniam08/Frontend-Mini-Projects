const btn=document.getElementById("btn");
const scoredisplay=document.getElementById("score");
let score=0;
btn.addEventListener("click",()=>{
    score++;
    scoredisplay.innerText=score;
});
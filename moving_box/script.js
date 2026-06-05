const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");
let x=50;
let y=50;
let dx=3;
let dy=2;
let size=50;
function animate(){
    ctx.clearRect(0,0,400,400);
    ctx.fillStyle="blue";
    ctx.fillRect(x,y,size,size);
    x+=dx;
    y+=dy;
    if(x+size>400 || x<0){
        dx=-dx;
    }
    if(y+size>400 || y<0){
        dy=-dy;
    }
    requestAnimationFrame(animate);
}
animate();
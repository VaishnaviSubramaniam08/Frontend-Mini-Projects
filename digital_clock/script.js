const time=document.getElementById("time");
const date=document.getElementById("date");
const themeBtn=document.getElementById("themeBtn");

function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    hours=hours.toString().padStart(2,"0");
    minutes=minutes.toString().padStart(2,"0");
    seconds=seconds.toString().padStart(2,"0");
    time.innerText=`${hours}:${minutes}:${seconds}`;
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day=days[now.getDay()];
    const month=days[now.getMonth()];
    const todayDate=now.getDate();
    date.innerText=`${day},${month} ${todayDate}`;
}setInterval(updateClock,1000);

updateClock();
themebtn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
});

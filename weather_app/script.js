// 8831f77058c61eb4a47954892a140993
const cityInput=document.getElementById("cityInput");
const searchBtn=document.getElementById("searchBtn");
const cityName=document.getElementById("cityName");
const weatherIcon=document.getElementById("weatherIcon");
const temperature=document.getElementById("temperature");
const description=document.getElementById("description");
const api_key="8831f77058c61eb4a47954892a140993";
searchBtn.addEventListener("click",function(){
    const city=cityInput.value;
    getWeather(city);
});
async function getWeather(city){
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
        const response=await fetch(url);
        console.log(response);
        const data=await response.json();
        console.log(data);
        cityName.innerText=data.name;
        weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        temperature.innerText=`${data.main.temp} °C`;
        description.innerText=data.weather[0].description;
    }catch(error){
        alert("City Not found");
    }
}
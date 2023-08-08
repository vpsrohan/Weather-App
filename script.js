const apiKey="54c8d6d6f24fbb26bcab85c0e02e29b5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchName=document.querySelector(".seatch input")
const searchBtn=document.querySelector(".seatch button")


async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


    



}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchName.value);
});



const apikey = "1bb535d19e40d434ca34d97f00b8b1c9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherimggs = document.querySelector(".weathericon");
async function weathercondition(city){
    const response = await fetch (apiurl + city + `&appid=${apikey}`);
    var weatherdata = await response.json()
    document.querySelector(".cityname").innerHTML = weatherdata.name ;
    document.querySelector(".temp").innerHTML = Math.round(weatherdata.main.temp) + "°C";
    document.querySelector(".humidpercent").innerHTML = weatherdata.main.humidity + "%";
    document.querySelector(".winds").innerHTML = weatherdata.wind.speed + " km/hr";
    if(weatherdata.weather[0].main == "Clouds"){
        weatherimggs.src="images/clouds.png";

    }
    else if(weatherdata.weather[0].main == "Clear"){
        weatherimggs.src="images/clear.png";

    }
    else if(weatherdata.weather[0].main == "Drizzle"){
        weatherimggs.src="images/drizzle.png";

    }
    else if(weatherdata.weather[0].main == "Mist"){
        weatherimggs.src="images/mist.png";

    }
    else if(weatherdata.weather[0].main == "Rain"){
        weatherimggs.src="images/rain.png";

    }
    else if(weatherdata.weather[0].main == "Snow"){
        weatherimggs.src="images/snow.png";

    }
    document.querySelector(".display").style.display = "block";
}
searchbtn.addEventListener("click", ()=>{
    const city = searchinput.value.trim();
   
    weathercondition(city);
});
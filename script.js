let name = "alice"



window.getWeather = function () {
    
    
    let cityName = document.querySelector("#cityName").value;
    let API_KEY = 'e0f99c494c2ce394a18cc2fd3f100543'
    let weatherIcon = document.querySelector(".weatherIcon");


    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(function  (response) {
            // handle success
            console.log(response.data);
            document.querySelector(".temp").innerHTML = `${Math.round(response.data.main.temp)}°C`
            document.querySelector(".city").innerHTML = `${response.data.name}`
            document.querySelector(".humidity").innerHTML = `${response.data.main.humidity}%`
            document.querySelector(".wind").innerHTML = `${response.data.wind.speed} km/h`
            document.querySelector("#result").style.display = "none";
            document.querySelector(".weather").style.display = "block";

            if (response.data.weather[0].main == "Clouds") {
                weatherIcon.src = "Img/clouds.png";
            } else if (response.data.weather[0].main == "Rain") {
                weatherIcon.src = "Img/rain.png";
            } else if (response.data.weather[0].main == "Drizzle") {
                weatherIcon.src = "Img/drizzle.png";
            } else if (response.data.weather[0].main == "Mist") {
                weatherIcon.src = "Img/mist.png";
            } else {
                weatherIcon.src = "Img/clear.png";
            }

        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#result").style.display = "block";
            document.querySelector(".weather").style.display = "none";

        })

}

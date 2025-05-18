const apiKey = "5d99e9bfececd312d170442a05849217";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    0;

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rainy.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/cloudi.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/storm.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

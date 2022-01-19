const inputData = document.querySelector("input");
const heading = document.querySelector("h1");
const humidity = document.querySelector(".hum");
const country = document.querySelector(".con");
const pressure = document.querySelector(".pressure");
const btn = document.querySelector(".btn");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const weatherDesc = document.querySelector(".weather-desc");
const windDir = document.querySelector(".wind-dir");
const feel = document.querySelector(".feel");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const windSpeed = document.querySelector(".wind-speed");

btn.addEventListener("click", (e) => {
  getData(inputData.value);
});

async function getData(value) {
  await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${value},&APPID=e4b4a0dd0cf97affcea9131537ba61eb`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      city.textContent = data.name;
      temp.textContent = Math.floor(data.main.temp - 273.15) + "°C" + "|";
      feel.textContent = Math.floor(data.main.feels_like - 273.15) + "°C";
      min.textContent = Math.floor(data.main.temp_min - 273.15) + "°C";
      max.textContent = Math.floor(data.main.temp_max - 273.15) + "°C";
      weatherDesc.textContent = data.weather[0].description;
      windDir.textContent = data.wind.deg;
      windSpeed.textContent = data.wind.speed;
      humidity.textContent = data.main.humidity;
      pressure.textContent = data.main.pressure;
      country.textContent = data.sys.country;
      console.log(data.coord.lon);
    })
    .catch((err) => {
      throw err;
    });
}

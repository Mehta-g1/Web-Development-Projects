const api_key = "ffe1755afa4e31e09db7c87a39f99237";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input")
const btn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")

async function chackWeather(city) {
    const responce = await fetch(api_url + city + `&appid=${api_key}`)
    let data = await responce.json()

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    // data.weather[0].main = "drizzle"
    if (data.weather[0].main == "Clouds") {
        weather_icon.src = "/weather app/images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weather_icon.src = "/weather app/images/clear.png"
    } else if (data.weather[0].main == "Rain") {
        weather_icon.src = "/weather app/images/rain.png"
    } else if (data.weather[0].main == "Drizzle") {
        weather_icon.src = "/weather app/images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weather_icon.src = "/weather app/images/mist.png"
    }
}

btn.addEventListener('click', () => {
    chackWeather(search.value)
})

// chackWeather()

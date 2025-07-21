const api_key = "ffe1755afa4e31e09db7c87a39f99237";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input")
const btn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")
let data;

// function convertUnixToLocal(unixTimestamp, offsetInSeconds) {
//     const indiaOffset = 19800; 
//     const indiaDate = new Date((unixTimestamp + indiaOffset) * 1000);
//     return indiaDate.toLocaleTimeString("en-IN", {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true 
//     });
// }

// function convertUnixToLocal(unixTimestamp, _timezoneOffsetSeconds) {
//     const IST_OFFSET_SECONDS = 19800; // +5:30
//     const istTimestamp = (unixTimestamp + IST_OFFSET_SECONDS) * 1000;
//     const istDate = new Date(istTimestamp);
//     return istDate.toLocaleTimeString("en-IN", {
//         hour: '2-digit',
//         minute: '2-digit',
//         // second: '2-digit',
//         hour12: true
//     });
// }

function convertUnixToLocal(unixTimestamp, _timezoneOffsetSeconds) {
    const istDate = new Date(unixTimestamp * 1000);

    return istDate.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata", // ✅ Force IST regardless of system location
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: true
    });
}

function capitalize(str) {
    if (!str) {
        return "";
    }
    return str.toLowerCase().split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

async function chackWeather(city) {
    const responce = await fetch(api_url + city + `&appid=${api_key}`)
    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        data = await responce.json()
        console.log(data)


        let sunrise = data.sys.sunrise
        let sunset = data.sys.sunset
        let timezone = data.timezone
        let current = data.dt;
        document.querySelector(".sunrise").innerHTML = convertUnixToLocal(sunrise, timezone).toUpperCase()
        document.querySelector(".sunset").innerHTML = convertUnixToLocal(sunset, timezone).toUpperCase()
        document.querySelector(".current").innerHTML = convertUnixToLocal(current, timezone).toUpperCase()



        document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".weather-data").innerHTML = '<i style="color:green">'+capitalize(data.weather[0].description)+"</i>"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        // data.weather[0].main = "drizzle"
        console.log(data.weather[0].main)
        if (data.weather[0].main.toLowerCase() == "clouds") {
            weather_icon.src = "./images/clouds.png"
        } else if (data.weather[0].main.toLowerCase() == "clear") {
            weather_icon.src = "./images/clear.png"
        } else if (data.weather[0].main.toLowerCase() == "rain") {
            weather_icon.src = "./images/rain.png"
        } else if (data.weather[0].main.toLowerCase() == "drizzle") {
            weather_icon.src = "./images/drizzle.png"
        } else if (data.weather[0].main.toLowerCase() == "mist") {
            weather_icon.src = "./images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

btn.addEventListener('click', () => {
    chackWeather(search.value)
})



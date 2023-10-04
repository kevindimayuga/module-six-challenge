// Create variables to store the elements that will be updated with the weather data
const currentWeather = document.querySelector('#current-weather');
const forecastWeather = document.querySelectorAll(".forecast-weather")
const searchBtn = document.querySelector('#search-button');
const cityResults = document.querySelector('#city-results');

// variable for the Open Weather Map API key
var apiKey = "560ac218f2ce0c713a569004aecf6d4d";
// variable to store the current city
var currentCity = "";
// variable to store the last city that was searched
var lastCity = "";

// this function will retrieve and display the current conditions for the city searched
function getCurrentCityWeatherData(searchedCity) {
    currentWeather.innerHTML = "";
    var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial";
    fetch(currentWeatherAPI)
        .then(function (res) {
            return res.json()
        }).then(function (data) {
            console.log(data)
            const currentHeader = document.createElement('h2');
            currentHeader.textContent = data.name + " - " + moment().format("MM/DD/YYYY");;
            currentWeather.append(currentHeader);
            const currentIcon = document.createElement('img');
            currentIcon.setAttribute('src', "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            currentIcon.setAttribute('alt', data.weather[0].description);
            currentWeather.append(currentIcon);
            const currentTemp = document.createElement("p");
            currentTemp.textContent = "Temp: " + Math.round(data.main.temp) + "°F"
            currentWeather.append(currentTemp)
            const currentWind = document.createElement("p");
            currentWind.textContent = "Wind: " + Math.round(data.wind.speed) + " MPH"
            currentWeather.append(currentWind)
            const currentHum = document.createElement("p");
            currentHum.textContent = "Humidity: " + Math.round(data.main.humidity) + "%"
            currentWeather.append(currentHum)
        })
};

// this function will retrieve and display the five-day forecast for the city searched
function getFiveDayForecast(searchedCity) {
    var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchedCity + "&appid=" + apiKey + "&units=imperial";
    fetch(currentWeatherAPI)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            for (let i = 0; i < forecastWeather.length; i++) {
                const index = i * 8 + 4;
                const forecastDate = data.list[index].dt
                forecastWeather[i].innerHTML = "";
                const forecastHeader = document.createElement('h3');
                forecastHeader.textContent = moment.unix(forecastDate).format("MM/DD/YYYY");
                forecastWeather[i].append(forecastHeader);
                const forecastIcon = document.createElement('img');
                forecastIcon.setAttribute('src', "http://openweathermap.org/img/w/" + data.list[index].weather[0].icon + ".png");
                forecastIcon.setAttribute('alt', data.list[index].weather[0].description);
                forecastWeather[i].append(forecastIcon);
                const forecastTemp = document.createElement("p");
                forecastTemp.textContent = "Temp: " + Math.round(data.list[index].main.temp) + "°F"
                forecastWeather[i].append(forecastTemp)
                const forecastWind = document.createElement("p");
                forecastWind.textContent = "Wind: " + Math.round(data.list[index].wind.speed) + " MPH"
                forecastWeather[i].append(forecastWind)
                const forecastHum = document.createElement("p");
                forecastHum.textContent = "Humidity: " + Math.round(data.list[index].main.humidity) + "%"
                forecastWeather[i].append(forecastHum)
            }
        })
};

// this function will save the city that was searched to local storage
function saveCity(searchedCity) {
    currentCity = searchedCity;
    if (currentCity !== "") {
        localStorage.setItem("lastCity", currentCity);
    }
};

// this function will render the city search history
function renderCitySearchHistory() {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        const lastCityElement = document.createElement('li');
        lastCityElement.textContent = lastCity;
        cityResults.appendChild(lastCityElement);
    };
};

// Add event listener to the search button
searchBtn.addEventListener('click', function () {
    var searchedCity = document.getElementById('search-city').value;
    getCurrentCityWeatherData(searchedCity);
    getFiveDayForecast(searchedCity);
    saveCity(searchedCity);
    renderCitySearchHistory();
});
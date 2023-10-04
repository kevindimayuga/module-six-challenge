// TODO: ACCEPTANCE CRITERIA:
// when search city, present current weather data

// city is added to search history

// current city data included city name, date, icon representation 
// of weather conditions, temperature, humidity, and wind speed

// five day forecast includes dates, weather icon, temp, humidity and wind speed

// when user clicks on city in search history, it presents 
// current and future conditions for that city again

const currentWeather = document.querySelector('#current-weather');
const searchBtn = document.querySelector('#search-button');

searchBtn.addEventListener('click', function () {
    var searchedCity = document.getElementById('search-city').value;
    getCurrentCityWeatherData(searchedCity);
});

// variable for the Open Weather Map API key
var apiKey = "560ac218f2ce0c713a569004aecf6d4d";
// variable to store the current city
var currentCity = "";
// variable to store the last city that was searched
var lastCity = "";

// this function will retrieve and display the current conditions for the city searched
function saveCity() {

};

// this function will retrieve and display the current conditions for the city searched
function getCurrentCityWeatherData(searchedCity) {
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

// this function will retrieve and display the current conditions for the city searched
function getFiveDayForecast() {

};

// this function will retrieve and display the current conditions for the city searched
function renderCitySearchHistory() {

};
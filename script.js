// TODO: ACCEPTANCE CRITERIA:
// when search city, present current weather data

// city is added to search history

// current city data included city name, date, icon representation 
// of weather conditions, temperature, humidity, and wind speed

// five day forecast includes dates, weather icon, temp, humidity and wind speed

// when user clicks on city in search history, it presents 
// current and future conditions for that city again

// variable for the Open Weather Map API key
var apiKey = "560ac218f2ce0c713a569004aecf6d4d";
// variable to store the current city
var currentCity = "";
// variable to store the last city that was searched
var lastCity = "";

// this function will retrieve and display the current conditions for the city searched
function saveCity () {

};

// this function will retrieve and display the current conditions for the city searched
function getCurrentCityWeatherData () {
    var searchedCity = document.getElementById('search-city').value;
    currentCity = document.getElementById('search-city').value;
    var currentWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey;
};

// this function will retrieve and display the current conditions for the city searched
function getFiveDayForecast () {

};

// this function will retrieve and display the current conditions for the city searched
function renderCitySearchHistory () {

};
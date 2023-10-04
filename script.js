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

// // this function will retrieve and display the current conditions for the city searched
// var currentConditions = (event) => {
//     // Get city name from search box
//     let city = document.getElementById('search-city').value;
//     currentCity = document.getElementById('search-city').value;
//     // Set the apiURL to fetch from API using weather search
//     let apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
//     fetch(apiURL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((response) => {
//             // Save city name to local storage (history)
//             saveCity(city);
//             $('#search-error').text("");
//             // Create icon for the current weather using Open Weather Maps
//             let currentWeatherIcon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
//             // // Offset UTC timezone - using moment.js
//             // let currentTimeUTC = response.dt;
//             // let currentTimeZoneOffset = response.timezone;
//             // let currentTimeZoneOffsetHours = currentTimeZoneOffset / 60 / 60;
//             // let currentMoment = moment.unix(currentTimeUTC).utc().utcOffset(currentTimeZoneOffsetHours);
//             // Render the searched cities list
//             renderCities();
//             // Obtain the 5 day forecast for the searched city
//             getFiveDayForecast(event);
//             // Set the header text to the found city name
//             $('#header-text').text(response.name);
//             // HTML for the results of search
//             let currentWeatherHTML = `
//             <h3>${response.name} ${currentMoment.format("(MM/DD/YY)")}<img src="${currentWeatherIcon}"></h3>
//             <ul class="list-unstyled">
//                 <li>Temperature: ${response.main.temp}&#8457;</li>
//                 <li>Humidity: ${response.main.humidity}%</li>
//                 <li>Wind Speed: ${response.wind.speed} mph</li>
//                 <li id="uvIndex">UV Index:</li>
//             </ul>`;
//             // Append the results to the DOM
//             $('#current-weather').html(currentWeatherHTML);
//             // Get the latitude and longitude for the UV search from Open Weather Maps API
//             let latitude = response.coord.lat;
//             let longitude = response.coord.lon;
//             let uvQueryURL = "api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&APPID=" + apiKey;
//             // API solution for Cross-origin resource sharing (CORS) error: https://cors-anywhere.herokuapp.com/
//             uvQueryURL = "https://cors-anywhere.herokuapp.com/" + uvQueryURL;
//             // Fetch the UV information and build the color display for the UV index
//             fetch(uvQueryURL)
//                 .then((response) => {
//                     return response.json();
//                 })
//                 .then((response) => {
//                     let uvIndex = response.value;
//                     $('#uvIndex').html(`UV Index: <span id="uvVal"> ${uvIndex}</span>`);
//                     if (uvIndex >= 0 && uvIndex < 3) {
//                         $('#uvVal').attr("class", "uv-favorable");
//                     } else if (uvIndex >= 3 && uvIndex < 8) {
//                         $('#uvVal').attr("class", "uv-moderate");
//                     } else if (uvIndex >= 8) {
//                         $('#uvVal').attr("class", "uv-severe");
//                     }
//                 });
//         })
// }

// Function to obtain the five day forecast and display to HTML
// var getFiveDayForecast = (event) => {
//     let city = $('#search-city').val();
//     // Set up URL for API search using forecast search
//     let apiURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
//     // Fetch from API
//     fetch(apiURL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((response) => {
//             // HTML template
//             let fiveDayForecastHTML = `
//         <h2>5-Day Forecast:</h2>
//         <div id="fiveDayForecastUl" class="d-inline-flex flex-wrap ">`;
//             // Loop over the 5 day forecast and build the template HTML using UTC offset and Open Weather Map icon
//             for (let i = 0; i < response.list.length; i++) {
//                 let dayData = response.list[i];
//                 let dayTimeUTC = dayData.dt;
//                 let timeZoneOffset = response.city.timezone;
//                 let timeZoneOffsetHours = timeZoneOffset / 60 / 60;
//                 let thisMoment = moment.unix(dayTimeUTC).utc().utcOffset(timeZoneOffsetHours);
//                 let iconURL = "https://openweathermap.org/img/w/" + dayData.weather[0].icon + ".png";
//                 // Only displaying mid-day forecasts
//                 if (thisMoment.format("HH:mm:ss") === "11:00:00" || thisMoment.format("HH:mm:ss") === "12:00:00" || thisMoment.format("HH:mm:ss") === "13:00:00") {
//                     fiveDayForecastHTML += `
//                 <div class="weather-card card m-2 p0">
//                     <ul class="list-unstyled p-3">
//                         <li>${thisMoment.format("MM/DD/YY")}</li>
//                         <li class="weather-icon"><img src="${iconURL}"></li>
//                         <li>Temp: ${dayData.main.temp}&#8457;</li>
//                         <br>
//                         <li>Humidity: ${dayData.main.humidity}%</li>
//                     </ul>
//                 </div>`;
//                 }
//             }
//             // Build the HTML template
//             fiveDayForecastHTML += `</div>`;
//             // Append the five-day forecast to the DOM
//             $('#five-day-forecast').html(fiveDayForecastHTML);
//         })
// }

// Function to save the city to localStorage
// var saveCity = (newCity) => {
//     let cityExists = false;
//     // Check if City exists in local storage
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage["cities" + i] === newCity) {
//             cityExists = true;
//             break;
//         }
//     }
//     // Save to localStorage if city is new
//     if (cityExists === false) {
//         localStorage.setItem('cities' + localStorage.length, newCity);
//     }
// }

// Render the list of searched cities
// var renderCities = () => {
//     $('#city-results').empty();
//     // If localStorage is empty
//     if (localStorage.length === 0) {
//         if (lastCity) {
//             $('#search-city').attr("value", lastCity);
//         } else {
//             $('#search-city').attr("value", "Austin");
//         }
//     } else {
//         // Build key of last city written to localStorage
//         let lastCityKey = "cities" + (localStorage.length - 1);
//         lastCity = localStorage.getItem(lastCityKey);
//         // Set search input to last city searched
//         $('#search-city').attr("value", lastCity);
//         // Append stored cities to page
//         for (let i = 0; i < localStorage.length; i++) {
//             let city = localStorage.getItem("cities" + i);
//             let cityEl;
//             // Set to lastCity if currentCity not set
//             if (currentCity === "") {
//                 currentCity = lastCity;
//             }
//             // Set button class to active for currentCity
//             if (city === currentCity) {
//                 cityEl = `<button type="button" class="list-group-item list-group-item-action active">${city}</button></li>`;
//             } else {
//                 cityEl = `<button type="button" class="list-group-item list-group-item-action">${city}</button></li>`;
//             }
//             // Append city to page
//             $('#city-results').prepend(cityEl);
//         }
//         // Add a "clear" button to page if there is a cities list
//         if (localStorage.length > 0) {
//             $('#clear-storage').html($('<a id="clear-storage" href="#">clear</a>'));
//         } else {
//             $('#clear-storage').html('');
//         }
//     }

// }

// New city search button event listener
// $('#search-button').on("click", (event) => {
//     event.preventDefault();
//     currentCity = $('#search-city').val();
//     currentConditions(event);
// });

// // Old searched cities buttons event listener
// $('#city-results').on("click", (event) => {
//     event.preventDefault();
//     $('#search-city').val(event.target.textContent);
//     currentCity = $('#search-city').val();
//     currentConditions(event);
// });

// // Clear old searched cities from localStorage event listener
// $("#clear-storage").on("click", (event) => {
//     localStorage.clear();
//     renderCities();
// });

// // Render the searched cities
// renderCities();

// // Get the current conditions (which also calls the five day forecast)
// currentConditions();
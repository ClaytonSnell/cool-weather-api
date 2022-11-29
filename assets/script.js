// var city = $("#city")
var apiKey = "27002608777aef815297df3644b96c02"

var url = `api.openweathermap.org/data/2.5/forecast?lat=40N&lon=111W&appid=${APIkey}`
 
// var geourl = "api.openweathermap.org/data/2.5/weather?q=SaltLake&appid=27002608777aef815297df3644b96c02"

var cityInput = document.querySelector('#cityInput');
var searchBtn = document.querySelector('#searchBtn');
var searchHistoryEl = document.querySelector("#searchHistory");


// get weather

searchBtn.addEventListener('click', function(event) {
  event.preventDefault();

  if (cityInput.value === "") {
    alert("City cannot be blank.");
  } else {
    document.querySelector("#cardRow").innerHTML = '';
    document.querySelector('#todayContainer').innerHTML = '';
    getWeather(cityInput.value);
    save();
    getButtons();
  }
});

keepButtons();

function save() {
  var new_city = document.querySelector('#cityInput').value;
  
  if(localStorage.getItem('Cities:') == null) {
    localStorage.setItem('Cities:', '[]');
  }
  var old_city = JSON.parse(localStorage.getItem('Cities:'));
  old_city.push(new_city);
  
  localStorage.setItem('Cities:', JSON.stringify(old_city));

  //Divider Line CSS
  var dividerEl = document.querySelector("#divider");
  dividerEl.className = "searchDivider";
}

//Creates buttons from storage
function getButtons() {
  
  if(localStorage.getItem('Cities:') != null) {
    var old_city = JSON.parse(localStorage.getItem('Cities:'));
    searchHistoryEl.innerHTML = "";

    for (var i = 0; i < old_city.length; i++) {
      var searchItemBtn = document.createElement('button');
      searchItemBtn.classList.add("searchItemBtn");
      var searchedCity = JSON.parse(localStorage.getItem('Cities:'))[i];
      searchItemBtn.innerHTML += searchedCity;
      searchHistoryEl.append(searchItemBtn); 
      renderWeather();
    }
  } 

  //Render city's forecast on click
  function renderWeather() {
    searchItemBtn.addEventListener("click", function(event) { 
      event.preventDefault();
      if (searchItemBtn) {
        document.querySelector("#cardRow").innerHTML = '';
        document.querySelector('#todayContainer').innerHTML = ''
        getWeather(event.target.innerHTML);
      }
    });
  }
}

//KEEP BUTTONS ON RELOAD
function keepButtons () {
  if (localStorage === "") {

  } else {
    getButtons();
  }
}


//GET WEATHER FUNCTION
function getWeather(city) {
    //Geo location to get latitude and longitude for "One Call"
    var cityLatLonURL ='https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + apiKey;
    fetch(cityLatLonURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        
        //Border Box CSS
        var todayContainerEl = document.querySelector('#todayContainer')
        todayContainerEl.className = "custom-today";

        //Display City Name
        var cityName = document.createElement('h3');
        var cityData = data[0].name;
        cityName.innerHTML = cityData;
        todayContainerEl.append(cityName);


      }); 
    }

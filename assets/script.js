var city = $("#city")
var APIkey = "27002608777aef815297df3644b96c02"

var url = `api.openweathermap.org/data/2.5/forecast?lat=40N&lon=111W&appid=${APIkey}`
 
var geourl = "api.openweathermap.org/data/2.5/weather?q=SaltLake&appid=27002608777aef815297df3644b96c02"

// test url = api.openweathermap.org/data/2.5/weather?q=SaltLake&appid=27002608777aef815297df3644b96c02


fetch(geourl).then(function(response) {
    return response.json()}
// }).then(function(data) {
//     console.log(data);
//     // todo udate the DOM
// })



// var searchBtn = document.querySelector('#searchBtn');
// var cityInput = document.querySelector('#cityInput');
// var searchHistoryEl = document.querySelector('searchHistory');

// searchBtn.addEventListener('click', function(event){
//     event.preventDefault();
//         if(cityInput.value===""){
//             alert("city cant be blank");
// } else {
//     document.querySelector("#cardRow") .innertext="";
//     document.querySelector("#todayBox") .innertext="";
//     getWeather(cityInput.value);
//     save();
//     getButtons();
//   }
// });

// function save() {

// }
//keep history btn on refresh function call

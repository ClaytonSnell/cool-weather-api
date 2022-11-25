var searchBtn = document.querySelector('#searchBtn');
var cityInput = document.querySelector('#cityInput');
var searchHistoryEl = document.querySelector('searchHistory');

searchBtn.addEventListener('click', function(event){
    event.preventDefault();
        if(cityInput.value===""){
            alert("city cant be blank");
} else {
    document.querySelector("#cardRow") .innertext="";
    document.querySelector("#todayBox") .innertext="";
    // weather api function call
    // local storage function call
    // create history button call
}
});
//keep history btn on refresh function call

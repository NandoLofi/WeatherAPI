let searchInput = document.querySelector('#searchbutton')
searchInput.addEventListener('onclick', searchweather)
const APIKEY = 'a8b3642ff5c063af749570c622d49d73'

function searchweather(location){
    $.ajax({
        url: `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${APIKEY}`})
        .then((data) => {

        }).catch
}
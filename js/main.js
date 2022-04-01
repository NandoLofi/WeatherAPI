let searchInput = document.querySelector('#searchbutton')
searchInput.addEventListener('click', searchweather)
const APIKEY = 'a8b3642ff5c063af749570c622d49d73'


function searchweather(){ 
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector(".searchbar").value}&appid=${APIKEY}`})
        .then((data) => {
            console.log(data)
            $('#cityinfo').text(data.name)
            $('#temp').text(data.main.temp)
            $('#feelslike').txt(data.main.feels_like)
        }).catch((error) =>{
            console.log(error)
        })
}

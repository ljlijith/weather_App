
const inputPlace = document.querySelector('.inputValue');
const searchBtn = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather');
const weatherImg = document.querySelector('.weather-icon');


let apiKey = 'faf7e3e655cd8790425b3c8b6791d43a';
let apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";




async function addingData(city) {
    // let url = await fetch(apiLink + city + `&appid=${apiKey}`);
    try {
        let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`);
        const apiData = await url.json();
        console.log(apiData);
        document.querySelector('.city').innerHTML = apiData.name;
        document.querySelector('.temp').innerHTML = Math.floor(apiData.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = apiData.main.humidity + ' %';
        document.querySelector('.wind').innerHTML = apiData.wind.speed + " km/h";


        function imageSet() {
            if(apiData.weather[0].main == "Rain") {
                weatherImg.src = "/img/raining.png";
            }
            else if (apiData.weather[0].main == "Cloudy") {
                weatherImg.src = "/img/cloudy.png";
            }
            else if (apiData.weather[0].main == "Clear") {
                weatherImg.src = "/img/clear.png";
            }
            else if (apiData.weather[0].main == "Snow") {
                weatherImg.src = "/img/snow.png";
            }
        }
        imageSet();

    } catch (err) {
        weatherImg.src="/img/sad-face.png";
        document.querySelector('.city').innerHTML="Not Found"
        document.querySelector('.temp').innerHTML = '';
        document.querySelector('.humidity').innerHTML ='' ;
        document.querySelector('.wind').innerHTML = '';
        console.log("Fetching Have Error");
    }

    

}


searchBtn.addEventListener('click', () => {
    if (inputPlace.value == 0) {
        alert(" Please Enter City Name!! ")
        weatherBox.classList.add('weather-box')
    }
    else {
        weatherBox.classList.remove('weather-box');

        addingData(inputPlace.value);
    }
});


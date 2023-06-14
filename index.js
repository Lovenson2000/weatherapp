

async function getWeatherData(city) {

    //Api Key & Link
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c57ff15771ed1f29cb70f3ad515e1d99&units=metric`;

    //Accessing data fields

    let cityName = document.getElementById("city-name");
    let temperature = document.getElementById("temperature");
    let windSpeed = document.getElementById("wind-speed");
    let description = document.getElementById("description");

    const response = await fetch(url);
    const data = await response.json();
    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    windSpeed.innerHTML = "Wind speed : " + Math.round(data.wind.speed) + "Km/H";
    description.innerHTML = data.weather[0].description;

}


const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {

    let inputField = document.getElementById("input-field").value;

    if(inputField.length === 0) {
        alert("Enter at valid city name");
        cityName.innerHTML = "";
    }
    getWeatherData(inputField); //Calling the function to display the data

    //Increasing the width of the data container onclick
    let container = document.querySelector(".container");
    container.style.height = "34rem";
    
})




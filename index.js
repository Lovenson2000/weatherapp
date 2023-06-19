

async function getWeatherData(city) {

    //Api Key & Link
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c57ff15771ed1f29cb70f3ad515e1d99&units=metric`;

    //Increasing the width of the data container onclick
    container.style.height = "34rem";

    //Accessing data fields
    let inputField = document.getElementById("input-field").value;
    let cityName = document.getElementById("city-name");
    let temperature = document.getElementById("temperature");
    let windSpeed = document.getElementById("wind-speed");
    let description = document.getElementById("description");

    const response = await fetch(url); //Fetching the api
    const data = await response.json();

    if (response.ok) {
    
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        windSpeed.innerHTML = "Wind speed : " + Math.round(data.wind.speed) + "Km/H";
        description.innerHTML = data.weather[0].description;

    } else if(!response.ok) {

        cityName.innerHTML = inputField + " not found";
        temperature.innerHTML = "No temperature to be shown";
        windSpeed.innerHTML = "Try with another city";
        description.innerHTML = "";
    }
}


const searchButton = document.getElementById("search-btn");
searchButton.addEventListener("click", () => {

    let inputField = document.getElementById("input-field").value;
    if (inputField.length === 0) {
        alert("Enter a valid city name");
    }

    getWeatherData(inputField); //Calling the function to display the data

})

//Handling not found city





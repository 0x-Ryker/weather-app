let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch weather details from api and display them

let getWeather = () => {
    let cityValue = cityRef.value;

    //If input field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }
  //If input field is NOT empty
  else {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric'

    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      })
  }
    
};

window.addEventListener("load", getWeather)
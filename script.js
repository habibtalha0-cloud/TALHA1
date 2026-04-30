function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "3af2fae87742502b95530cbe370060b1";

    if (city === "") {
        document.getElementById("result").innerHTML = "Please enter a city name!";
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if (data.cod === 200) {
            document.getElementById("result").innerHTML =
            `Temp: ${data.main.temp}°C <br>
            Weather: ${data.weather[0].description}`;
        }
         else {
            document.getElementById("result").innerHTML =
            `${data.message}`;
        }
    })
    .catch(error => {
        document.getElementById("result").innerHTML = "⚠️ Error fetching data"; 
    });
}
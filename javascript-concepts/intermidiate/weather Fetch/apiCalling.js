const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const getLocation = document.getElementById("get-btn");

const photo = document.getElementById("img-container");// Target a specific element for insertion
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityTime = document.getElementById("city-time");
const cityData = document.getElementById("city-data");
const stopButton = document.getElementById("timer-btn");

async function getAPIData(cityname) {
    const api = await fetch(`http://api.weatherapi.com/v1/current.json?key=ccee86e9ac8345b09ab172616240503&q=${cityname}&aqi=yes`);

    return await api.json();
}
searchBtn.addEventListener('click', async () => {
    const value = search.value;
    const result = await getAPIData(value);
    
    // console.log(result)
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}C & ${result.current.temp_f}F`;

    // LOCALSTORAGE in javascript
    localStorage.setItem("city-name", value);
    // location.reload();
    const localValue = localStorage.getItem("city-name");
    cityData.innerText = localValue;

    const imgElement = document.createElement("img");
      imgElement.src = result.current.condition.icon;
      imgElement.alt = "Image from API";  // Set an appropriate alt text for accessibility

      photo.innerHTML = ""; // Clear container to ensure only one image
      photo.appendChild(imgElement);
});

// GET cuurent location: lan, lon
function getLoc(position){
    const currentLoc = document.getElementById("current-loc");
    currentLoc.innerText = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
    // console.log(position);
};
function failedLoc(err) {
    console.log("There is something wrong", err);
};

getLocation.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(getLoc, failedLoc);
});

// Clock
function showTime() {
    const currentTime = new Date();
    const time = `Time: ${currentTime.toLocaleDateString()}, ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById("timer").innerText = time;
};
const interval = setInterval(showTime, 1000);
stopButton.addEventListener("click", () => {
    clearInterval(interval);
})

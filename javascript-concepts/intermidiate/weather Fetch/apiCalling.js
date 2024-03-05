const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityTime = document.getElementById("city-time");

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
    cityTemp.innerText = `${result.current.temp_c}C & ${result.current.temp_f}F`
});
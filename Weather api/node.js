const button = document.getElementById("search-button")
const input = document.getElementById("city-input")
const cityName = document.getElementById("city-name")
const cityWind = document.getElementById("city-wind")
const cityTemp = document.getElementById("city-temp")

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=b6fc8709a3a34eae8ae55738240812&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}

button.addEventListener("click", async () => {
     const value = input.value
     const result = await getData(value)
     cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
     cityWind.innerText = result.current.wind_kph
     cityTemp.innerText = result.current.temp_c
});

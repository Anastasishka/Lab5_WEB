const API_KEY = '140fd045e27d75adfadb663412a7f620';

async function getWeather(city = 'Kyiv') {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error(`Не вдалося отримати дані: ${response.status}`);
        }
        const data = await response.json();
        const weatherInfo = `
            <h3>Погода в ${city}</h3>
            <p>Температура: ${data.main.temp}°C</p>
            <p>Вологість: ${data.main.humidity}%</p>
            <p>Швидкість вітру: ${data.wind.speed} м/с</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        console.error("Помилка отримання даних про погоду:", error);
        document.getElementById('weather-info').textContent = "Не вдалося отримати дані про погоду.";
    }
}

document.getElementById('get-weather-btn').onclick = () => getWeather();

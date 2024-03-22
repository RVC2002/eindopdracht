import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Tilburg");
    const [error, setError] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState(null);
    const [weatherDescription, setWeatherDescription] = useState("");

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    const dutchCities = ['Aarle-Rixtel', 'Alkmaar', 'Almere']; // Slechts 3 steden voor demonstratiedoeleinden

    useEffect(() => {
        const fetchWeatherData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`
            );
            if (!response.ok) {
                throw new Error("Stad niet gevonden, kies een andere stad.");
            }
            const data = await response.json();
            setWeatherData(data);
            setError(null);
            setWeatherIcon(data.weather[0].icon);
            setWeatherDescription(data.weather[0].description);
        };

        fetchWeatherData().catch(error => setError(error.message));
    }, [city, apiKey]);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDateTime(now.toLocaleString());
        };

        const intervalId = setInterval(updateDateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="weather-container">
            <div className="weather-widget">
                <label htmlFor="city-select">Stad:</label>
                <select id="city-select" value={city} onChange={handleCityChange}>
                    {dutchCities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
                {error && <p>{error}</p>}
                {weatherData && (
                    <div>
                        <header>
                            <h2>Huidige weer in {weatherData.name}</h2>
                        </header>
                        <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Weather Icon" />
                        <p>Weer: {weatherDescription}</p>
                        <p>Temperatuur: {weatherData.main.temp} °C</p>
                        <p>Voelt aan als: {weatherData.main.feels_like} °C</p>
                        <p>Minimale temperatuur: {weatherData.main.temp_min} °C</p>
                        <p>Maximale temperatuur: {weatherData.main.temp_max} °C</p>
                        <p>Luchtvochtigheid: {weatherData.main.humidity}%</p>
                        <p>Huidige datum en tijd: {currentDateTime}</p>
                        <iframe
                            title="Weather Map"
                            width="600"
                            height="450"
                            src={`https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&zoom=10`}
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherComponent;

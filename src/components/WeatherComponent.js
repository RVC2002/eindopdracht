import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    const city = 'Tilburg';

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Er is een fout opgetreden, probeer het nog een keer:', error);
            }
        };

        fetchWeatherData();
    }, [city, apiKey]);

    return (
        <div>
            {weatherData && (
                <div>
                    <h2>Huidige weer in {weatherData.name}</h2>
                    <p>Temperatuur: {weatherData.main.temp} °C</p>
                    <p>Voelt aan als: {weatherData.main.feels_like} °C</p>
                    <p>Minimale temperatuur: {weatherData.main.temp_min} °C</p>
                    <p>Maximale temperatuur: {weatherData.main.temp_max} °C</p>
                    <p>Luchtvochtigheid: {weatherData.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;

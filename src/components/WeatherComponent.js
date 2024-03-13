import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Tilburg');
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    // Lijst van Nederlandse steden
    const dutchCities = [ 'Tilburg', 'Amsterdam', 'Rotterdam', 'Utrecht', 'Eindhoven', 'Groningen', 'Almere', 'Breda', 'Nijmegen', 'Apeldoorn', 'Enschede', 'Haarlem', 'Arnhem', 'Amersfoort', 'Zaanstad', 'Haarlemmermeer', 's-Hertogenbosch', 'Zwolle', 'Zoetermeer', 'Leiden', 'Leeuwarden', 'Maastricht', 'Dordrecht', 'Ede', 'Alphen aan den Rijn', 'Westland', 'Alkmaar', 'Emmen', 'Venlo', 'Delft', 'Deventer', 'Sittard-Geleen', 'Helmond', 'Hilversum', 'Oss', 'Amstelveen', 'Hoeksche Waard', 'Heerlen', 'Gouda', 'Purmerend', 'Roosendaal', 'Schiedam', 'Lelystad', 'Leidschendam-Voorburg', 'Almelo', 'Spijkenisse', 'Alphen-Chaam', 'Roermond', 'Noordoostpolder', 'Veldhoven', 'Etten-Leur', 'Uden', 'Veghel', 'Boxtel', 'Rijen', 'Cuijk', 'Dongen', 'Oisterwijk', 'Vught', 'Waalwijk', 'Valkenswaard', 'Best', 'Goirle', 'Heeze', 'Heesch', 'Kerkdriel', 'Made', 'Nuenen', 'Sint-Oedenrode', 'Someren', 'Waalre', 'Zevenbergen', 'Asten', 'Bladel', 'Boekel', 'Boxmeer', 'Deurne', 'Drunen', 'Geldrop', 'Gemert', 'Hilvarenbeek', 'Kaatsheuvel', 'Lith', 'Lithoijen', 'Mill en Sint Hubert', 'Nuland', 'Ravenstein', 'Reusel', 'Rijkevoort', 'Rijkevoort-De Walsert', 'Rosmalen', 'Rucphen', 'Schaijk', 'Sint-Michielsgestel', 'Son en Breugel', 'Steenbergen', 'Werkendam', 'Woudrichem', 'Zundert' ];

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

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div>
            <label>
                Stad:
                <select value={city} onChange={handleCityChange}>
                    {dutchCities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </label>l
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
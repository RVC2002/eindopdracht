import React, { useState, useEffect } from "react";

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Tilburg");
    const [error, setError] = useState(null);
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    const dutchCities = ['Aarle-Rixtel', 'Alkmaar', 'Almere', 'Almelo', 'Alphen aan den Rijn', 'Alphen-Chaam', 'Amersfoort', 'Amstelveen', 'Amsterdam', 'Apeldoorn', 'Arnhem', 'Assen', 'Asten', 'Baarle-Nassau', 'Barendrecht', 'Barneveld', 'Beek', 'Beek en Donk', 'Beesel', 'Berg en Dal', 'Bergen op Zoom', 'Bergeijk', 'Berkelland', 'Berkel-Enschot', 'Berlicum', 'Bernheze', 'Best', 'Beuningen', 'Bladel', 'Blaricum', 'Bloemendaal', 'Bodegraven-Reeuwijk', 'Boekel', 'Borger-Odoorn', 'Borne', 'Borsele', 'Boxmeer', 'Boxtel', 'Breda', 'Brielle', 'Bronckhorst', 'Brummen', 'Brunssum', 'Bunnik', 'Bunschoten', 'Buren', 'Capelle aan den IJssel', 'Castricum', 'Coevorden', 'Cranendonck', 'Cuijk', 'Culemborg', 'Dalfsen', 'Dantumadiel', 'De Bilt', 'De Fryske Marren', 'De Ronde Venen', 'De Wolden', 'Delft', 'Delfzijl', 'Den Haag', 'Den Helder', 'Deurne', 'Deventer', 'Diemen', 'Dinkelland', 'Doesburg', 'Doetinchem', 'Dongen', 'Dordrecht', 'Drechterland', 'Drimmelen', 'Dronten', 'Druten', 'Duiven', 'Echt-Susteren', 'Edam-Volendam', 'Ede', 'Eemnes', 'Eindhoven', 'Elburg', 'Emmen', 'Enkhuizen', 'Enschede', 'Epe', 'Ermelo', 'Etten-Leur', 'Geertruidenberg', 'Geldrop', 'Geldrop-Mierlo', 'Gemert', 'Gemert-Bakel', 'Gennep', 'Gilze', 'Gilze en Rijen', 'Goeree-Overflakkee', 'Goes', 'Goirle', 'Gooise Meren', 'Gorinchem', 'Gouda', 'Grave', 'Groningen', 'Gulpen-Wittem', 'Haaksbergen', 'Haaren', 'Haarlem', 'Haarlemmermeer', 'Halderberge', 'Hardenberg', 'Harderwijk', 'Hardinxveld-Giessendam', 'Harlingen', 'Hattem', 'Heemskerk', 'Heemstede', 'Heerde', 'Heerenveen', 'Heerhugowaard', 'Heerlen', 'Heesch', 'Heeze', 'Heeze-Leende', 'Heiloo', 'Hellendoorn', 'Hellevoetsluis', 'Helmond', 'Hendrik-Ido-Ambacht', 'Hengelo', 'Het Hogeland', 'Heumen', 'Heusden', 'Heusden', 'Hillegom', 'Hilvarenbeek', 'Hilversum', 'Hof van Twente', 'Hollands Kroon', 'Hoogeveen', 'Hoogezand-Sappemeer', 'Hoorn', 'Horst aan de Maas', 'Houten', 'Huizen', 'Hulst', 'IJsselstein', 'Kaag en Braassem', 'Kampen', 'Kapelle', 'Katwijk', 'Kerkrade', 'Koggenland', 'Krimpen aan den IJssel', 'Krimpenerwaard', 'Laarbeek', 'Landerd', 'Landgraaf', 'Landsmeer', 'Langedijk', 'Lansingerland', 'Laren', 'Leeuwarden', 'Leiden', 'Leiderdorp', 'Leidschendam-Voorburg', 'Lelystad', 'Leudal', 'Leusden', 'Lingewaard', 'Lisse', 'Lochem', 'Loon op Zand', 'Losser', 'Maasdriel', 'Maasgouw', 'Maassluis', 'Maastricht', 'Medemblik', 'Meierijstad', 'Meppel', 'Middelburg', 'Midden-Delfland', 'Midden-Drenthe', 'Midden-Groningen', 'Mill en Sint Hubert', 'Moerdijk', 'Molenlanden', 'Montferland', 'Montfoort', 'Mook en Middelaar', 'Neder-Betuwe', 'Nederweert', 'Nieuwegein', 'Nieuwkoop', 'Nijkerk', 'Nijmegen', 'Nissewaard', 'Noardeast-Fryslân', 'Noord-Beveland', 'Noordenveld', 'Noordoostpolder', 'Noordwijk', 'Noordwijkerhout', 'Nuenen', 'Nuenen, Gerwen en Nederwetten', 'Nunspeet', 'Nuth', 'Oegstgeest', 'Oirschot', 'Oisterwijk', 'Oldambt', 'Oldebroek', 'Oldenzaal', 'Olst-Wijhe', 'Ommen', 'Oost Gelre', 'Oosterhout', 'Ooststellingwerf', 'Oostzaan', 'Opmeer', 'Opsterland', 'Oss', 'Oude IJsselstreek', 'Ouder-Amstel', 'Oudewater', 'Overbetuwe', 'Papendrecht', 'Peel en Maas', 'Pekela', 'Pijnacker-Nootdorp', 'Purmerend', 'Putten', 'Raalte', 'Reimerswaal', 'Renkum', 'Renswoude', 'Reusel-De Mierden', 'Rheden', 'Rhenen', 'Ridderkerk', 'Rijssen-Holten', 'Rijswijk', 'Roerdalen', 'Roermond', 'Roosendaal', 'Rotterdam', 'Rozendaal', 'Rucphen', 'Schagen', 'Schaijk', 'Scherpenzeel', 'Schiedam', 'Schiermonnikoog', 'Schouwen-Duiveland', 'Simpelveld', 'Sint Anthonis', 'Sint-Michielsgestel', 'Sittard-Geleen', 'Sliedrecht', 'Sluis', 'Smallingerland', 'Soest', 'Someren', 'Son', 'Son en Breugel', 'Sprang-Capelle', 'Stadskanaal', 'Staphorst', 'Stede Broec', 'Steenbergen', 'Steenwijkerland', 'Stein', 'Stichtse Vecht', 'Súdwest-Fryslân', 'Terneuzen', 'Terschelling', 'Texel', 'Teylingen', 'Tholen', 'Tiel', 'Tietjerksteradeel', 'Tilburg', 'Tubbergen', 'Twenterand', 'Tynaarlo', 'Tytsjerksteradiel', 'Uden', 'Udenhout', 'Uitgeest', 'Uithoorn', 'Urk', 'Utrecht', 'Utrechtse Heuvelrug', 'Vaals', 'Valkenburg aan de Geul', 'Valkenswaard', 'Veendam', 'Veenendaal', 'Veere', 'Veghel', 'Veldhoven', 'Velsen', 'Venlo', 'Venray', 'Vianen', 'Vijfheerenlanden', 'Vlaardingen', 'Vlieland', 'Vlissingen', 'Voerendaal', 'Voorschoten', 'Voorst', 'Vught', 'Waadhoeke', 'Waalre', 'Waalwijk', 'Waardenburg', 'Waddinxveen', 'Wageningen', 'Wassenaar', 'Waterland', 'Weert', 'Weesp', 'Werkendam', 'West Betuwe', 'West Maas en Waal', 'Westerkwartier', 'Westerveld', 'Westervoort', 'Westerwolde', 'Westland', 'Weststellingwerf', 'Westvoorne', 'Wierden', 'Wijchen', 'Wijdemeren', 'Wijk bij Duurstede', 'Winterswijk', 'Woensdrecht', 'Woerden', 'Wormerland', 'Woudenberg', 'Woudrichem', 'Wijk en Aalburg', 'Zaanstad', 'Zaltbommel', 'Zandvoort', 'Zeeland', 'Zeewolde', 'Zeist', 'Zevenaar', 'Zevenbergen', 'Zuidplas', 'Zundert', 'Zutphen', 'Zwartewaterland', 'Zwijndrecht', 'Zwolle'
    ];

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                );
                if (!response.ok) {
                    throw new Error("Stad niet gevonden, kies een andere stad.");
                }
                const data = await response.json();
                setWeatherData(data);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWeatherData();
    }, [city, apiKey]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    useEffect(() => {
        console.log(document.getElementById("weather-widget"));
    }, []); // Voer deze effect alleen uit na de eerste render

    return (
        <div id="weather-widget"> {/* Voeg hier het id-attribuut toe */}
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

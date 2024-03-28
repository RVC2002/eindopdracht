import React, { useState } from 'react';

const ShareWeatherComponent = () => {
    const [weatherData, setWeatherData] = useState('');

    // Functie om het weerbericht te delen
    const shareWeather = (platform) => {
        // Hier kun je de logica toevoegen om het weerbericht te delen via sociale media of berichten-apps
        // Voor nu laten we gewoon een dialoogvenster zien met het gedeelde bericht
        alert(`Weerbericht gedeeld op ${platform}: ${weatherData}`);
    };

    return (
        <div className="share-inhoud"> {/* Voeg de navigatie-inhoud div hier toe */}

            <h2>Weerbericht Delen</h2>
            <input
                type="text"
                value={weatherData}
                onChange={(e) => setWeatherData(e.target.value)}
                placeholder="Voer hier uw gegevens in"
            />
            <div>
                <button onClick={() => shareWeather('Facebook')}>Deel op Facebook</button>
                <button onClick={() => shareWeather('Twitter')}>Deel op Twitter</button>
                <button onClick={() => shareWeather('Instagram')}>Deel op Instagram</button>
                <button onClick={() => shareWeather('Pinterest')}>Deel op Pinterest</button>
                <button onClick={() => shareWeather('LinkedIn')}>Deel op LinkedIn</button>
                <button onClick={() => shareWeather('Snapchat')}>Deel op Snapchat</button>
                <button onClick={() => shareWeather('TikTok')}>Deel op TikTok</button>
                {/* Voeg meer sociale media platforms toe indien nodig */}
            </div>
        </div>
    );
};

export default ShareWeatherComponent;

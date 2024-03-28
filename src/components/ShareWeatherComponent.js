import React, { useState } from 'react';

const ShareWeatherComponent = () => {
    const [weatherData, setWeatherData] = useState('');

    // Functie om het weerbericht te delen
    const shareWeather = (platform) => {
        // Hier kun je de logica toevoegen om het weerbericht te delen via sociale media of berichten-apps
        // Voor nu laten we gewoon een dialoogvenster zien met het gedeelde bericht
        alert(`Weerbericht gedeeld op ${platform}: ${weatherData}`);
    };

    // Functie om de hoogte van het tekstvak te vergroten
    const increaseBoxHeight = () => {
        const textBox = document.getElementById('my-text-box');
        if (textBox.scrollTop === textBox.scrollHeight - textBox.offsetHeight) {
            textBox.style.height = `${textBox.offsetHeight + 20}px`;
        }
    };

    return (
        <div className="share-inhoud">
            <h2>Weerbericht Delen</h2>
            <div className="input-container">
                <textarea
                    id="my-text-box"
                    value={weatherData}
                    onChange={(e) => setWeatherData(e.target.value)}
                    placeholder="Voer hier uw gegevens in"
                    style={{
                        width: '100%',
                        height: '100px',
                        maxWidth: '417px',
                        direction: 'ltr',
                        textAlign: 'start',
                        resize: 'none',
                        border: '2px solid #0df541' // Groene rand toegevoegd
                    }}
                    onInput={increaseBoxHeight}
                />
            </div>
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

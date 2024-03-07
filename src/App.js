import React from 'react';
import WeatherComponent from './components/WeatherComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* Voeg de WeatherComponent toe */}
                <WeatherComponent />
            </header>
        </div>
    );
}

export default App;

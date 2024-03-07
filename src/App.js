import React from 'react';
import WeatherComponent from './components/WeatherComponent';
import logo from './logo.svg';
import './App.css';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* Voeg de WeatherComponent toe */}
                <WeatherComponent />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;


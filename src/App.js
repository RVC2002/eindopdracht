import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherComponent from './components/WeatherComponent';
import HolidayComponent from './components/HolidayComponent';
import LoginComponent from './components/LoginComponent';
import { AuthProvider } from './gebruikersauthenticatiegegevens';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Switch>
                            <Route path="/weather" component={WeatherComponent} />
                            <Route path="/holidays" component={HolidayComponent} />
                            <Route path="/login" component={LoginComponent} />
                        </Switch>
                    </header>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
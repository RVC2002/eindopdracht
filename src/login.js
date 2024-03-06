import React, { useState } from 'react';
import { useAuth } from './gebruikersauthenticatiegegevens';
import { AuthProvider } from './gebruikersauthenticatiegegevens';
const LoginComponent = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Voer hier gegevens in om de gebruiker in te loggen
        login({ username, password });
    };

    return (
        <div>
            <input type="text" placeholder="Gebruikersnaam" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Wachtwoord" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default function App() {
    return (
        <AuthProvider>
            <LoginComponent />
        </AuthProvider>
    );
};
//test
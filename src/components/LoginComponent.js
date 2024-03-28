import React, { useState } from 'react';
import { useAuth } from './gebruikersauthenticatiegegevens'; // Importeer de useAuth hook

const LoginComponent = () => {
    const { login } = useAuth(); // Haal de login functie op via de useAuth hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
            // Eventuele andere logica na succesvol inloggen, bijv. doorsturen naar een andere pagina
        } catch (error) {
            console.error('Er is een fout opgetreden tijdens het inloggen:', error);
        }
    };

    return (
        <div className="login-inhoud"> {/* Voeg de navigatie-inhoud div hier toe */}
            <h2>Inloggen</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="E-mailadres" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Wachtwoord" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Inloggen</button>
            </form>
        </div>
    );
};

export default LoginComponent;

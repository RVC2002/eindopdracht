import React, { useState, useContext } from 'react';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        // Implementeer de gegevens voor inloggen en gebruikersgegevens opslaan
    };

    const logout = () => {
        // Implementeer de gegevens voor uitloggen en gebruikersgegevens verwijderen
    };

    const register = (userData) => {
        // Implementeer de gegevens voor registreren van een nieuwe gebruiker
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

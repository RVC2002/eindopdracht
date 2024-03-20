import React from 'react';
import { AuthProvider } from '../gebruikersauthenticatiegegevens'; // Voeg deze import toe

const App = () => {
    return (
        <AuthProvider>
            {/* Render de rest van je app */}
        </AuthProvider>
    );
};

export default App;

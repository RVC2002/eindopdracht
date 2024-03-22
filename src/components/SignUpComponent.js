import React, { useState } from 'react';

const SignUpComponent = () => {
    const [formData, setFormData] = useState({
        gebruikersnaam: '',
        email: '',
        wachtwoord: '',
        voornaam: '',
        achternaam: '',
        geboortedatum: '',
        telefoonnummer: '',
        adres: '',
        postcode: '',
        stad: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Voer hier logica uit om registratiegegevens te verwerken, bijvoorbeeld een API-aanroep naar de backend

        // Voeg hier formuliervalidatie toe voordat je de registratiegegevens verwerkt
        // Controleer of alle vereiste velden zijn ingevuld en of de gegevens geldig zijn

        console.log('Registratiegegevens:', formData);
    };

    return (
        <div>
            <h2>Registreren</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Gebruikersnaam:</label>
                    <input type="text" name="gebruikersnaam" value={formData.gebruikersnaam} onChange={handleInputChange} />
                </div>
                <div>
                    <label>E-mailadres:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Wachtwoord:</label>
                    <input type="password" name="wachtwoord" value={formData.wachtwoord} onChange={handleInputChange} />
                </div>
                {/* Voornaam */}
                <div>
                    <label>Voornaam:</label>
                    <input type="text" name="voornaam" value={formData.voornaam} onChange={handleInputChange} />
                </div>

                {/* Achternaam */}
                <div>
                    <label>Achternaam:</label>
                    <input type="text" name="achternaam" value={formData.achternaam} onChange={handleInputChange} />
                </div>

                {/* Geboortedatum */}
                <div>
                    <label>Geboortedatum:</label>
                    <input type="date" name="geboortedatum" value={formData.geboortedatum} onChange={handleInputChange} />
                </div>

                {/* Telefoonnummer */}
                <div>
                    <label>Telefoonnummer:</label>
                    <input type="tel" name="telefoonnummer" value={formData.telefoonnummer} onChange={handleInputChange} />
                </div>

                {/* Adres */}
                <div>
                    <label>Adres:</label>
                    <input type="text" name="adres" value={formData.adres} onChange={handleInputChange} />
                </div>

                {/* Postcode */}
                <div>
                    <label>Postcode:</label>
                    <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} />
                </div>

                {/* Stad */}
                <div>
                    <label>Stad:</label>
                    <input type="text" name="stad" value={formData.stad} onChange={handleInputChange} />
                </div>

                <button type="submit">Registreren</button>
            </form>
        </div>
    );
};

export default SignUpComponent;

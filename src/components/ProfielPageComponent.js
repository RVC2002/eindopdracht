import React, { useContext, useState } from 'react';
import { AuthContext } from './gebruikersauthenticatiegegevens';

const ProfielPageComponent = () => {
    // Gebruik de AuthContext om informatie over de ingelogde gebruiker op te halen
    const { user } = useContext(AuthContext);

    // Initialiseer een lokale staat voor de formuliergegevens, inclusief de profielfoto
    const [formData, setFormData] = useState({
        gebruikersnaam: user && user.gebruikersnaam,
        email: user && user.email,
        voornaam: user && user.voornaam,
        achternaam: user && user.achternaam,
        geboortedatum: user && user.geboortedatum,
        telefoonnummer: user && user.telefoonnummer,
        adres: user && user.adres,
        postcode: user && user.postcode,
        stad: user && user.stad,
        profielfoto: user && user.profielfoto,
    });

    // Functie om gebruikersgegevens bij te werken
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        // Voer hier de logica uit om gebruikersgegevens bij te werken, inclusief de profielfoto
    };

    // Functie om formuliergegevens bij te werken bij wijzigingen
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Functie om de profielfoto te wijzigen
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profielfoto: file });
    };

    // Functie om de profielfoto te verwijderen
    const handleRemovePhoto = () => {
        setFormData({ ...formData, profielfoto: null });
    };

    return (
        <div>
            <h1>Gebruikersprofiel</h1>
            <form onSubmit={handleUpdateProfile}>
                {/* Formulierelementen om gebruikersgegevens te bewerken */}
                <div>
                    <label>Gebruikersnaam:</label>
                    <input type="text" name="gebruikersnaam" value={formData.gebruikersnaam} onChange={handleInputChange} />
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Voornaam:</label>
                    <input type="text" name="voornaam" value={formData.voornaam} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Achternaam:</label>
                    <input type="text" name="achternaam" value={formData.achternaam} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Geboortedatum:</label>
                    <input type="date" name="geboortedatum" value={formData.geboortedatum} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Telefoonnummer:</label>
                    <input type="tel" name="telefoonnummer" value={formData.telefoonnummer} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Adres:</label>
                    <input type="text" name="adres" value={formData.adres} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Postcode:</label>
                    <input type="text" name="postcode" value={formData.postcode} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Stad:</label>
                    <input type="text" name="stad" value={formData.stad} onChange={handleInputChange} />
                </div>
                {/* Voeg de mogelijkheid toe om de profielfoto te wijzigen of te verwijderen */}
                <div>
                    <label>Profielfoto:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    {formData.profielfoto && (
                        <div>
                            <img
                                src={URL.createObjectURL(formData.profielfoto)}
                                alt="Profielfoto"
                                className="profile-image"
                                style={{ width: '150px', height: '150px' }}
                            />
                            <button type="button" onClick={handleRemovePhoto}>Verwijderen</button>
                        </div>
                    )}
                </div>
                <button type="submit">Profiel bijwerken</button>
            </form>
        </div>
    );
};

export default ProfielPageComponent;

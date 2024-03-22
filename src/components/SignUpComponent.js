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
        profielfoto: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, profielfoto: file });
    };

    const handleRemovePhoto = () => {
        setFormData({ ...formData, profielfoto: null });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Voer hier logica uit om registratiegegevens te verwerken, inclusief de profielfoto
        console.log('Registratiegegevens:', formData);
    };

    return (
        <div>
            <h2>Registreren</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Profielfoto:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                    {formData.profielfoto && (
                        <div>
                            <img
                                src={URL.createObjectURL(formData.profielfoto)}
                                alt="Profielfoto"
                                className="profile-image"
                                style={{ width: '150px', height: '150px' }} // Stel de breedte en hoogte van de afbeelding in
                            />
                            <button type="button" onClick={handleRemovePhoto}>Verwijderen</button>
                        </div>
                    )}
                </div>
                <div>
                    <label>Gebruikersnaam:</label>
                    <input type="text" name="gebruikersnaam" value={formData.gebruikersnaam} onChange={handleInputChange} />
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

                <button type="submit">Registreren</button>
            </form>
        </div>
    );
};

export default SignUpComponent;

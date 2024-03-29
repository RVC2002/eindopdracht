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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Voer hier logica uit om registratiegegevens te verwerken, inclusief de profielfoto
        console.log('Registratiegegevens:', formData);
    };

    return (
        <div className="registreren-inhoud"> {/* Voeg de navigatie-inhoud div hier toe */}

            <h2>Registreren</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Profielfoto:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="custom-file-input"
                        style={{
                            backgroundColor: '#0df541',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            fontSize: '10px'
                        }}
                    />
                    {/* Toon de profielfoto alleen als deze is geselecteerd */}
                    {formData.profielfoto && (
                        <div>
                            <img
                                src={URL.createObjectURL(formData.profielfoto)}
                                alt="Profielfoto"
                                className="profile-image"
                                style={{ width: '150px', height: '150px' }}
                            />
                        </div>
                    )}
                </div>
                {/* Gebruikersnaam */}
                <div>
                    <label>Gebruikersnaam:</label>
                    <input type="text" name="gebruikersnaam" value={formData.gebruikersnaam} onChange={handleInputChange} />
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
                    <input
                        type="date"
                        name="geboortedatum"
                        value={formData.geboortedatum}
                        onChange={handleInputChange}
                        className="green-input"
                    />
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
                {/* Button voor het verzenden van het formulier */}
                <button
                    type="submit"
                    className="custom-submit-button"
                    style={{
                        backgroundColor: '#0df541',
                        color: 'white',
                        padding: '3px 30px',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        fontSize: '16px'
                    }}
                >
                    Registreren
                </button>
            </form>
        </div>
    );
};

export default SignUpComponent;

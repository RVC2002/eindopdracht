fetch('https://api.datavortex.nl/testapp/users/authenticate', {
    method: 'POST',
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "testuser",
        "password": "testpassword"
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Er is een fout opgetreden bij het authenticeren van de gebruiker');
        }
        return response.json();
    })
    .then(data => {
        console.log('Ontvangen data:', data);
        // Voeg hier code toe om de ontvangen data te verwerken, inclusief het JWT-token
        console.log('JWT-token ontvangen:', data.jwt); // Voorbeeld: toegang tot het JWT-token
    })
    .catch(error => {
        console.error('Er is een fout opgetreden:', error);
    });
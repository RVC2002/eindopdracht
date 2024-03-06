fetch('URL_van_je_endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'eindopdracht:3A0QHhPmag2XQ02xb2U3'
    },
    body: JSON.stringify({ /* body_data */ })
})
    .then(response => response.json())
    .then(data => {
        // handle response data
    })
    .catch(error => {
        // handle errors
    });
import React, { useState, useEffect, useCallback } from 'react';

const HolidayComponent = () => {
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
    const selectedCountry = 'NL'; // Standaard land is Nederland

    // Define fetchHolidays with useCallback
    const fetchHolidays = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/${selectedCountry}`);
            const data = await response.json();

            // Voeg Oudjaarsdag (31 december) toe aan de lijst met vakanties als het land Nederland is
            const newHolidays = selectedCountry === 'NL' ? [...data, { name: 'Oudjaarsdag', date: `${selectedYear}-12-31` }] : data;

            // Vertaal de Engelse vakantienamen naar het Nederlands
            const translatedHolidays = newHolidays.map(holiday => ({
                ...holiday,
                name: translateHolidayName(holiday.name),
                date: formatDate(holiday.date)
            }));

            setHolidays(translatedHolidays);
        } catch (error) {
            setError('Er is een fout opgetreden bij het ophalen van de vakantiegegevens.');
        } finally {
            setLoading(false);
        }
    }, [selectedYear, selectedCountry]);

    useEffect(() => {
        const loadHolidays = (callback) => {
            fetchHolidays().then(() => callback()).catch(callback);
        };

        loadHolidays((error) => {
            if (error) {
                console.error('Er is een fout opgetreden tijdens het laden van de vakantiegegevens:', error);
            }
        });

    }, [fetchHolidays]);

    // Functie om vakantienamen te vertalen van Engels naar Nederlands
    const translateHolidayName = (englishName) => {
        // Voer hier vertalingen in voor Engelse vakantienamen naar het Nederlands
        switch (englishName) {
            case "New Year's Day":
                return 'Nieuwjaarsdag';
            case 'Good Friday':
                return 'Goede Vrijdag';
            case 'Easter Sunday':
                return 'Eerste Paasdag';
            case 'Easter Monday':
                return 'Tweede Paasdag';
            case "King's Day":
                return 'Koningsdag';
            case 'Liberation Day':
                return 'Bevrijdingsdag';
            case 'Ascension Day':
                return 'Hemelvaartsdag';
            case 'Pentecost':
                return 'Eerste Pinksterdag';
            case 'Whit Monday':
                return 'Tweede Pinksterdag';
            case 'Christmas Day':
                return 'Eerste Kerstdag';
            case "St. Stephen's Day":
                return 'Tweede Kerstdag';
            case 'New Year\'s Eve':
                return 'Oudjaarsdag'; // Vertaling voor Oudjaarsdag
            default:
                return englishName; // Als er geen vertaling beschikbaar is, behouden we de Engelse naam
        }
    };

    // Functie om de datum te formatteren op de Nederlandse manier
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('nl-NL');
    };

    return (
        <div>
            <h2>Vakanties Nederland</h2>
            <div>
                <label>Jaar:</label>
                <input type="number" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <ul>
                    {holidays.map((holiday, index) => (
                        <li key={index}>{holiday.name} - {holiday.date}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HolidayComponent;

import React, { useState, useEffect, useCallback } from 'react';

const HolidayComponent = () => {
    const [holidays, setHolidays] = useState([]);
    const apiKey = process.env.REACT_APP_HOLIDAY_API_KEY;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
    const [selectedCountry, setSelectedCountry] = useState('NL');

    // Define fetchHolidays with useCallback
    const fetchHolidays = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`https://holidayapi.com/v1/holidays?key=${apiKey}&country=${selectedCountry}&year=${selectedYear}`);
            const data = await response.json();
            setHolidays(data.holidays);
        } catch (error) {
            setError('Er is een fout opgetreden bij het ophalen van de vakantiegegevens.');
        } finally {
            setLoading(false);
        }
    }, [apiKey, selectedCountry, selectedYear]);

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

    return (
        <div>
            <h2>Vakanties</h2>
            <div>
                <label>Land:</label>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="NL">Nederland</option>
                </select>
            </div>
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
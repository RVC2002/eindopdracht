import React, { useState, useEffect } from 'react';

const HolidayComponent = () => {
    const [holidays, setHolidays] = useState([]);
    const apiKey = process.env.REACT_APP_HOLIDAY_API_KEY;
    const year = new Date().getFullYear();
    const country = 'NL';

    useEffect(() => {
        const fetchHolidays = async () => {
            try {
                const response = await fetch(`https://holidayapi.com/v1/holidays?key=${apiKey}&country=${country}&year=${year}`);
                const data = await response.json();
                setHolidays(data.holidays);
            } catch (error) {
                console.error('Er is een fout opgetreden bij het ophalen van de vakantiegegevens:', error);
            }
        };

        fetchHolidays();
    }, [apiKey, country, year]);

    return (
        <div>
            <h2>Vakanties in {country} ({year})</h2>
            <ul>
                {holidays.map((holiday, index) => (
                    <li key={index}>{holiday.name} - {holiday.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default HolidayComponent;

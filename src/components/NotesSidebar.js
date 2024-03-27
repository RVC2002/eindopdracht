import React, { useState } from 'react';

const NotesSidebar = () => {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleAddNote = () => {
        if (note.trim() !== '') {
            setNotes([...notes, note]);
            setNote('');
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#f0f0f0', padding: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2>Notities</h2>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Voeg hier een nieuwe notitie toe"
                    style={{ width: '100%', marginBottom: '10px' }}
                />
                <button onClick={handleAddNote}>Voeg toe</button>
            </div>
            <div style={{ overflowY: 'auto' }}>
                <h2>Weergegeven notities</h2>
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>
                            {note}
                            <button onClick={() => handleDeleteNote(index)}>Verwijder</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NotesSidebar;

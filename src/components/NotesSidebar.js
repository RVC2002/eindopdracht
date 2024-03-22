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
        <div style={{ width: '25%', height: '400px', backgroundColor: '#f0f0f0', padding: '50px' }}>
            <h2>Notities</h2>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Voeg hier een nieuwe notitie toe"
                style={{ width: '100%', height: '80%', marginBottom: '10px' }}
            />
            <button onClick={handleAddNote}>Voeg toe</button>
            <ul style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}
                        <button onClick={() => handleDeleteNote(index)}>Verwijder</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesSidebar;

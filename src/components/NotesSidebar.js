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
                <h2 style={{ marginRight: '400px', marginLeft: '6px' }}>Notities</h2>


                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Voeg hier een nieuwe notitie toe"
                    style={{ width: '100%', marginBottom: '10px', marginLeft: '6px' }}
                />
                <button onClick={handleAddNote} style={{ marginLeft: '6px', backgroundColor: '#0df541', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '15px', transition: 'background-color 0.3s' }}>Voeg toe</button>
            </div>
            <div style={{ overflowY: 'auto' }}>
                <h2 style={{ marginRight: '100px', marginLeft: '6px' }}>Weergegeven notities</h2>
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

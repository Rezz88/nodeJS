//Mods
const fs = require('fs');

//Body
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    //Check if notes array already has note of same title
    var duplicateNotes = notes.filter((note) => note.title === title);

    //If duplicateNotes is empyty, will push note
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes); 
        return note;
    }
};

//Command requests
var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => { 
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    
    return notes.length !== filteredNotes.length; 
};

var logNote = (note) => {
    console.log("---");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};


//Export functions to app.js
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
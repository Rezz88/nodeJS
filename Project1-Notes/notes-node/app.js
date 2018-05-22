//Mods
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

//Files
const notes = require("./notes.js");

//Body
const titleOptions = {
        discrible: "Title of note",
        demand: true,
        alias: "t"
};
const bodyOptions = {
        discrible: "-> Body of the note",
        demand: true,
        alias: "b"
};

const argv = yargs
    .command("add", "-> Add a new note", {
        title: titleOptions,
        body: bodyOptions,
    })
    .command("list", "-> List all notes")
    .command("read", "-> Read a note", {
        title: titleOptions,
    })
    .command("remove", "-> Remove a note", {
        title: titleOptions,
    })
    .help()
    .argv;
var command = argv._[0];

//Command options
if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note added...");
        notes.logNote(note);
    } else {
        console.log("---");
        console.log("Note title already exists! Try again.");
    };

} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note read...");
        notes.logNote(note);
    } else {
        console.log("Note not found!");
    };

} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Removed note` : `Note not found.`;
    console.log("---");
    console.log(message);

} else {
    console.log("Command not recognized!");
};

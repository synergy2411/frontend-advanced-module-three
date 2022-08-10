const fs = require("fs");
require("colors");

const loadNote = () => {
    try {
        const notesBuffer = fs.readFileSync("./notes.json")
        const notesString = notesBuffer.toString();
        return JSON.parse(notesString)
    } catch (err) {
        return []
    }
}

// const saveNote = (notes, flag) => {
//     fs.writeFileSync("./notes.json", JSON.stringify(notes))
//     console.log("TITLE : " + flag);
//     // flag === "ADDED" ? console.log("NOTE ADDED".green) : console.log("NOTE DELETED".green);
// }
const saveNote = (notes, cb) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    cb()
}

const addNote = (title, body) => {
    const notes = loadNote();
    const newNote = { title, body };
    const position = notes.findIndex(n => n.title === title)
    if (position >= 0) {
        console.log("Try again! Already exist.")
        return;
    }
    notes.push(newNote)
    // saveNote(notes, "ADDED");
    saveNote(notes, function () { console.log("TITLE : ADDED"); });
}

// read
const readNote = title => {
    const notes = loadNote();
    const foundNote = notes.find(n => n.title === title)
    if (foundNote) {
        console.log("Title : ", foundNote.title);
        console.log("Body : ", foundNote.body);
    } else {
        console.log("Uanlbel to find note title => " + title)
    }
}

// remove
const removeNote = title => {
    const notes = loadNote();
    const position = notes.findIndex(n => n.title === title)
    if (position >= 0) {
        // notes.splice(position, 1);
        const filteredNotes = notes.filter(n => n.title !== title)
        // saveNote(filteredNotes, "REMOVED")
        saveNote(filteredNotes, function () { console.log("TITLE : DELETED"); })
    } else {
        console.log("Unable to delete")
    }
}

// list
const listNotes = () => {
    loadNote().forEach(note => {
        console.log("____________");
        console.log("Title : ", note.title);
        console.log("Body : ", note.body);
    })
}

module.exports = {
    addNote,
    readNote,
    removeNote,
    listNotes
}
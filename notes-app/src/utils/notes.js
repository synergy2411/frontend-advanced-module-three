const fs = require("fs");
require("color");

const loadNote = () => {
    try {
        const notesBuffer = fs.readFileSync("./notes.json")
        const notesString = notesBuffer.toString();
        return JSON.parse(notesString)
    } catch (err) {
        return []
    }
}

const saveNote = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes))
    console.log("Saved");
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
    saveNote(notes);

}

module.exports = {
    addNote
}
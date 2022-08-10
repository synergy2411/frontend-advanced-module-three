const yargs = require("yargs");
const { addNote, readNote, removeNote, listNotes } = require("./utils/notes");

yargs.command({
    command: "add",
    description: "to add new note",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title to add new note"
        },
        body: {
            type: "string",
            demandOption: true,
            description: "body to add new title"
        }
    },
    handler: (args) => {
        const { title, body } = args;
        addNote(title, body)
    }

})

yargs.command({
    command: "read",
    description: "to read note based on title",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title to read one note"
        }
    },
    handler: (args) => {
        readNote(args.title)
    }
})

yargs.command({
    command: "remove",
    description: "to remove note based on title",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            description: "title to remove one note"
        }
    },
    handler: (args) => {
        removeNote(args.title)
    }
})

yargs.command({
    command: "list",
    description: "to list down all notes",
    handler: () => listNotes()
})

yargs.parse();
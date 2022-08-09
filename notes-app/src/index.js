const yargs = require("yargs");
const { addNote } = require("./utils/notes");

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


yargs.parse();
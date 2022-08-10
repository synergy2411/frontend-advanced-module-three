const { Schema, model } = require("mongoose")


const todoSchema = new Schema({
    label: String,
    status: String
})

const TodoModel = model("Todo", todoSchema)

module.exports = TodoModel;

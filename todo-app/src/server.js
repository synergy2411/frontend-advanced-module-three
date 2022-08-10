const express = require("express");
const cors = require("cors");
const app = express();
require("./db")
const TodoModel = require("./model/todo.model");

app.use(express.json());
app.use(cors());
const todos = [
    { id: "101", label: "renew car insurance", status: "done" },
    { id: "102", label: "pot new plants", status: "pending" },
    { id: "103", label: "buy new jeans", status: "done" }
];

app.get("/", (request, response, next) => {
    response.send({ message: "SUCCESS" })
    // response.send(`<h1>Hello World</h1>`)
})

app.get("/todos", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

// GET
app.get("/api/todos", async (req, res) => {
    try {
        const allTodos = await TodoModel.find()
        return res.send(allTodos)
    } catch (err) {
        console.log(err);
        return res.send({ err: "Something bad happened" })
    }
})

// POST
app.post("/api/todos", async (req, res) => {

    try {
        console.log(req.body);
        const todo = new TodoModel(req.body)
        const createdTodo = await todo.save()
        return res.send(createdTodo)
    } catch (err) {
        return res.send({ error: "Not created" })
    }
    // let todo = {
    //     id: "10" + (todos.length + 1),
    //     label: req.body.label,
    //     status: "pending"
    // }
    // todos.push(todo);
    // return res.send(todo)
})

// PATCH
app.patch("/api/todos/:todoId", (req, res) => {
    const position = todos.findIndex(t => t.id === req.params.todoId)
    if (position >= 0) {
        todos[position] = { ...todos[position], ...req.body }
        return res.send(todos[position])
    } else {
        return res.send({ error: "Unable to find todo" })
    }
})

// DELETE
app.delete("/api/todos/:todoId", (req, res) => {
    const position = todos.findIndex(todo => todo.id === req.params.todoId)
    if (position >= 0) {
        const todoToBeDeleted = todos[position]
        todos.splice(position, 1)
        return res.send(todoToBeDeleted)
    } else {
        return res.send({ error: "ID not found" })
    }
})

app.listen(3031, () => console.log("Server started at PORT : 3031"))
const express = require("express");

const app = express();

app.use(express.json());

const todos = [
    { id: "101", label: "renew car insurance", status: "done" },
    { id: "102", label: "pot new plants", status: "pending" },
    { id: "103", label: "buy new jeans", status: "done" }
];

app.get("/", (request, response, next) => {
    response.send({ message: "SUCCESS" })
    // response.send(`<h1>Hello World</h1>`)
})

// GET
app.get("/api/todos", (req, res) => {
    res.send(todos)
})

// POST
app.post("/api/todos", (req, res) => {
    let todo = {
        id: "10" + (todos.length + 1),
        label: req.body.label,
        status: "pending"
    }
    todos.push(todo);
    return res.send(todo)
})

// PATCH
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
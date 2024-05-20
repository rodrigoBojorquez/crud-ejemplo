import express from "express"

export const todosRouter = express.Router()

let todos = []

todosRouter.get("/", (req, res) => {
    res.status(200).send(todos)
})

todosRouter.post("/", (req, res) => {
    const  todo  = req.body
    console.log(todo)
    let formatedTodo = todo
    formatedTodo["id"] = todos.length + 1
    todos.push(formatedTodo)

    res.status(200).send("Todo agregado correctamente")
})

todosRouter.get("/:id", (req, res) => {
    const { id } = req.params
    const todo = todos.find(todo => todo.id === parseInt(id))

    if (!todo) {
        res.status(404).send("Todo inexistente")
    }

    res.status(200).send(todo)
})

todosRouter.put(`/:id`, (req, res)  => {
    const { id } = req.params
    const oldTodo = todos.find(todo => todo.id === parseInt(id))
    const todo  = req.body

    if (!oldTodo) {
        res.status(404).send("Todo inexistente")
    }

    todos[id] = todo

    res.status(200).send("Todo actualizado")
})

todosRouter.delete(`/:id`, (req, res) => {
    const { id } = req.params
    const existTodo = todos.find(todo => todo.id === parseInt(id))

    if (!existTodo) {
        res.status(404).send("Todo inexistente")
    }

    todos = todos.filter(todo => todo.id !== id)

    res.status(200).send("Todo eliminado")
})
import express from "express"
import { todosRouter } from "./routers/todos.route.js"

const app = express()
const port = process.env.PORT || 3000


// Middlewware para parsear a JSON
app.use(express.json())
app.use("/todos", todosRouter)


// endpoints
app.get("/", (req, res) => {
    res.status(200).send("Hola mundo")
})


app.listen(port, () => {
    console.log(`API escuchando http://localhost:${port}`)
})
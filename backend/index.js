const express = require("express")
const app = express()
const http = require("http")
const cors = require("cors")
const {Server} = require("socket.io")

app.use(cors())

const server = http.createServer(app)

const io =  new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("desconectado", () => {
        console.log("Usuario desconectado")
    })
})

server.listen(3001, () => {
    console.log(`Servidor corriendo en en el puerto ${3001}`)
})
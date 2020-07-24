const express = require("express")
const connection = require("./configs/Database")
const UserController = require("./controllers/UserController")
const Auth = require("./middlewares/Auth")
const User = require("./models/User")

const routes = new express.Router()

try {
    connection.authenticate().then(() => {
        console.log("Database connected")
    })
} catch (error) {
    console.log(`\n\nDeu ruim no banco\n\n ${error}`)
}

// Users
routes.get("/users", Auth, UserController.listUsers)
routes.get("/user/:id", Auth, UserController.findUser)
routes.post("/create-user", UserController.createUser)
routes.post("/update-user", Auth, UserController.updateUser)
routes.post("/delete-user", Auth, UserController.deleteUser)

// Authentication
routes.post("/authenticate", UserController.authenticate)


module.exports = routes
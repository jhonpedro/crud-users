const express = require("express")
const cors = require("cors")
const app = express()

require("dotenv").config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(require("./routes"))

app.listen(process.env.PORT || 3001, () => {
    console.log(`Running on ${process.env.PORT || 3001}`)
})
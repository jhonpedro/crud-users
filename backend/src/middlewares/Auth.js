const jwt = require("jsonwebtoken")

module.exports = function Auth (req, res, next) {
    try {
        const RawAuth = req.headers["authorization"]

        const token = RawAuth.split(" ")[1]

        jwt.verify(token, process.env.JWT_SECRET, (error, data) => {
            if (error) res.status(401).json({ error: "error in token authentication", message: error.message })

            req.token = token
            req.loggedUser = {
                name: data.name,
                email: data.email
            }
            next()
        })
    } catch (error) {
        res.status(500).json({ error: "No token here", message: error.message })
    }
}
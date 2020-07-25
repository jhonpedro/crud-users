const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = {
    async listUsers (req, res) {
        const data = await User.findAll({
            order: [["createdAt", "DESC"]]
        })

        return res.json({ data, loggedUser: req.loggedUser })
    },
    async findUser (req, res) {
        const idToFind = req.params.id

        const data = await User.findByPk(idToFind)

        if (data) {
            return res.status(200).json({ data, loggedUser: req.loggedUser })
        } else {
            return res.status(200).json({ error: "id not found" })
        }

    },
    async createUser (req, res) {
        try {
            const { email: emailRaw, name, password } = req.body
            if (!emailRaw || !name || !password) throw "Some field(s) are inconplete"
            const email = emailRaw.toLowerCase()
            const userInTable = await User.findOne({
                where: {
                    email
                }
            })

            if (userInTable) throw "user already exist"

            let salt = bcrypt.genSaltSync(10)
            let passwordEncrypted = bcrypt.hashSync(password, salt)

            const createdUser = await User.create({
                email: email.toLowerCase(),
                name,
                password: passwordEncrypted
            })
            return res.json(createdUser)
        } catch (error) {
            return res.status(200).json({
                error: "Error in user creation",
                message: error
            })
        }
    },
    async updateUser (req, res) {
        try {
            const { newName, email, password, newRawPassWord } = req.body

            const nameTrue = req.loggedUser.name

            const name = newName || nameTrue

            const user = await User.findOne({
                where: {
                    email
                }
            })

            const isPasswordCorrect = bcrypt.compareSync(password, user.password)

            if (!isPasswordCorrect) return res.status(200).json({ error: "wrong password" })

            let toPass

            if (newRawPassWord) {
                const salt = bcrypt.genSaltSync(10)
                const newPassWord = bcrypt.hashSync(newRawPassWord, salt)
                toPass = { name, password: newPassWord }
            } else {
                toPass = { name }
            }

            await User.update(toPass, { where: { id: user.id } })

            return res.status(200).json({ data: await User.findByPk(user.id), loggedUser: req.loggedUser })
        } catch (error) {
            console.log("\nerror:", error)
            return res.status(200).json({ error: "failed in updating", message: error.message })
        }
    },
    async deleteUser (req, res) {
        try {
            const id = req.query.id
            console.log(req.query)

            const user = await User.findByPk(parseInt(id))

            if (!user) return res.status(401).json({ error: "User not found" })

            User.destroy({
                where: {
                    id
                }
            })

            return res.status(200).json({ data: user, loggedUser: req.loggedUser })
        } catch (error) {
            return res.status(200).json({ error: "faile to delete", message: error.message })
        }
    },
    async authenticate (req, res) {
        try {
            const { email: emailRaw, password } = req.body

            console.log(req.body)
            const email = emailRaw.toLowerCase()

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (user) {
                const isPasswordCorrect = bcrypt.compareSync(password, user.password)

                if (isPasswordCorrect) {
                    jwt.sign({ name: user.name, email, password: user.password }, process.env.JWT_SECRET, { expiresIn: "4h" }, (error, token) => {
                        if (error) res.status(200).json({ error: "error in token creation", message: "error in your token" })

                        return res.status(200).json({ token })
                    })
                } else {
                    return res.status(200).json({
                        error: "wrong password",
                        message: "wrong password"
                    })
                }
            } else {
                return res.status(200).json({
                    error: "No user found",
                    message: "wrong e-mail"
                })
            }

        } catch (error) {
            return res.status(200).json({ error: "faile to authenticate", message: error.message })
        }
    }
}
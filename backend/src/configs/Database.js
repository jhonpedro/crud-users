const Sequelize = require("sequelize")

const { DB_NAME, DB_USER, DB_PASS } = process.env

const connection = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host: "localhost",
        dialect: "postgres",
        timezone: "-03:00"
    }
)

module.exports = connection
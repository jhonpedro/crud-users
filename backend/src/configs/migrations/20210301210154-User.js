'use strict'

const Sequelizet = require('sequelize')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable('users', {
			id: {
				type: Sequelizet.DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			email: {
				type: Sequelizet.DataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: Sequelizet.DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelizet.DataTypes.STRING,
				allowNull: false,
			},
		})
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.dropTable('users')
	},
}

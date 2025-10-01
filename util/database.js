const Sequelize = require('sequelize')

const connection = new Sequelize('systemregister', 'root', '',{
    dialect:'mysql'
})

module.exports = connection;
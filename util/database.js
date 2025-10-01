const Sequelize = require('sequelize')

const connection = new Sequelize('products', 'root', '',{
    dialect:'mysql'
})

module.exports = connection;
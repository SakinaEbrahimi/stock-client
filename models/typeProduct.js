const db = require('../util/database')
const sequelize = require('sequelize')

const typeProduct = db.define("typeProduct", {
    type: sequelize.STRING
})

module.exports = typeProduct
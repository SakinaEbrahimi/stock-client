const db = require('../util/database.js')
const sequelize = require('sequelize')

const typeProduct = db.define("typeProduct", {
    type: sequelize.STRING
})

module.exports = typeProduct
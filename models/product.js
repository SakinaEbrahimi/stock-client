const db = require('../util/database')
const sequilize = require('sequelize')

const products = db.define("Product", {
    typeId: sequilize.STRING,
    name: sequilize.STRING,
    price: sequilize.STRING,
    description: sequilize.STRING
});
module.exports = products
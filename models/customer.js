const db = require('../util/database')
const sequilize = require('sequelize')

const customer = db.define("Customer", {
    name: sequilize.STRING,
    phone: sequilize.STRING,
    product: sequilize.STRING,
    description : sequilize.STRING,
    address: sequilize.STRING
});
module.exports = customer
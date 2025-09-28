const controller = require('../controller/report')
const express = require('express')
const router = express.Router()

router.get('/', controller.getHome)
router.get('/customer', controller.getCustomer)

module.exports = router
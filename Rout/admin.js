const express = require('express')
const router = express.Router()
const controller = require('../controller/admin')

router.get('/addProduct', controller.getAddProduct)
router.post('/addProduct', controller.postAddProduct)
router.get('/typeProduct', controller.getTypeProduct)
router.post('/typeProduct', controller.postTypeProduct)
router.post('/delete', controller.postDelete)
router.get('/edit/:Id', controller.getEdit)
router.post('/edit', controller.postEdit)
router.get('/addCustomer', controller.getAddCustomer)
router.post('/addCustomer', controller.postAddCustomer)
router.post('/deleteCustomer', controller.postDeleteCustomer)


module.exports = router
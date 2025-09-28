const Product = require('../models/product')
const typeProduct = require('../models/typeProduct')
const Customer = require('../models/customer')
exports.getHome = (req,res,next)=>{
    let type 
    typeProduct.findAll()
    .then(t => type = t)
    Product.findAll()
    .then((p)=>{
        res.render('./report/index.ejs',{
            products:p,
            typeProduct: type
        })
    })
}
exports.getCustomer = (req,res,next)=>{
    let product 
    Product.findAll()
    .then(p => product = p)
    Customer.findAll()
    .then((c)=>{
        res.render('./report/report.ejs',{
            cutomer: c,
            pro: product
        })
    })
}
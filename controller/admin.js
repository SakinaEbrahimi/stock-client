const TypeProducts = require('../models/typeProduct')
const Product = require('../models/product')
const Customer = require('../models/customer')
exports.getAddProduct = (req, res, next)=>{
    TypeProducts.findAll()
    .then( tp =>{
        res.render('./admin/product.ejs',{
            title:"AddProducts",
            path:'/addProduct',
            typeproduct: tp
        })
    })
}
exports.postAddProduct = (req, res, next)=>{
    name = req.body.name;
    type = req.body.type;
    price = req.body.price;
    desc = req.body.description;

    Product.create({
        name: name,
        price: price,
        description: desc,
        typeId: type
    })
    .then(()=>{ res.redirect('/')})
}
exports.getTypeProduct = (req, res, next)=>{
    res.render('./admin/typeProduct.ejs',{
        path: 'typeProduct',
        title:"Type Product"
    })
}
exports.postTypeProduct = (req, res,next)=>{
    const type = req.body.typeProduct

    TypeProducts.create({
        type : type
    })
    .then(()=> {
        res.redirect('/addProduct')
    })
    .catch(err => console.log(err))
}
exports.postDelete = (req,res,next)=>{
    const ID = req.body.IdP;

    Product.findByPk(ID)
    .then((p)=>{
        return p.destroy()
    })
    .then(()=> res.redirect('/'))
}
exports.getEdit = (req,res,next)=>{
    let type
    TypeProducts.findAll()
    .then((t)=> type = t)
    const ID = req.params.Id

    Product.findByPk(ID)
    .then((p)=>{
        res.render('./admin/edit.ejs',{
            product: p,
            typeproduct: type
        })
    })
}
exports.postEdit = (req,res,next)=>{
    const name = req.body.name;
    const type = req.body.type;
    const price = req.body.price;
    const description = req.body.description
    const productID = req.body.productID

    Product.findByPk(productID)
    .then((c)=>{
        c.name = name;
        c.type = type;
        c.price = price;
        c.description = description
        c.product = productID

        return c.save()
    })
    .then((result)=>{
        res.redirect('/')
    })
    .catch(err=> console.log(err))
}
exports.getAddCustomer = (req,res,next)=>{
    Product.findAll()
    .then(p =>{
        res.render('./admin/addCustomer.ejs',{
            pro: p
        })
    })
}
exports.postAddCustomer = (req,res,next)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;
    const product = req.body.product;
    const description = req.body.description

    Customer.create({
        name: name,
        phone: phone,
        description: description,
        address: address,
        product: product
    })
    .then(()=>{res.redirect('/addCustomer')})


}
exports.postDeleteCustomer = (req, res, next)=>{
    const id = req.body.IdC
    Customer.findByPk(id)
    .then(c =>{
        return c.destroy()
    })
    .then(()=> res.redirect('/customer'))
}
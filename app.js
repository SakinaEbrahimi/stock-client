const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const connection = require('./util/database')

const routAdmin = require('./Rout/admin')
const report = require('./Rout/report')
const product = require('./models/product')
const typeProduct = require('./models/typeProduct');

const app = express()

app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engin', 'ejs')
app.use(routAdmin)
app.use(report)
typeProduct.hasMany(product)

connection.sync({fore : true})
.then(()=>{
    console.log("connection is successful..")
    app.listen('3000')
})
.catch(err => console.log(err))
const express = require('express')
const router = express.Router()

const { getProducts, newProduct, getSingleProduct, updateProduct } = require('../controllers/productController')


router.route('/products').get(getProducts)

router.route('/product/:id').get(getSingleProduct)

router.route('/admin/product/:id').put(updateProduct)

router.route('/admin/product/new').post(newProduct)

module.exports = router; 

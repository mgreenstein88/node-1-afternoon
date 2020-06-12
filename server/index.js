const express = require('express')
const getProducts = require('../server/getProducts')
const getProduct = require('../server/getProduct')

const app = express()

const PORT = 3030

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(PORT, () => {
    console.log(`Serving running on port ${PORT}`)
})
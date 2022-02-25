const express = require('express')
const products = require('./data/products');
const app = express()
app.get('/', (req, res)=>{
    res.send('API is running... forever');
})
app.get('/api/products', (req, res)=>{
    res.json(products);
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find(p=>p._id===req.params.id)
    res.json(product);
})
app.listen(50001, console.log('Server running at port 50001'))
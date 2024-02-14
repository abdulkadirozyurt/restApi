const express = require('express');
const bodyParser = require("body-parser") // frontendten gelen body'yi parçalamak için gerekli, bak sonradan




const port = 3000;
const app = express();


app.use(bodyParser.json())





app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});


// Veri saklamak için basit bir dizi
let products = [{ id: 1, name: "Apple", categoryId: 1 }]

// Veri ekleme
app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct)
});

// Tüm verileri listeleme
app.get('/products', (req, res) => {
    res.json(products);
});

// Belirli bir veriyi güncelleme
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productUpdated = req.body;
    products = products.map((p) =>
        p.id === productId ? productUpdated : p
    )
    res.json(productUpdated);

});

// Belirli bir veriyi silme
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter((p) => p.id !== productId);
    res.json({ message: "Ürün silindi" });
})



let categories = [
    {
        id: 1,
        name: "Telefon"
    },
    {
        id: 2,
        name: "Beyaz Eşya"
    }]

app.post('/categories', (req, res) => {
    const newCategory = req.body;
    categories.push(newCategory);
    res.status(200).json(newCategory);
});

// Tüm verileri listeleme
app.get('/categories', (req, res) => {
    res.json(categories);
});

// Belirli bir veriyi güncelleme
app.put('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryUpdated = req.body;
    categories = categories.map((c) => c.id === categoryId ? categoryUpdated : c);
    res.json(categoryUpdated)
});

// Belirli bir veriyi silme
app.delete('/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter((c) => c.id !== categoryId);
    res.json({ message: "Kategori silindi" });
});















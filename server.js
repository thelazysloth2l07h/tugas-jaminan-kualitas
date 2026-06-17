const express = require('express');
const { tambah } = require('./math.js');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Aplikasi Web Fungsional Sederhana untuk Demo CI/CD di Windows!');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
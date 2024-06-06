const express = require('express');
const axios = require('axios');
const app = express();
const port = 8001; // Cambiado a 8001 para coincidir con el diagrama

// Endpoint /greeting
app.get('/greeting', (req, res) => {
    res.json({ message: "Hello from polo" });
});

// Endpoint /check
app.get('/check', async (req, res) => {
    try {
        const response = await axios.get('http://marco:8000/greeting');
        res.json({ message: response.data.message });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching from Marco' });
    }
});

app.listen(port, () => {
    console.log(`Servidor Polo escuchando en el puerto ${port}`);
});

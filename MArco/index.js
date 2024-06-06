const express = require('express');
const axios = require('axios');
const app = express();
const port = 8000; // Cambiado a 8000 para coincidir con el diagrama

// Endpoint /greeting
app.get('/greeting', (req, res) => {
    res.json({ message: "Hello from marco" });
});

// Endpoint /check
app.get('/check', async (req, res) => {
    try {
        const response = await axios.get('http://polo:8001/greeting');
        res.json({ message: response.data.message });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching from Polo' });
    }
});

app.listen(port, () => {
    console.log(`Servidor Marco escuchando en el puerto ${port}`);
});

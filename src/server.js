const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
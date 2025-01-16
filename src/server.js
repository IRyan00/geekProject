// Express
const express = require('express');
const app = express();

// DB
const connectDB = require('./config/database');

// Dotenv
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/authRoutes');
const adRoutes = require('./routes/adRoutes');

const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/ads', adRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log('Serveur démarré sur http://localhost:'+PORT);
});
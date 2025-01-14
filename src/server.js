// Express
const express = require('express');
const app = express();

// const path = require('path');


// DB
const connectDB = require('./config/database');

// Dotenv
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/authRoutes');


const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/users', userRoutes);

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

app.listen(PORT, () => {
    connectDB();
    console.log('Serveur démarré sur http://localhost:5001');
});
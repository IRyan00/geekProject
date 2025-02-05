// Express
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser())

// Cors
const cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// DB
const connectDB = require('./config/database');

// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// Routes
const userRoutes = require('./routes/authRoutes');
const adRoutes = require('./routes/adRoutes');
const cartRoutes = require('./routes/cartRoutes');

// PORT
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/ads', adRoutes);
app.use('/api/cart', cartRoutes);

// Server
app.listen(PORT, () => {
    connectDB();
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
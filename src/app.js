require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

module.exports = app;  // Exporter l'application sans la démarrer ici

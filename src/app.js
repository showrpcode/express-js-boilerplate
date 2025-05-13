const express = require('express');
const app = express();
const apiRoutes = require('./routes');

// Middleware
app.use(express.json());
// read url encode special char
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api', apiRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;

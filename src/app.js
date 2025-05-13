const express = require('express');
const apiRoutes = require('./routes');
const httpStatus = require('http-status-codes');
const { PORT } = require('./config/constants');
const app = express();

// Middleware
app.use(express.json());
// read url encode special char
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api', apiRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    'success': false,
    'message': err.message,
    'data': {},
    'error': err.stack
  });
});

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});


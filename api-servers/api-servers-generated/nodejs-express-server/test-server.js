const express = require('express');
const OpenApiValidator = require('express-openapi-validator');
const path = require('path');

const app = express();

app.use(express.json());

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ message: 'Test endpoint working' });
});

// OpenAPI validator
app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, 'api', 'openapi.yaml'),
  })
);

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    message: err.message || err,
    errors: err.errors || '',
  });
});

app.listen(4011, () => {
  console.log('Test server running on port 4011');
}); 
console.log('Starting simple test...');

try {
  const config = require('./config');
  console.log('Config loaded:', config);
} catch (e) {
  console.log('Config error:', e.message);
}

try {
  const logger = require('./logger');
  console.log('Logger loaded');
} catch (e) {
  console.log('Logger error:', e.message);
}

try {
  const ExpressServer = require('./expressServer');
  console.log('ExpressServer loaded');
} catch (e) {
  console.log('ExpressServer error:', e.message);
}

console.log('Test completed'); 
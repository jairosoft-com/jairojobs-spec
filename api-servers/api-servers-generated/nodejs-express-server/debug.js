const fs = require('fs');
const path = require('path');

console.log('Debug script starting...');

// Test file reading
try {
  const openApiPath = path.join(__dirname, 'api', 'openapi.yaml');
  console.log('OpenAPI path:', openApiPath);
  
  if (fs.existsSync(openApiPath)) {
    console.log('OpenAPI file exists');
    const content = fs.readFileSync(openApiPath, 'utf8');
    console.log('OpenAPI file size:', content.length);
  } else {
    console.log('OpenAPI file does not exist');
  }
} catch (e) {
  console.log('File reading error:', e.message);
}

// Test js-yaml
try {
  const jsYaml = require('js-yaml');
  console.log('js-yaml loaded');
  
  const openApiPath = path.join(__dirname, 'api', 'openapi.yaml');
  const content = fs.readFileSync(openApiPath, 'utf8');
  const schema = jsYaml.load(content);
  console.log('YAML parsed successfully');
} catch (e) {
  console.log('YAML parsing error:', e.message);
}

console.log('Debug script completed'); 
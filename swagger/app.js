const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var port = process.env.PORT || 10010;
app.listen(port, () => console.log(`Server listening on port ${port}`));
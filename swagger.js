const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 API',
    description: 'Manage Contacts',
  },
  host: 'https://three41testapi.onrender.com',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
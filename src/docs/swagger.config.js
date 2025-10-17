import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Arcadia API',
    description: 'Documentación de la API para el backend de Arcadia, el mejor sitio de videojuegos.',
    version: '1.0.0',
  },
  host: 'localhost:4000', // Asegúrate de que coincida con tu host y puerto
  schemes: ['http'], // Protocolos que usa tu API
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [ // Agrupa tus endpoints para una mejor organización
    {
      name: 'Videogames',
      description: 'Operaciones relacionadas con los videojuegos',
    },
    {
      name: 'Sales',
      description: 'Operaciones relacionadas con las ventas',
    },
    {
      name: 'General', // Agregamos el tag General
      description: 'Endpoints de información general y salud del servidor.'
    },
  ],
  paths: {} // Dejamos el objeto paths vacío para forzar la auto-generación.
};

const outputFile = './src/docs/swagger-output.json'; // Archivo de salida
const endpointsFiles = [
    './src/server.js' // ¡CRUCIAL! Sólo apuntar a server.js, ya que este importa los routers.
]; 

swaggerAutogen()(outputFile, endpointsFiles, doc);

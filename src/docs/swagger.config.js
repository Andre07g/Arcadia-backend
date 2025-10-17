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
  ],
  paths: {
    '/sales': {
      post: {
        tags: ['Sales'],
        summary: 'Crear una nueva venta',
        description: 'Endpoint para registrar una nueva venta en la base de datos.',
        parameters: [{
          in: 'body',
          name: 'body',
          description: 'Información de la venta a crear.',
          required: true,
          schema: {
            type: 'object',
            properties: {
              date: { type: 'string', format: 'date-time', example: '2024-08-15T10:30:00Z' },
              client: { type: 'string', example: 'Nombre del Cliente' },
              products: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    nombre: { type: 'string', example: 'Cosmic Odyssey: Starfall' },
                    precio: { type: 'number', example: 59.99 },
                    cantidad: { type: 'integer', example: 1 }
                  }
                }
              },
              total: { type: 'number', example: 59.99 }
            }
          }
        }],
        responses: {
          '201': { description: 'Venta creada exitosamente.' },
          '400': { description: 'Error de validación en los datos de entrada.' },
          '500': { description: 'Error interno del servidor.' }
        }
      },
      get: {
        tags: ['Sales'],
        summary: 'Obtener todas las ventas',
        description: 'Endpoint para listar todas las ventas registradas en la base de datos.',
        responses: {
          '200': { description: 'Lista de ventas obtenida exitosamente.' },
          '500': { description: 'Error interno del servidor.' }
        }
      }
    },
    '/sales/{id}': {
      get: {
        tags: ['Sales'],
        summary: 'Obtener una venta por su ID',
        description: 'Endpoint para obtener los detalles de una venta específica usando su ID.',
        parameters: [{
          name: 'id',
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID de la venta.'
        }],
        responses: {
          '200': { description: 'Venta encontrada.' },
          '404': { description: 'Venta no encontrada.' },
          '500': { description: 'Error interno del servidor.' }
        }
      },
      delete: {
        tags: ['Sales'],
        summary: 'Eliminar una venta por su ID',
        description: 'Endpoint para eliminar una venta específica de la base de datos.',
        parameters: [{
          name: 'id',
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID de la venta a eliminar.'
        }],
        responses: {
          '200': { description: 'Venta eliminada exitosamente.' },
          '404': { description: 'Venta no encontrada para eliminar.' },
          '500': { description: 'Error interno del servidor.' }
        }
      }
    },
    '/videogames': {
      post: {
        tags: ['Videogames'],
        summary: 'Crear un nuevo videojuego',
        description: 'Endpoint para agregar un nuevo videojuego al catálogo.',
        parameters: [{
          in: 'body',
          name: 'body',
          description: 'Datos del videojuego a crear.',
          required: true,
          schema: {
            type: 'object',
            properties: {
              title: { type: 'string', example: 'Cosmic Odyssey: Starfall' },
              genre: { type: 'string', example: 'Science Fiction RPG' },
              platform: { type: 'string', example: 'PC' },
              description: { type: 'string', example: 'Una aventura espacial épica.' },
              price: { type: 'integer', example: 60 },
              image: { type: 'string', example: 'https://example.com/image.jpg' },
              stock: { type: 'integer', example: 100 }
            }
          }
        }],
        responses: {
          '201': { description: 'Videojuego creado exitosamente.' },
          '400': { description: 'Error de validación en los datos de entrada.' }
        }
      },
      get: {
        tags: ['Videogames'],
        summary: 'Obtener todos los videojuegos',
        description: 'Endpoint para listar todos los videojuegos disponibles en el catálogo.',
        responses: {
          '200': { description: 'Lista de videojuegos obtenida exitosamente.' },
          '500': { description: 'Error interno del servidor.' }
        }
      }
    },
    '/videogames/{id}': {
      get: {
        tags: ['Videogames'],
        summary: 'Obtener un videojuego por su ID',
        description: 'Endpoint para ver los detalles de un videojuego específico.',
        parameters: [{
          name: 'id',
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID del videojuego.'
        }],
        responses: {
          '200': { description: 'Videojuego encontrado.' },
          '404': { description: 'Videojuego no encontrado.' },
          '500': { description: 'Error interno del servidor.' }
        }
      },
      patch: {
        tags: ['Videogames'],
        summary: 'Actualizar un videojuego',
        description: 'Endpoint para actualizar parcialmente la información de un videojuego existente.',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            type: 'string',
            description: 'ID del videojuego a actualizar.'
          },
          {
            in: 'body',
            name: 'body',
            description: 'Datos del videojuego a actualizar (solo los campos que se deseen cambiar).',
            required: true,
            schema: {
              type: 'object',
              properties: {
                title: { type: 'string', example: 'Cosmic Odyssey: Starfall Remastered' },
                price: { type: 'integer', example: 65 },
                stock: { type: 'integer', example: 150 }
              }
            }
          }
        ],
        responses: {
          '202': { description: 'Videojuego actualizado exitosamente.' },
          '400': { description: 'Error de validación en los datos de entrada.' },
          '404': { description: 'Videojuego no encontrado.' }
        }
      },
      delete: {
        tags: ['Videogames'],
        summary: 'Eliminar un videojuego',
        description: 'Endpoint para eliminar un videojuego del catálogo usando su ID.',
        parameters: [{
          name: 'id',
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID del videojuego a eliminar.'
        }],
        responses: {
          '200': { description: 'Videojuego eliminado exitosamente.' },
          '404': { description: 'Videojuego no encontrado.' }
        }
      }
    }
  }
};

const outputFile = './src/docs/swagger-output.json'; // Archivo de salida
const endpointsFiles = [
    './src/routers/sales.routes.js',
    './src/routers/videogames_router.js'
]; // Apunta a los archivos de rutas

swaggerAutogen()(outputFile, endpointsFiles, doc);
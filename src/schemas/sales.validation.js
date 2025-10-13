db.createCollection("ventas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      // Todos los campos principales requeridos.
      required: ["fecha", "productos", "total"], 
      
      properties: {
        // Validar la fecha
        fecha: {
          bsonType: "date",
          description: "Debe ser de tipo Date (ISO8601)."
        },
        
        // Validar productos (Array)
        productos: {
          bsonType: "array",
          minItems: 1,
          description: "Debe ser un array con al menos 1 producto.",
          
          items: {
            bsonType: "object",
            required: ["nombre", "precio", "cantidad"],
            properties: {
              nombre: {
                bsonType: "string", 
                description: "Debe ser un string no vacío."
              },
              precio: {
                // Tipos numéricos para aceptar flotantes/decimales
                bsonType: "decimal", 
                minimum: 1, 
                description: "Debe ser un número (float) mayor o igual a 1."
              },
              cantidad: {
                bsonType: "int",
                minimum: 1, 
                description: "Debe ser un entero mayor o igual a 1."
              }
            }
          }
        },
        
        // 3. Validar TOTAL (Campo nuevo)
        total: {
          // Tipos numéricos para aceptar flotantes/decimales
          bsonType: ["double", "int", "decimal"], 
          minimum: 1, // Replica: isFloat({min: 1})
          description: "Debe ser un número (float) mayor o igual a 1."
        }
      }
    }
  },
  // La acción "error" asegura que la operación (inserción/actualización) falle si la validación falla.
  validationAction: "error", 
  // Nivel "strict" asegura que la validación se aplique a todas las inserciones y actualizaciones.
  validationLevel: "strict" 
});
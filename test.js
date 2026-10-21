fetch('https://thesimpsonsapi.com/api/characters')          // Ruta al archivo JSON
    .then(response => response.json())  // Convertir la respuesta en JSON
    .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
        console.log(data);
        
    })
    .catch(error => {                   // Manejo de errores al leer el archivo JSON
        console.error('Error al leer el archivo JSON:', error);
    });

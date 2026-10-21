/*
    Cargar personajes en memoria desde el JSON
*/
fetch('https://thesimpsonsapi.com/api/characters')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log(data);
    personajes = data.results
    mostrarPersonajes(personajes)

  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });
let personajes = [];

const container = document.getElementById("personajesContainer")

function mostrarPersonajes(lista) {
  container.innerHTML = ""
  lista.forEach(comida => {
    container.innerHTML +=
    `
    <article class="card">
    <p class="birthdate">${personaje.birthdate}</p>
    <h2 class="personaje">${personaje.name}</h2>
    <p class="provincia">${personaje.provincia}</p>
    <ul class="ingredientes">
      ${personaje.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
    </ul>
    </article>

    `
  })
}
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
  lista.forEach(personaje => {
    if (personaje.id === 4) { //la 1era cita de lisa no va que es muy larga
      personaje.phrases = (personaje.phrases).slice(1, 6)
    } else if (personaje.id === 10) {
      (personaje.phrases).splice(3, 1)
    } else if (personaje.id === 20) {
      (personaje.phrases).splice(3, 1)
    }
      container.innerHTML +=
      `
      <article class="card">
        <img src="https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}" alt="">
        <div class="texto">
          <h2 class="personaje">${personaje.name}</h2>
          <p class="occupation">${personaje.occupation}</p>
          <ul class="frases">
            ${((personaje.phrases).slice(0, 5)).map(phrase => `<li>${phrase}</li>`).join('')} 
          </ul>
       </div>
      </article>
      `

    
  })
}

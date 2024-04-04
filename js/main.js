// Definición de preguntas como un array de objetos, cada uno con una categoría
const preguntas = [
    {
      pregunta: "¿Quién es el líder de la banda británica Queen?",
      opciones: "a) Freddie Mercury\nb) John Lennon\nc) Mick Jagger\nd) Paul McCartney",
      respuestaCorrecta: "a",
      categoria: "historia"
    },
    {
      pregunta: "¿Quién es considerado el Rey del Rock and Roll?",
      opciones: "a) Bob Dylan\nb) Elvis Presley\nc) Chuck Berry\nd) Buddy Holly",
      respuestaCorrecta: "b",
      categoria: "cultura"
    },
    {
      pregunta: "¿Cuál es el festival de música más grande del mundo, que se celebra anualmente en California?",
      opciones: "a) Woodstock\nb) Lollapalooza\nc) Glastonbury\nd) Coachella",
      respuestaCorrecta: "d",
      categoria: "eventos"
    }
  ];
  
  // Función para mostrar y validar la respuesta a una pregunta
  function mostrarPregunta(preguntaObjeto) {
      let respuestaUsuario;
      do {
        respuestaUsuario = prompt(preguntaObjeto.pregunta + "\n" + preguntaObjeto.opciones).toLowerCase();
        if (!['a', 'b', 'c', 'd'].includes(respuestaUsuario) && respuestaUsuario !== null) {
          alert("Por favor, ingresa una opción válida (a, b, c, d).");
        }
      } while (!['a', 'b', 'c', 'd'].includes(respuestaUsuario) && respuestaUsuario !== null);
      if (respuestaUsuario === preguntaObjeto.respuestaCorrecta) {
        alert("¡Respuesta correcta!");
      } else if (respuestaUsuario !== null) {
        alert("Respuesta incorrecta. La respuesta correcta es: " + preguntaObjeto.respuestaCorrecta);
      }
  }
  
  // Función principal para jugar el juego, incluyendo selección de categoría y filtrado de preguntas
  function jugarJuego() {
      let nombre = prompt("¡Bienvenido a MusIQ! Por favor, introduce tu nombre:");
  
      if (nombre === null) {
          alert("¡Has cancelado el juego!");
          return; // Finaliza la función si el usuario cancela
      } else {
          alert("Hola, " + nombre + ". ¡Prepárate para elegir una categoría a continuación!");
      }
  
      // Elección de categoría por el usuario
      let categoriaElegida = prompt("Por favor, elige una categoría: historia, cultura, eventos").toLowerCase();
      // Filtrado de preguntas según la categoría elegida
      let preguntasFiltradas = preguntas.filter(pregunta => pregunta.categoria === categoriaElegida);
  
      if (preguntasFiltradas.length === 0) {
          alert("No hay preguntas para esta categoría. Intenta de nuevo.");
          return;
      }
  
      // Iteración sobre cada pregunta filtrada para mostrarlas y validar respuestas
      preguntasFiltradas.forEach(preguntaObjeto => mostrarPregunta(preguntaObjeto));
  
      // Mensaje de fin del juego
      alert("¡Fin del juego! Gracias por jugar.");
  }
  
  // Inicio del juego
  jugarJuego();
  
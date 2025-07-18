const ramos = [
  // Primer año
  { nombre: "Humanidades 1", abre: ["Humanidades 2"], semestre: "I Semestre" },
  { nombre: "Actividad cultural", semestre: "I Semestre" },
  { nombre: "Actividad deportiva", semestre: "I Semestre" },
  { nombre: "Diseño I", abre: ["Diseño II"], semestre: "I Semestre" },
  { nombre: "Dibujo I", abre: ["Dibujo II"], semestre: "I Semestre" },
  { nombre: "Taller de pigmentos", abre: ["Taller Gráfico I"], semestre: "I Semestre" },
  { nombre: "Taller de arcilla", semestre: "I Semestre" },

  { nombre: "Humanidades 2", abre: ["Seminario de Realidad Nacional 1"], requiere: ["Humanidades 1"], semestre: "II Semestre" },
  { nombre: "Teoría del arte", abre: ["Semiosis de la producción"], semestre: "II Semestre" },
  { nombre: "Diseño II", abre: ["Diseño III"], requiere: ["Diseño I"], semestre: "II Semestre" },
  { nombre: "Dibujo II", abre: ["Dibujo III"], requiere: ["Dibujo I"], semestre: "II Semestre" },
  { nombre: "Taller de madera", semestre: "II Semestre" },
  { nombre: "Taller de papel y textil", abre: ["Sistemas de Reproducción I"], semestre: "II Semestre" },

  // Segundo año
  { nombre: "Introducción al arte 1", abre: ["Introducción al arte 2"], semestre: "III Semestre" },
  { nombre: "Introducción a la Antropología", semestre: "III Semestre" },
  { nombre: "Diseño III", abre: ["Diseño IV"], requiere: ["Diseño II"], semestre: "III Semestre" },
  { nombre: "Dibujo III", abre: ["Dibujo IV"], requiere: ["Dibujo II"], semestre: "III Semestre" },
  { nombre: "Taller de vidrio y plástico", semestre: "III Semestre" },
  { nombre: "Taller de metal", semestre: "III Semestre" },

  { nombre: "Introducción al arte 2", abre: ["Arte Costarricense", "Historia del Diseño Gráfico"], requiere: ["Introducción al arte 1"], semestre: "IV Semestre" },
  { nombre: "Semiosis de la producción", requiere: ["Teoría del arte"], semestre: "IV Semestre" },
  { nombre: "Repertorio", semestre: "IV Semestre" },
  { nombre: "Diseño IV", abre: ["Diseño Gráfico I", "Fotografía I"], requiere: ["Diseño III"], semestre: "IV Semestre" },
  { nombre: "Dibujo IV", abre: ["Taller Gráfico I", "Dibujo optativo I", "Dibujo optativo II", "Dibujo optativo III", "Taller Optativo I", "Taller Optativo II"], requiere: ["Dibujo III"], semestre: "IV Semestre" },
  { nombre: "Taller de iluminación", abre: ["Fotografía I"], semestre: "IV Semestre" },
  { nombre: "Taller de piedra", semestre: "IV Semestre" },

  // Tercer año
  { nombre: "Arte Costarricense", semestre: "V Semestre" },
  { nombre: "Dibujo optativo I", requiere: ["Dibujo IV"], semestre: "V Semestre" },
  { nombre: "Diseño Gráfico I", abre: ["Diseño Gráfico II"], requiere: ["Diseño IV"], semestre: "V Semestre" },
  { nombre: "Taller Gráfico I", abre: ["Taller Gráfico II"], requiere: ["Taller de pigmentos", "Dibujo IV"], semestre: "V Semestre" },
  { nombre: "Fotografía I", abre: ["Fotografía II"], requiere: ["Diseño IV", "Taller de iluminación"], semestre: "V Semestre" },
  { nombre: "Medios Digitales I", abre: ["Medios Digitales II"], semestre: "V Semestre" },
  { nombre: "Sistemas de Reproducción I", abre: ["Sistemas de Reproducción II"], requiere: ["Taller de papel y textil"], semestre: "V Semestre" },

  { nombre: "Historia del Diseño Gráfico", semestre: "VI Semestre" },
  { nombre: "Seminario de Realidad Nacional 1", abre: ["Seminario de Realidad Nacional 2"], requiere: ["Humanidades 2"], semestre: "VI Semestre" },
  { nombre: "Diseño Gráfico II", abre: ["Diseño Gráfico III"], requiere: ["Diseño Gráfico I"], semestre: "VI Semestre" },
  { nombre: "Taller Gráfico II", abre: ["Taller Gráfico III"], requiere: ["Taller Gráfico I"], semestre: "VI Semestre" },
  { nombre: "Fotografía II", abre: ["Fotografía III"], requiere: ["Fotografía I"], semestre: "VI Semestre" },
  { nombre: "Medios Digitales II", abre: ["Medios Digitales III"], requiere: ["Medios Digitales I"], semestre: "VI Semestre" },
  { nombre: "Sistemas de Reproducción II", abre: ["Sistemas de Reproducción III"], requiere: ["Sistemas de Reproducción I"], semestre: "VI Semestre" },

  // Cuarto año
  { nombre: "Historia del arte optativa I", semestre: "VII Semestre" },
  { nombre: "Idioma", semestre: "VII Semestre" },
  { nombre: "Diseño Gráfico III", abre: ["Diseño Interactivo"], requiere: ["Diseño Gráfico II"], semestre: "VII Semestre" },
  { nombre: "Taller Gráfico III", abre: ["Diseño Interactivo"], requiere: ["Taller Gráfico II"], semestre: "VII Semestre" },
  { nombre: "Fotografía III", requiere: ["Fotografía II"], semestre: "VII Semestre" },
  { nombre: "Medios Digitales III", requiere: ["Medios Digitales II"], semestre: "VII Semestre" },
  { nombre: "Sistemas de Reproducción III", abre: ["Diseño Interactivo"], requiere: ["Sistemas de Reproducción II"], semestre: "VII Semestre" },

  { nombre: "Historia del arte optativa II", semestre: "VIII Semestre" },
  { nombre: "Seminario de Realidad Nacional 2", requiere: ["Seminario de Realidad Nacional 1"], semestre: "VIII Semestre" },
  { nombre: "Taller Optativo I", requiere: ["Dibujo IV"], semestre: "VIII Semestre" },
  { nombre: "Taller Optativo II", requiere: ["Dibujo IV"], semestre: "VIII Semestre" },
  { nombre: "Dibujo optativo II", requiere: ["Dibujo IV"], semestre: "VIII Semestre" },
  { nombre: "Dibujo optativo III", requiere: ["Dibujo IV"], semestre: "VIII Semestre" },
  { nombre: "Diseño Interactivo", abre: ["Taller especializado I"], requiere: ["Diseño Gráfico III", "Taller Gráfico III", "Sistemas de Reproducción III"], semestre: "VIII Semestre" },

  // Quinto año
  { nombre: "Taller Optativo III", semestre: "IX Semestre" },
  { nombre: "Taller Optativo IV", semestre: "IX Semestre" },
  { nombre: "Taller Optativo V", semestre: "IX Semestre" },
  { nombre: "Técnicas de Investigación", semestre: "IX Semestre" },
  { nombre: "Taller especializado I", abre: ["Taller especializado II"], requiere: ["Diseño Interactivo"], semestre: "IX Semestre" },

  { nombre: "Taller Optativo VI", semestre: "X Semestre" },
  { nombre: "Taller Optativo VII", semestre: "X Semestre" },
  { nombre: "Adm. De las artes", semestre: "X Semestre" },
  { nombre: "Taller especializado II", requiere: ["Taller especializado I"], semestre: "X Semestre" }
];

const contenedor = document.getElementById("malla");
const semestresUnicos = [...new Set(ramos.map(r => r.semestre))];

// Mapeo visual de ramos por semestre
semestresUnicos.forEach(semestre => {
  const section = document.createElement("div");
  section.className = "semestre";

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  section.appendChild(titulo);

  const grid = document.createElement("div");
  grid.className = "contenido-semestre";

  ramos.forEach((ramo, index) => {
    if (ramo.semestre !== semestre) return;

    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.dataset.index = index;

    if (ramo.requiere) {
      div.classList.add("bloqueado");
    }

    grid.appendChild(div);
  });

  section.appendChild(grid);
  contenedor.appendChild(section);
});

function actualizarRamos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const index = parseInt(div.dataset.index);
    const ramo = ramos[index];

    if (ramo.requiere) {
      const requisitosCumplidos = ramo.requiere.every(nombreReq => {
        const i = ramos.findIndex(r => r.nombre === nombreReq);
        const requerido = document.querySelector(`.ramo[data-index="${i}"]`);
        return requerido && requerido.classList.contains("aprobado");
      });

      if (requisitosCumplidos) {
        div.classList.remove("bloqueado");
      } else {
        div.classList.add("bloqueado");
      }
    }
  });
}

document.getElementById("malla").addEventListener("click", e => {
  const div = e.target;
  if (!div.classList.contains("ramo") || div.classList.contains("bloqueado")) return;

  const index = parseInt(div.dataset.index);
  const ramo = ramos[index];

  div.classList.toggle("aprobado");

  if (ramo.abre) {
    ramo.abre.forEach(nombreAbre => {
      const i = ramos.findIndex(r => r.nombre === nombreAbre);
      if (i !== -1) {
        const desbloqueo = document.querySelector(`.ramo[data-index="${i}"]`);
        if (desbloqueo && !desbloqueo.classList.contains("aprobado")) {
          desbloqueo.classList.remove("bloqueado");
        }
      }
    });
  }

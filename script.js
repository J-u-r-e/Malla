const ramos = [
  // Primer año
  { nombre: "Humanidades 1", abre: ["Humanidades 2"] },
  { nombre: "Actividad cultural" },
  { nombre: "Actividad deportiva" },
  { nombre: "Diseño I", abre: ["Diseño II"] },
  { nombre: "Dibujo I", abre: ["Dibujo II"] },
  { nombre: "Taller de pigmentos", abre: ["Taller Gráfico I"] },
  { nombre: "Taller de arcilla" },
  { nombre: "Humanidades 2", abre: ["Seminario Realidad Nacional 1"], requiere: ["Humanidades 1"] },
  { nombre: "Teoría del arte", abre: ["Semiosis de la producción"] },
  { nombre: "Diseño II", abre: ["Diseño III"], requiere: ["Diseño I"] },
  { nombre: "Dibujo II", abre: ["Dibujo III"], requiere: ["Dibujo I"] },
  { nombre: "Taller de madera" },
  { nombre: "Taller de papel y textil", abre: ["Sistemas de Reproducción I"] },

  // Segundo año
  { nombre: "Introducción al arte 1", abre: ["Introducción al arte 2"] },
  { nombre: "Introducción a la Antropología" },
  { nombre: "Diseño III", abre: ["Diseño IV"], requiere: ["Diseño II"] },
  { nombre: "Dibujo III", abre: ["Dibujo IV"], requiere: ["Dibujo II"] },
  { nombre: "Taller de vidrio y plástico" },
  { nombre: "Taller de metal" },
  { nombre: "Introducción al arte 2", abre: ["Arte Costarricense", "Historia del Diseño Gráfico"], requiere: ["Introducción al arte 1"] },
  { nombre: "Semiosis de la producción", requiere: ["Teoría del arte"] },
  { nombre: "Repertorio" },
  { nombre: "Diseño IV", abre: ["Diseño Gráfico I", "Fotografía I"], requiere: ["Diseño III"] },
  { nombre: "Dibujo IV", abre: ["Taller Gráfico I", "Dibujo optativo I", "Dibujo optativo II", "Dibujo optativo III", "Taller optativo I", "Taller optativo II"], requiere: ["Dibujo III"] },
  { nombre: "Taller de iluminación", abre: ["Fotografía I"] },
  { nombre: "Taller de piedra" },

  // Tercer año
  { nombre: "Arte Costarricense" },
  { nombre: "Dibujo optativo I" },
  { nombre: "Diseño Gráfico I", abre: ["Diseño Gráfico II"], requiere: ["Diseño IV"] },
  { nombre: "Taller Gráfico I", abre: ["Taller Gráfico II"], requiere: ["Dibujo IV", "Taller de pigmentos"] },
  { nombre: "Fotografía I", abre: ["Fotografía II"], requiere: ["Taller de iluminación", "Diseño IV"] },
  { nombre: "Medios Digitales I", abre: ["Medios Digitales II"] },
  { nombre: "Sistemas de Reproducción I", abre: ["Sistemas de Reproducción II"], requiere: ["Taller de papel y textil"] },
  { nombre: "Historia del Diseño Gráfico" },
  { nombre: "Seminario de Realidad Nacional 1", abre: ["Seminario de Realidad Nacional 2"], requiere: ["Humanidades 2"] },
  { nombre: "Diseño Gráfico II", abre: ["Diseño Gráfico III"], requiere: ["Diseño Gráfico I"] },
  { nombre: "Taller Gráfico II", abre: ["Taller Gráfico III"], requiere: ["Taller Gráfico I"] },
  { nombre: "Fotografía II", abre: ["Fotografía III"], requiere: ["Fotografía I"] },
  { nombre: "Medios Digitales II", abre: ["Medios Digitales III"], requiere: ["Medios Digitales I"] },
  { nombre: "Sistemas de Reproducción II", abre: ["Sistemas de Reproducción III"], requiere: ["Sistemas de Reproducción I"] },

  // Cuarto año
  { nombre: "Historia del arte optativa I" },
  { nombre: "Idioma" },
  { nombre: "Diseño Gráfico III", abre: ["Diseño Interactivo"], requiere: ["Diseño Gráfico II"] },
  { nombre: "Taller Gráfico III", abre: ["Diseño Interactivo"], requiere: ["Taller Gráfico II"] },
  { nombre: "Fotografía III", requiere: ["Fotografía II"] },
  { nombre: "Medios Digitales III", requiere: ["Medios Digitales II"] },
  { nombre: "Sistemas de Reproducción III", abre: ["Diseño Interactivo"], requiere: ["Sistemas de Reproducción II"] },
  { nombre: "Historia del arte optativa II" },
  { nombre: "Seminario de Realidad Nacional 2", requiere: ["Seminario de Realidad Nacional 1"] },
  { nombre: "Taller Optativo I", requiere: ["Dibujo IV"] },
  { nombre: "Taller Optativo II", requiere: ["Dibujo IV"] },
  { nombre: "Dibujo optativo II", requiere: ["Dibujo IV"] },
  { nombre: "Dibujo optativo III", requiere: ["Dibujo IV"] },
  { nombre: "Diseño Interactivo", abre: ["Taller especializado I"], requiere: ["Diseño Gráfico III", "Taller Gráfico III", "Sistemas de Reproducción III"] },

  // Quinto año
  { nombre: "Taller Optativo III" },
  { nombre: "Taller Optativo IV" },
  { nombre: "Taller Optativo V" },
  { nombre: "Técnicas de Investigación" },
  { nombre: "Taller especializado I", abre: ["Taller especializado II"], requiere: ["Diseño Interactivo"] },
  { nombre: "Taller Optativo VI" },
  { nombre: "Taller Optativo VII" },
  { nombre: "Adm. De las artes" },
  { nombre: "Taller especializado II", requiere: ["Taller especializado I"] },
];

const contenedor = document.getElementById("malla");
const semestres = [...new Set(ramos.map(r => r.semestre))];

semestres.forEach(sem => {
  const section = document.createElement("div");
  section.classList.add("semestre");

  const h2 = document.createElement("h2");
  h2.textContent = sem;
  section.appendChild(h2);

  const grid = document.createElement("div");
  grid.classList.add("contenido-semestre");

  ramos.forEach((ramo, i) => {
    if (ramo.semestre !== sem) return;

    const div = document.createElement("div");
    div.classList.add("ramo");
    div.textContent = ramo.nombre;
    div.dataset.index = i;

    if (ramo.requiere) div.classList.add("bloqueado");

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
      const desbloqueado = ramo.requiere.every(req =>
        document.querySelector(`.ramo[data-index="${ramos.findIndex(r => r.nombre === req)}"]`).classList.contains("aprobado")
      );
      div.classList.toggle("bloqueado", !desbloqueado);
    }
  });
}

document.getElementById("malla").addEventListener("click", e => {
  if (!e.target.classList.contains("ramo")) return;
  const div = e.target;
  const index = parseInt(div.dataset.index);
  const ramo = ramos[index];
  if (div.classList.contains("bloqueado")) return;
  div.classList.toggle("aprobado");

  // Abrir dependencias
  if (ramo.abre) {
    ramo.abre.forEach(abierto => {
      const i = ramos.findIndex(r => r.nombre === abierto);
      if (i !== -1) {
        const target = document.querySelector(`.ramo[data-index="${i}"]`);
        if (!target.classList.contains("aprobado")) {
          target.classList.remove("bloqueado");
        }
      }
    });
  }

const navbar = document.getElementById('navbar')
const overlay = document.getElementById('overlay')

function openSidebar(){
    navbar.classList.add('show')
    overlay.classList.add('overlay_show')
}

function closeSidebar(){
    navbar.classList.remove('show')
    overlay.classList.remove('overlay_show')
}

const actividades = [
  {
    id: 1,
    titulo: "ACTIVIDAD 1",
    horario: "Lunes 10:00-12:00",
    inscripcion: "Inscríbete aquí",
    imagen: "./assets/img/actividad_holder.jpeg",
    enlace: "#"
  },
  {
    id: 2,
    titulo: "ACTIVIDAD 2", 
    horario: "Martes 15:00-17:00",
    inscripcion: "Inscríbete aquí",
    imagen: "./assets/img/actividad2.jpeg",
    enlace: "#"
  },
   {
    id: 3,
    titulo: "ACTIVIDAD 3", 
    horario: "Martes 15:00-17:00",
    inscripcion: "Inscríbete aquí",
    imagen: "./assets/img/actividad2.jpeg",
    enlace: "#"
  },
  
];

function crearTarjetaActividad(actividad) {
  return `
    <div class="tarjeta_actividad" data-id="${actividad.id}" style="background-image: url('${actividad.imagen}')">
      <h3>${actividad.titulo}</h3>
      <p>Horario: ${actividad.horario}</p>
      <p>${actividad.inscripcion}</p>
      <a href="${actividad.enlace}">Más información</a>
    </div>
  `;
}

function renderizarActividades() {
  const contenedor = document.querySelector('.contenedor_actividades');
  if (!contenedor) return;
  
  contenedor.innerHTML = actividades.map(actividad => 
    crearTarjetaActividad(actividad)
  ).join('');
}


document.addEventListener('DOMContentLoaded', renderizarActividades);
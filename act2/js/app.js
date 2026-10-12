const botonesCandidato = document.querySelectorAll('.btn-candidato');
const modales = document.querySelectorAll('.modal');
const botonesCerrar = document.querySelectorAll('.cerrar-modal');
const botonesAceptar = document.querySelectorAll('.aceptar-modal');
const selectVoto = document.getElementById('selectVoto');
const btnVotar = document.getElementById('btnVotar');
const mensajeVoto = document.getElementById('mensajeVoto');
const year = document.getElementById('year');

// Función para cerrar todos los modales
function cerrarTodos() {
    modales.forEach(function (modal) {
        modal.classList.remove('activo');
    });
}

// 1. Evento de clic: cada botón abre el modal de su candidato
botonesCandidato.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const modal = document.getElementById(boton.dataset.modal);
        modal.classList.add('activo');
    });
});

// 2. Botones de cerrar (la X y el botón "Cerrar")
botonesCerrar.forEach(function (boton) {
    boton.addEventListener('click', cerrarTodos);
});

botonesAceptar.forEach(function (boton) {
    boton.addEventListener('click', cerrarTodos);
});

// 3. Evento utilizando el objeto "evento": clic fuera del contenido
modales.forEach(function (modal) {
    modal.addEventListener('click', function (evento) {
        if (evento.target === modal) {
            cerrarTodos();
        }
    });
});

// 4. Evento de teclado en todo el documento
document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
        cerrarTodos();
    }
});

// 5. Interacción con el usuario: votar por un candidato
btnVotar.addEventListener('click', function () {
    if (selectVoto.value === '') {
        mensajeVoto.innerHTML = '<i class="fas fa-circle-exclamation"></i> Selecciona un candidato antes de votar.';
    } else {
        mensajeVoto.innerHTML = '<i class="fas fa-circle-check"></i> Gracias por tu voto por ' + selectVoto.value + '.';
    }
});

// 6. Lógica de la fecha
const fechaActual = new Date();
year.textContent = '© ' + fechaActual.getFullYear() + ' Balón de Oro 2026';
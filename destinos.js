document.addEventListener("DOMContentLoaded", function () {
    var destinoSelect = document.getElementById("destino");
    var tablaBody = document.getElementById("tabla-body");

    var destinos = {
        marte: [
            { nombre: "Cráter Gale (Marte)", distancia: "225 millones de km", duracion: "9 meses" },
            { nombre: "Monte Olimpo (Marte)", distancia: "225 millones de km", duracion: "9 meses" },
        ],
        luna: [
            { nombre: "Mar de la Tranquilidad (Luna)", distancia: "384,400 km", duracion: "3 días" },
            { nombre: "Mar de la Serenidad (Luna)", distancia: "384,400 km", duracion: "3 días" },
        ]
    };

    function actualizarTabla() {
        // Limpiamos el contenido actual del tbody
        tablaBody.innerHTML = "";

        var destinoSeleccionado = destinoSelect.value;
        var datosDestino = destinos[destinoSeleccionado];

        // Agregamos las filas con los datos del destino seleccionado
        for (var i = 0; i < datosDestino.length; i++) {
            var fila = tablaBody.insertRow(i);
            var celdaNombre = fila.insertCell(0);
            var celdaDistancia = fila.insertCell(1);
            var celdaDuracion = fila.insertCell(2);

            celdaNombre.innerHTML = datosDestino[i].nombre;
            celdaDistancia.innerHTML = datosDestino[i].distancia;
            celdaDuracion.innerHTML = datosDestino[i].duracion;
        }
    }

    destinoSelect.addEventListener("change", function () {
        // Remover todas las clases de tema antes de agregar la nueva
        document.body.classList.remove('tema-luna', 'tema-marte');

        var nuevoTema = destinoSelect.value === 'luna' ? 'tema-luna' : 'tema-marte';
        document.body.classList.add(nuevoTema);

        actualizarTabla();
    });

    // Llamamos a la función inicial para cargar la tabla con el destino predeterminado y el tema predeterminado
    actualizarTabla();
});

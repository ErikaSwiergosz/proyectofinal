document.addEventListener("DOMContentLoaded", function () {
    var destinoSelect = document.getElementById("destino");
    var tablaBody = document.getElementById("tabla-body");

    var destinos = {
        luna: [
            { Diámetro: "3,475km", Duración_del_día: "29.5 días de la Tierra", gravedad: "16.6% de la gravedad de la Tierra, es decir, 1,62 m/s²", distancia_desde_la_Tierra:"384.400km", edad_del_planeta:"4.51 mil millones de años" },
            
        ],
        marte: [
            {Diámetro: "6.791km", Duración_del_día: "24 horas y 37 min", gravedad: "38% de la gravedad de la Tierra, es decir, 3,71 m/s²", distancia_desde_la_Tierra:"225.000.000km", edad_del_planeta:"4.51 mil millones de años" },
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
            var celdaDiámetro = fila.insertCell(0);
            var celdaDuración_del_día = fila.insertCell(1);
            var celdagravedad = fila.insertCell(2);
            var celdadistancia_desde_la_Tierra = fila.insertCell(3);
            var celdaedad_del_planeta = fila.insertCell(4);

            celdaDiámetro.innerHTML = datosDestino[i].Diámetro;
            celdaDuración_del_día.innerHTML = datosDestino[i].Duración_del_día;
            celdagravedad.innerHTML = datosDestino[i].gravedad;
            celdadistancia_desde_la_Tierra.innerHTML = datosDestino[i].distancia_desde_la_Tierra;
            celdaedad_del_planeta.innerHTML = datosDestino[i].edad_del_planeta;
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
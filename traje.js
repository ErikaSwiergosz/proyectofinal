document.addEventListener("DOMContentLoaded", function () {
    var partes_del_trajeSelect = document.getElementById("traje");
    var tablaSuit = document.getElementById("tabla-suit");

    var partes_del_traje = {
        helmet: [
            { Parte_del_Traje: "Casco", Informacion: "El casco impreso en 3D con acolchado personalizado alberga micrófonos para comunicación y válvulas que regulan los sistemas de presión del traje" },
        ],
        visor: [
            { Parte_del_Traje: "Visor", Informacion: "diseñado para proporcionar un gran campo de visión y gira para abrirse" },
        ],
        elbow: [
            { Parte_del_Traje: "Codo", Informacion: "La capa exterior del traje espacial está fabricada con materiales resistentes al fuego. Las partes grises son diferentes versiones de Nomex y el material blanco es una tela de teflón." },
        ],
        knee: [
            { Parte_del_Traje: "Rodilla", Informacion: "Un único punto de conexión entre el traje y el vehículo proporciona el sistema de soporte vital para los astronautas: aviónica para comunicaciones, sistemas de refrigeración y presurización del traje, todo a través de un complemento fácil de usar." },
        ],
        zippers: [
            { Parte_del_Traje: "Cremallera", Informacion: "Las cremalleras en la muñeca permiten a los astronautas usar su manos desnudas en los controles cuando sea apropiado. Las cremalleras también corren por dentro de una costura dentro de las piernas, de un tobillo al otro, que es donde la tripulación entra y sale del traje." },
        ],
        gloves: [
            { Parte_del_Traje: "Guantes", Informacion: "Los guantes están diseñados para un uso fácil cuando el traje está presurizado y con la capacidad de operar las pantallas táctiles de Dragon." },
        ],
    };

    function actualizarTabla() {
        // Limpiamos el contenido actual del tbody
        tablaSuit.innerHTML = "";

        var partes_del_trajeSeleccionado = partes_del_trajeSelect.value;
        var datospartes_del_traje = partes_del_traje[partes_del_trajeSeleccionado];

        // Agregamos las filas con los datos del destino seleccionado
        for (var i = 0; i < datospartes_del_traje.length; i++) {
            var fila = tablaSuit.insertRow(i);
            var celdaParte_del_traje = fila.insertCell(0);
            var celdaInformacion = fila.insertCell(1);

            celdaParte_del_traje.innerHTML = datospartes_del_traje[i].Parte_del_Traje;
            celdaInformacion.innerHTML = datospartes_del_traje[i].Informacion;

            // Crear un elemento img y establecer el src según la parte del traje
            var img = document.createElement("img");
            img.src = obtenerImagenRuta(partes_del_trajeSeleccionado);
            img.alt = datospartes_del_traje[i].Parte_del_Traje;

            celdaParte_del_traje.appendChild(img); // Agregar la imagen a la celda
        }
    }

    partes_del_trajeSelect.addEventListener("change", function () {
        // Remover todas las clases de tema antes de agregar la nueva
        document.body.classList.remove('helmet', 'visor', 'elbow', 'knee', 'zippers', 'gloves');

        var nuevoTema = partes_del_trajeSelect.value.toLowerCase();
        document.body.classList.add(nuevoTema);

        actualizarTabla();
    });

    // Función para obtener la ruta de la imagen según la parte del traje
    function obtenerImagenRuta(parte) {
        switch (parte) {
            case 'helmet':
                return 'https://www.3dnatives.com/es/wp-content/uploads/sites/4/spacex_cover.jpg';
            case 'visor':
                return 'https://haciaelespacio.aem.gob.mx/revistadigital/img/articulos/1593540961spacexsuit.jpg';
            case 'elbow':
                return 'https://images.ecestaticos.com/VyHemAlM3jaD8MEsB3UYep1c3Tg=/22x3:2270x1513/1440x1080/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fea0%2Fe53%2Fcaa%2Fea0e53caa4c7acaf9452b55367426d9f.jpg';
            case 'knee':
                return 'https://c8.alamy.com/compes/2h0tg7g/hawthorne-estados-unidos-14th-oct-2021-los-astronautas-de-spacex-crew-3-posan-para-un-retrato-en-sus-trajes-durante-una-sesion-de-entrenamiento-el-9-de-octubre-de-2021-de-izquierda-a-derecha-estan-el-astronauta-matthias-maurer-de-la-esa-agencia-espacial-europea-y-los-astronautas-de-la-nasa-raja-chari-thomas-marshburn-y-kayla-barron-chari-es-comandante-marshburn-es-el-piloto-y-barron-y-maurer-son-ambos-especialistas-de-mision-foto-por-spacex-upi-credito-upi-alamy-live-news-2h0tg7g.jpg';
            case 'zippers':
                return 'https://qph.cf2.quoracdn.net/main-qimg-88786864d477e7740a58e8995a889919-lq';
            case 'gloves':
                return 'https://www.fayerwayer.com/resizer/rN7djQx5f_AdylslF_XQDKjYTYk=/arc-photo-metroworldnews/arc2-prod/public/RU3PFIFJXFFBPGCLWUPIBSPX5E.jpg';
            default:
                return '';
        }
    }
});

import { agregarAuto } from "./Promesas.js";

window.addEventListener("load", () => {
    console.log("hola ya cargue");
    
    // Agregar el evento al boton de "Registrar"
    document.getElementById("btnAgregar").addEventListener("click", () => {
        console.log("Le diste al boton");

        // Recupera los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eMarca = document.getElementById("marca");
        let eAnio = document.getElementById("anio");
        let eKilometraje = document.getElementById("kilom");
        let eTipo = document.getElementById("tipo");
        let eUsado = document.getElementById("usado");

        // Recupera el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vMarca = eMarca.value;
        let vAnio = eAnio.value;
        let vKilometraje = eKilometraje.value;
        let vTipo = eTipo.value;

        // Radios y checkbox no se recuperan valor, se recupera si está chequeado
        let vUsado = eUsado.checked;

        // Imprime los valores en consola
        console.log(vNombre);
        console.log(vMarca);
        console.log(vAnio);
        console.log(vKilometraje);
        console.log(vTipo);
        console.log(vUsado);

        // Crear un objeto "auto" con los datos obtenidos
        let auto = {
            'nombre': vNombre,
            'marca': vMarca,
            'anio': vAnio,
            'kilometraje': vKilometraje,
            'tipo': vTipo,
            'usado': vUsado
        };

        // Llamar la función agregarAuto para guardar el auto en Firebase
        agregarAuto(auto);
        console.log(auto);
    })
});

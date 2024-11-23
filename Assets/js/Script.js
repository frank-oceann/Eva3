import { agregarAuto } from "./Promesas.js";

window.addEventListener("load", () => {
    console.log("hola ya cargue");
    document.getElementById("btnAgregar").addEventListener("click", () => {
        console.log("Le diste al boton");
        //Recupero los elementos del formulario
        let eNombre = document.getElementById("nombre");
        let eMarca = document.getElementById("marca");
        let eAnio = document.getElementById("anio");
        let eKilometraje = document.getElementById("kilom");
        let eTipo = document.getElementById("tipo");
        let eUsado = document.getElementById("usado");
        //Recupero el contenido de los elementos del formulario
        let vNombre = eNombre.value;
        let vMarca = eMarca.value;
        let vAnio = eAnio.value;
        let vKilometraje = eKilometraje.value;
        let vTipo = eTipo.value;
        //Radios y checkbox no se recupera valor, se recupera si esta chequeado
        let vUsado = eUsado.checked; 
        console.log(vNombre);
        console.log(vMarca);
        console.log(vAnio);
        console.log(vKilometraje);
        console.log(vTipo);
        console.log(vUsado);
        let auto = {
            'nombre': vNombre,
            'marca': vMarca,
            'anio': vAnio,
            'kilometraje': vKilometraje,
            'tipo': vTipo,
            'usado': vUsado
        };
        agregarAuto(auto);
        console.log(auto);
    })
})
/*
    arrow function 
    () => { }
*/

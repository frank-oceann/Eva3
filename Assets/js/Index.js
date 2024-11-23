const body = document.getElementsByTagName("body")[0];
const btn = document.getElementById("btn");
const img = document.getElementById("btn-img");

const fontBtn = document.getElementById("font-btn");

console.log("Hola si funciona main.js");

// Esto cambia entre claro y oscuro.
function changeTheme() {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        img.src = "Assets\Imagenes\dark.svg"; 
    } else {
        img.src = "Assets\Imagenes\light.svg"; 
    }
}

// Esto cambia entre tamaño grande y pequeño.
function changeFontSize() {
    body.classList.toggle("large-font");
    body.classList.toggle("small-font");
}

// Hace que todo se encuentre en default cuando se recarfgue la pagina.
function setDefault() {
    body.classList.remove("light");
    body.classList.remove("large-font");
    body.classList.add("small-font");
    img.src = "Assets\Imagenes\light.svg"; // Imagen del tema claro
}

setDefault();

// SOn los event listeners para los botones de tamaño y claro/oscuro.
btn.addEventListener('click', changeTheme);
fontBtn.addEventListener('click', changeFontSize);

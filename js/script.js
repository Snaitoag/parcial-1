let textoOriginal = []; // Almacena el texto original de los párrafos
let cambiado = false; // Estado del contenido

function cambiarContenido() {
    let parrafos = document.querySelectorAll(".seccion-p p");
    
    if (textoOriginal.length === 0) {
        // Guarda el texto original la primera vez
        parrafos.forEach(p => textoOriginal.push(p.innerText));
    }

    let nuevosTextos = [
        "Este es un nuevo contenido para el primer párrafo.",
        "El segundo párrafo ahora tiene un nuevo mensaje.",
        "Finalmente, el tercer párrafo también ha cambiado."
    ];

    parrafos.forEach((p, index) => {
        p.innerText = cambiado ? textoOriginal[index] : nuevosTextos[index];
    });

    cambiado = !cambiado; // Cambia el estado
}

function cambiarEstilos() {
    const coloresFondo = ["#ffffff", "#f8f9fa", "#e9ecef", "#dee2e6", "#d6d8db"];
    const coloresTexto = ["#212529", "#343a40", "#495057", "#6c757d", "#000000"];

    let indice = Math.floor(Math.random() * coloresFondo.length);
    
    document.body.style.backgroundColor = coloresFondo[indice];
    document.body.style.color = coloresTexto[indice];
}
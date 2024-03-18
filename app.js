// Declaración de variables
let textIntro = document.querySelector(".text-intro");
let btnEncrypt = document.querySelector(".encrypt");
let btnDesencrypt = document.querySelector(".desencrypt");
let btnCopy = document.querySelector(".btncopy");
let contentRight = document.querySelector(".hidden");
let contentRightText = document.querySelector(".content-right-text");


// Función para mostrar u ocultar el botón de copia funcion escencial
const toggleCopyButton = (shouldShowImg) => {
    btnCopy.style.display = 0;
    btnCopy.style.display = shouldShowImg ? "block" : "none";
};

// Funcion para mostrar el contenido de la derecha funcion escencial
const showContentRight = () => {
    const hasText = textIntro.value.trim() !== "";
    contentRight.style.opacity = hasText ? 1 : 0; // Cambiar la opacidad del contenido de la derecha
    document.body.style.background = hasText ? "rgba(0, 0, 0, 0.5)" : "transparent"; // Cambiar el color de fondo del body
}

// Función para validar el texto
const isValidText = (text) => {
    return /^[a-zA-Z\s]*$/.test(text)
};

// Creamos un arrow function para encriptar
let encrypt = () => {
    let text = textIntro.value.toLowerCase();
    // Validamos que el texto no contenga números ni caracteres especiales y encriptamos el texto
    // trim elimina los espacios en blanco
    if (text.trim() !== "" && isValidText(text)) {
        text = text.replace(/e/g, "enter")
                   .replace(/i/g, "imes")
                   .replace(/a/g, "ai")
                   .replace(/o/g, "ober")
                   .replace(/u/g, "ufat");
        text = `<p class="content-right-p0">${text}</p>`;
        contentRightText.innerHTML = text;
        toggleCopyButton(true);
        textIntro.value = "";
    } else {
        alert("Por favor, ingrese un texto válido que no contenga números ni caracteres especiales.");
        toggleCopyButton(true);
    }
}

// Creamos un arrow function para desencriptar
let desencrypt = () => {
    let text = textIntro.value.toLowerCase();
    if (text.trim() !== "" && isValidText(text)) {
        text = text.replace(/enter/g, "e")
                   .replace(/imes/g, "i")
                   .replace(/ai/g, "a")
                   .replace(/ober/g, "o")
                   .replace(/ufat/g, "u");
        text = `<p class="content-right-p0">${text}</p>`;
        contentRightText.innerHTML = text;
        toggleCopyButton(true);
        textIntro.value = "";
    } else {
        alert("Por favor, ingrese un texto válido que no contenga números ni caracteres especiales.");
        toggleCopyButton(true);
    }
}

// Creamos un arrow function para copiar el texto
let copy = () => {
  let latestElement = contentRightText.querySelector(".content-right-p0");
  if (latestElement) {
    navigator.clipboard.writeText(latestElement.textContent)
    // .then y .catch son funciones para manejar los errores
        .then(() => {
            contentRightText.innerHTML = `
                <img src="./assets/1.png" alt="texto no encontrado">
                <p class="content-right-p1">Ningún mensaje fue encontrado</p>
                <p class="content-right-p2">Ingresa el texto que deseas Encriptar o Desincriptar</p>
            `;
            toggleCopyButton(false); // Ocultamos el botón de copia
            showContentRight();
        })
        .catch((error) => {
            console.error("Error al copiar el texto:", error);
        });
    }
}

// Añadimos los eventos a los botones

// Evento escencial, si detecta texto se mostrara de lo contrario no.
textIntro.addEventListener("input", showContentRight);

btnEncrypt.addEventListener("click", () => {
    encrypt();
});

btnDesencrypt.addEventListener("click", () => {
    desencrypt();
});

btnCopy.addEventListener("click", copy);

// Evento de carga de la página
document.addEventListener("DOMContentLoaded", () => {
    toggleCopyButton(false);
    showContentRight();
});

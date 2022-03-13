// Seleccionar todos los elementos input dentro de la clase "controls"
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // La propiedad dataset es un objeto que contiene los data-attributes del elemento actual definidos,
  // en este caso, en la etiqueta <input>
  const suffix = this.dataset.sizing || "";
  // Para modificar el valor de las variables CSS, se debe seleccionar el documento y acceder a la propiedad
  // "name" de this, el cual es el elemento actual
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// Los métodos que contiene el elemento inputs se pueden ver en la propiedad "__proto__" del elemento.
// Por cada elemento "input" agregar un evento que se ejecute cada que el valor cambie
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// Por cada elemento "input" agregar un evento que se ejecute cada que el mouse se mueva dentro del elemento.
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

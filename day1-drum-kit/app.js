function playSound(e) {
  // Seleccionar un elemento con la etiqueta audio asociándolo con el código de tecla
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Seleccionar un elemento con la clase asociada al código de tecla, este elemento permitirá modificar
  // la clase y los estilos
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // Si no existe una tecla asociada a un etiqueta audio, detiene la función.
  if (!audio) return;
  // Rebobinar al principio del audio
  audio.currentTime = 0;
  // Reproducir el audio.
  audio.play();
  // Agregar la clase "playing" al elemento seleccionado
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Ignorar si la propiedad "propertyName" es diferente a "transform"
  // La palabra reservada "this" hace referencia al elemento que invoca a la función actual, en este caso,
  // al elemento asociado de la tecla presionada y se elimina la clase "playing"
  this.classList.remove("playing");
}

// Seleccionar todos los elementos que pertenezcan a la clase "key"
const keys = document.querySelectorAll(".key");
// Para cada elemento de la lista NodeList, agregar un evento de tipo "transitionend" e invocar a una función.
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

// Agregar un evento al "presionar una tecla"
window.addEventListener("keydown", playSound);

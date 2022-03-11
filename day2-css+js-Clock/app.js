// Seleccionamos el elemento correspondiente a la manecilla de los segundos, mins y horas
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // La constante "now" nos dará la fecha y hora actuales
  const now = new Date();
  // Segundos
  const seconds = now.getSeconds(); // Obtenemos los segundos
  // Para obtener los grados correspondientes de cada segundo, hacemos la siguiente operación
  // dividir los segundos actuales entre 60 (correspondiente a los segundos que hay en un minuto)
  // y multiplicar el resultado por 360 (correspondiente a los grados del reloj) y sumarle 90 a ese resultado
  // debido a la posición inicial asignada al elemento en el css
  const secondDegrees = (seconds / 60) * 360 + 90;
  // Asignar la propiedad transform al estilo css del elemento secondHand
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  // Minutos
  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  // Hour
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

//Seleccionar el div con la clase panels
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	//Agregar/eliminar la clase open
	this.classList.toggle("open");
}

function toggleActive(e) {
	console.log(e.propertyName); // Para ver qué transiociones son aplicadas al elemento
	if (e.propertyName.includes("flex")) {
		//Agregar/eliminar la clase open
		this.classList.toggle("open-active");
	}
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
	panel.addEventListener("transitionend", toggleActive)
);

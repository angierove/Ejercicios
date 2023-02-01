const nombre = "Angelica";
const apellido = "Rojas";
const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

let estudiante_length = estudiante.length;
let primera_nombre = nombre.charAt(0);
let ultima_apellido = apellido.charAt(apellido.length - 1);

const espacios_estudiante = estudiante.replace(" ", "");
let isInEstudiante = estudiante.includes(nombre);
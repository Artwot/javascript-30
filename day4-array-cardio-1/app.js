// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filtrar la lista de inventores que nacieron en el siglo XIV, es decir, de 1500 a 1599
const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // Mantiene el elemento
  }
});
// Otra forma de hacerlo
// const fifteen = inventors.filter(
//   (inventor) => inventor.year >= 1500 && inventor.year <= 1599
// );
console.table(fifteen);

// Array.prototype.map()
// 2. Retornar un array con los nombres y apellidos de cada inventor
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

// Array.prototype.sort()
// 3. Ordenar a los inventores por su fecha de nacimiento, del mayor al menor. Se utiliza el operador ternario
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordered);

// Array.prototype.reduce()
// 4. ¿Cuántos años vivirían todos los inventores?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(`El total de años de los inventores es: ${totalYears}`);

// 5. Ordenar a los inventores por cantidad de años vividos
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. Crear una lista de callse en París que contengan "de" en cualquier parte de su nombre
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")]; //  Retorna un objeto de tipo NodeList, usar un spread
// // operator para convertirlo a un Array

// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

// 7. sort Exercise
// Ordenar el arreglo personas alfabeticamente por apellidos
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sumar cada instancia que aparece en el Array
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);

//objeto - propiedades(atributos) y metodos
const person = {
  name: "Angel",
  age: 28,
  weight: 110.5,
  greet() {
    //metodo del objeto
    console.log("Hi, my name is " + this.name);
  },
  //greet: function () {   //la funcion flecha no tiene metodo this
  //console.log("Hi, my name is " + this.name);
};

//console.log(person);
person.greet();

//Arrays
const sports = ["Yoga", "Football", "Skateboarding", "Tennis"];

for (let sport of sports) {
  console.log(sport);
}

//modificar el valor del arrary con una funcion y lo guarda en otro array
const detail = sports.map((info) => "Sport: " + info);
console.log(detail);

//punteros: objetos y arrays son tipo de datos de referencia
//because the array sports apunta a la direccion y eso no cambia asi se agreguen elementos
//x eso no da error a pesar de ser const
sports.push("Badminton");
console.log(sports);

//metodo Spread ... funciona para arrayas y objetos
const otherArray = [...sports];
console.log("Areglo copiado");
console.log(otherArray);
const otherPerson = { ...person };
console.log(otherPerson);

//destructuramiento - aplica a objetos y arrays
//las varaibles a extraer deben tener los mismos nombres que los atributos
const printName = ({ name }) => {
  console.log(name);
};
console.log("Destructuracion 1");
printName(person);

console.log("Destructuracion 2");
const { name, age } = person;
console.log(name, age);

//destruc de arrays
console.log("Destructuracion de arrays");
const [sport1, sport2, sport3, sport4, sport5, sport6] = sports;
console.log(sport5);

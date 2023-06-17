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

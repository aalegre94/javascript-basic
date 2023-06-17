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

const detail = sports.map((info) => "Sport: " + info);

console.log(detail);

const numeros = [1, 2, 3, 4, 5];

const duplicados = numeros.map(function (numero) {
  return numero * 2;
});

console.log(duplicados); // Output: [2, 4, 6, 8, 10]

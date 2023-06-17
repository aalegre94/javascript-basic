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

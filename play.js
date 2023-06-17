//const --> se usa para constantes
const name = "Angel";
//let --> se usar para varibles cambiantes, es mas actual que var
let age = 28;
var hasHobbies = true;

age = 30;
//funcion normal
// function sumarizeUser(userName, userAge, userHasHobby) {
//     return (
//         'Name is ' +
//         userName +
//         ', age is ' +
//         userAge +
//         ' and the user has hobbies ' +
//         userHasHobby
//     );
// }
// console.log(sumarizeUser(name, age, hasHobbies));

//funcion flecha
const suma = (a, b) => {
  return a + b;
};
console.log(suma(5, 4));
//mas corta
const resta = (c, d) => c - d;
console.log(resta(8, 3));
//si solo tienes un argumento
const oneMore = (e) => e + 1;
console.log(oneMore(3));
//sin argumentos
const numberRandon = () => 5 * 8;
console.log(numberRandon());

const sumarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies " +
    userHasHobby
  );
};
console.log(sumarizeUser(name, age, hasHobbies));

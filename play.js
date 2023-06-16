//const --> se usa para constantes
const name = 'Angel';
//let --> se usar para varibles cambiantes, es mas actual que var
let age = 28;
var hasHobbies = true;

age = 30;

function sumarizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHasHobby
    );
}


console.log(sumarizeUser(name, age, hasHobbies));
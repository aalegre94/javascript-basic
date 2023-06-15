var name = 'Angel';
var age = 28;
var hasHobbies = true;

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
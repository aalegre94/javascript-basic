//asincr anidado
// const getData = (callback) => {
//   setTimeout(() => {
//     callback("Hecho");
//   }, 3000);
// };

//promesas
const getData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hecho");
    }, 3000);
  });
  return promise;
};

setTimeout(() => {
  console.log("Tiempo ha acabado!!");
  getData().then((text) => {
    console.log(text);
  });
}, 2000);

//codigo asincronico - xq la ejecucion no es lineal
// setTimeout(() => {
//   console.log("Tiempo ha acabado!!");
//   getData((text) => {
//     console.log(text);
//   });
// }, 2000);

//codigo sincronico
console.log("Holaaaaa!");
console.log("Hola q aze");

const promise = new Promise(function (resolve, reject){
    resolve('Todo correcto')
});

const cows = 9;

const countCows = new Promise(function (resolve,reject){
    if(cows > 10){
        resolve('Minimo desesado');
    } else{
        reject('No se comple el minimo deseado');
    }
})

countCows.then((result) => {
    console.log(result);
})
.catch((result) => {
    console.log(result);
})
.finally(() => {
    console.log('Finalizo la promesa');
});
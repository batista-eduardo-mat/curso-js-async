function sum(a, b){
    return a + b;
}

function calc(a, b, funCallBack){
    return funCallBack(a,b);
}

console.log(calc(10,10,sum))

setTimeout(function (){
    console.log('Hola JavaScript');
},500);

function greeting(name = '', lastName){
    console.log(`hola ${name} ${lastName}!`);
}

setTimeout(greeting, 2000, 'Eduardo');

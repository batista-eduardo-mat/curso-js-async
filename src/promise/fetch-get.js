import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
}
// TODOS LOS DATOS
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() =>{
//         console.log('hola');
//     })
//     .catch(error => console.log(error));

// MULTIPLES LLAMADOS

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        console.log('1')
        return fetchData(`${API}/products/${products[1].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        console.log('2')
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
        console.log('3')
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Terminado'));
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'POST',
        mede: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'   
        },
        body: JSON.stringify(data)
    })
    return response;
}

const data = {
    "title": "Mac Book Pro",
    "price": 24800,
    "description": "MACBOOK-PRO M1",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => {
        console.log(data)
    });
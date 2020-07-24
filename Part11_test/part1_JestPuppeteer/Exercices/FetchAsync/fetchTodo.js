const url = 'https://jsonplaceholder.typicode.com/todos';

const fetch = require('node-fetch');

const fetchTodo = id => {
    return fetch(`${url}/${id}`);
}

const parity = number =>  new Promise( (resolve, reject) => {
    if( number % 2 === 0) reject("even");
    else resolve("odd");
  });

module.exports = { fetchTodo : fetchTodo, parity : parity } ;

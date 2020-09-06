import {fruits,animals} from './database.js';


console.log(fruits);
console.log(animals);


for(let i = 0;i<fruits.length;i++){
    let node = document.createElement('p');
    let list = document.createTextNode(`${fruits[i]}`);
    node.appendChild(list);
    document.getElementById('placing').appendChild(node);
}

for(let i = 0;i<animals.length;i++){
    let node = document.createElement('p');
    let list = document.createTextNode(`${animals[i]}`);
    node.appendChild(list);
    document.getElementById('placing').appendChild(node);
}
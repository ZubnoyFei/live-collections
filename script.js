'use strict';

const boxesQuery = document.querySelectorAll('.box');

const boxesGet = document.getElementsByClassName('box');

boxesQuery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log(boxesGet);

console.log(boxesQuery);

//console.log(document.body.children);

console.log(Array.from(boxesGet));//  В консолі ми отримуємо звичайний масив



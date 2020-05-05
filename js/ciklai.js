"use strict";
const from = 0;
const till = 11;
const divider =3;
let count = 0;

for (let i=from; i<=till; i++){    
    if(i%divider===0){
        count++;
    }
}
console.log(count);

console.log('........');

//funkcija
function tusciaFunkcija(){

}
console.log(tusciaFunkcija());


console.log('........');

const skaicius1=2
const skaicius2=-8

function daugyba(num1, num2){
    if (typeof num1 !=='number'){
        return console.log('Klaida...');
    }
    if (typeof num2 !=='number'){
        return console.error('Klaida...');
    }
    return console.log(num1*num2);
}

( daugyba(4, skaicius2));
( daugyba(1, 12));
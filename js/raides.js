'use strict'

function isrinktiRaides(text,step){
    if (typeof(text)!== 'string'){
        return 'Pirmasis kintamasis turi būti tekstinis.';
    }
    if (typeof(step)!== 'number'){
        return 'Antrasis kintamasis turi būti skaitinis.';
    }
    if (!isFinite(step)){
        return 'Antrasis kintamasis turi būti sveikasis skaicius.';
    }
    let answer =""
    return answer;
}
console.log( isrinktiRaides( 'abcdefg', 2 ) );

console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );

console.log( isrinktiRaides( 'abc', 0 ) );
// “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( 'abc', 4 ) );
// “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
// “Pirmasis kintamasis yra netinkamo tipo.”


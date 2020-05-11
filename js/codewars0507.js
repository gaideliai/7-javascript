"use strict";

var splitInParts = function(s, partLength){
    let w = '';
    for (let i=0; i<s.length; i++) {
      if (i%partLength===0 && i!==0) {
        w += " ";
      }
      w += s[i];
    }
    return w;
}

//console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s");

//---------------------------------

//see if letters in "String 1" are present in "String 2"

function letterCheck(arr) {
    let first = arr[0];
    let second = arr[1];
    let count = 0;
    for (let a=0; a<second.length; a++) {
        let letter = second[a];    
        if (first.toLowerCase().indexOf(letter) >= 0) {
            count++;
        }
    }
    return count === second.length;
}

function letterCheck(arr) {
    let string1 = arr[0].toLowerCase()
    let string2 = arr[1].toLowerCase()
    return string2.split('').every(letter => string1.includes(letter))
}

// console.log(letterCheck(["ab", "aaa"]), true);
// console.log(letterCheck(["trances", "nectar"]), true);
// console.log(letterCheck(["THE EYES", "they see"]), true);
// console.log(letterCheck(["assert", "staring"]), false);
// console.log(letterCheck(["arches", "later"]), false);
// console.log(letterCheck(["dale", "caller"]), false);
// console.log(letterCheck(["parses", "parsecs"]), false);
// console.log(letterCheck(["replays", "adam"]), false);
// console.log(letterCheck(["mastering", "streaming"]), true);
// console.log(letterCheck(["drapes", "compadres"]), false);
// console.log(letterCheck(["deltas", "slated"]), true);

//------------------------------------------------

//Fibonacci sequence

function Fibonacci (n1, n2) {
    console.log(n1, n2);
    let n= n1+n2;
    while (n < 200) {
        n = n1+n2;
        console.log(n);
        n1=n2;
        n2=n;        
    }
}

//Fibonacci(0, 1);

//Rekursija Fibonacci

function Fibonacci (n1, n2) {
    console.log(n1);
    if (n1<200) {
        Fibonacci(n2, n1+n2);
    }
}

Fibonacci(0, 1);

//--------------------------------------------------

//factorial

function factorial (n) {
    let fakt = 1;
    while (n>=2) {
        fakt *= n*(n-1);
        n=n-2;
    }
    return fakt;
}

//console.log(factorial(12));

//--------------------------------------------------

function nthFibo(n) {
    if (n==1) return 0;
    if (n==2) return 1;
    let n1=0;
    let n2=1;
    let i=2;
    let fibn = n1+n2;
    while (i !== n) {
        fibn = n1+n2;
        i++;
        n1=n2;
        n2=fibn;
    }
    return fibn;
}

//console.log(nthFibo(5));

// function nthFibo(n) {
//     let a = 0; 
//     let b = 1;
    
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return n == 1? a: b;
// }

function nthFibo(n) {
    return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
}
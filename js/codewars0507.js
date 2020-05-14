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

//Fibonacci(0, 1);

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

//------------------------------------------

//Genetic Algorithm Series - #3 Crossover

const crossover = (ch1, ch2, index) => {
    let arr = [];
    let chr1=ch1.slice(0, index)+ch2.slice(index, ch2.length);
    let chr2=ch2.slice(0, index)+ch1.slice(index, ch1.length);
    arr.push(chr1);
    arr.push(chr2);
    return arr;
};

// const crossover = (chromosome1, chromosome2, index) => {
//     return [
//       chromosome1.substring(0, index) + chromosome2.substring(index),
//       chromosome2.substring(0, index) + chromosome1.substring(index)
//     ]
// };

//--------------------------------------------

function orderedCount (text) {
    let count = 1;
    let result = [];
    for (let i=0; i<text.length; i++) {
        let ar = [];
        let letter = text[i];
        for (let j=0; j<text.length; j++) {
            if (i === j) {
                continue;
            }
            if (letter === text[j]) {
                count++;
            }
        }
        ar.push(letter);
        ar.push(count);
        count = 1;                  
        result.push(ar);        
    }    
    return result;
}

//console.log(orderedCount ("abracadabra"));

//------------------------------------------------------

//Largest 5 digit number in a series

function solution(digits){
    let ar = [];
    for (let i=0; i<digits.length; i++) {
      let substring = digits.substr(i, 5);
      ar.push(Number(substring));
    }
    console.log(ar);
        
    return Math.max(...ar);
}

//console.log(solution("1234567890123456"));

//-----------------------------------------------------

//You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

function myLanguages(results) {
    let ar = [];
    Object.keys(results).forEach(function (score) {
        ar.push(score);       
    })
    let max = results[ar[0]];
    console.log(max);
    let temp = 0;
    for (let i=0; i<ar.length-1; i++) {
        for (let j=i+1; j<ar.length; j++) {  
            if (results[ar[i]] > results[ar[j]]) {
                temp = results[ar[i]];
                results[ar[i]] = results[ar[j]];
                results[ar[j]] = temp;
            }
        }
    }
    return ar;
}

// console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}));
// console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71}));
//console.log(myLanguages({"C++": 50, "ASM": 10, "Haskell": 20}));

//---------------------------------------

//Basic calculator

function calculate(num1, operation, num2) {
    switch (operation){
      case "+": return num1+num2;
      case "-": return num1-num2;
      case "*": return num1*num2;
      case "/": return num2===0 ? null : num1/num2;
      default: return null;
    } 
}

//---------------------------------------

//Reverse array function

function reverse (array) {
    let newArray = [];
    for (let i=0; i<array.length; i++) {
        newArray[i] = array[array.length-1-i];
    }
    return newArray;
}

// console.log(reverse([1,2,3]));
// console.log(reverse([1,null,14,"two"]));
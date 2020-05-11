"use strict";

//Define String.prototype.toAlternatingCase such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
    let text = '';
    for (let i=0; i<this.length; i++) {
        if (this[i] === this[i].toLowerCase()) {
            text += this[i].toUpperCase();
        } else {
            text += this[i].toLowerCase();
        }
    }
    return text;
    
  }

// console.log("hello world".toAlternatingCase(), "HELLO WORLD");
// console.log("HELLO WORLD".toAlternatingCase(), "hello world");
// console.log("hello WORLD".toAlternatingCase(), "HELLO world");
// console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
// console.log("12345".toAlternatingCase(), "12345");
// console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
// console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
// console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
}

function strSplit(str) {
    var res = str.split("");
    console.log(res);
}

function strJoin(list) {
    var res = list.join("");
    console.log(res);
}

// strSplit("How are you doing today?");
// strJoin(["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", " ", "t", "o", "d", "a", "y", "?"]);

//---------------------------------

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases.

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100;
    } else if (exam > 75 && projects >= 5) {
      return 90;
    } else if (exam > 50 && projects >= 2) {
      return 75;
    } else {
      return 0;
    }
}
// console.log(finalGrade(100, 12), 100);
// console.log(finalGrade(85, 5), 90);

// const finalGrade = (exam, projects) => {
//     return (
//       exam > 90 || projects > 10 ? 100 :
//       exam > 75 && projects >= 5 ? 90 :
//       exam > 50 && projects >= 2 ? 75 : 0
//     )
// }

//------------------------------------------

function fixTheMeerkat(arr) {
    let array = [];
    array.push(arr[2], arr[1], arr[0]);
    
    return array;
}

// console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
// console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
// console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
// console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
// console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);

function fixTheMeerkat(arr) {
    return arr.reverse();
}

//-----------------------------------------

//I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
    if (nbPetals%6 === 1) {
      return "I love you";
    }
    if (nbPetals%6 === 2) {
      return "a little";
    }
    if (nbPetals%6 === 3) {
      return "a lot";
    }
    if (nbPetals%6 === 4) {
      return "passionately";
    }
    if (nbPetals%6 === 5) {
      return "madly";
    } else {
      return "not at all";
    }
}
// console.log(howMuchILoveYou(7),"I love you");
// console.log(howMuchILoveYou(3),"a lot");
// console.log(howMuchILoveYou(6),"not at all");

//---------------------------------------------------

//There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the paleolithic era B.) It will ask you for tree fiddy.

function isLockNessMonster(s) {
    if(s.indexOf('tree fiddy')>0 || s.indexOf('3.50')>0) {
      return true;
    } else {
      return false;
    }
  }

//--------------------------------------------------

//String incrementer

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

function incrementString (strng) {
    let last = strng.slice(-1);
    let num = parseInt(last);
    if (Number.isInteger(num) && num<9) {
        strng=strng.slice(0, -1)+(num+1);
    }
    if (!Number.isInteger(num)){
        strng+=1;
    }
    // Test Passed: 'foo' -> 'foo1'
    // Test Passed: 'foobar001' -> 'foobar002'

    let count = 0;
    if (num == 9) {
        for (let i=1; i<strng.length; i++) {
            if (strng.slice(-i)>=0){
                count++;
            }
        }
        last = strng.slice(-count);
        //console.log(last);
                        
        num = parseInt(last);        

        if (last[1]==0) {
            let zeroCount = 1;
            for (let i=1; i<last.length-2; i++){
                if (last[i]==0) {
                    zeroCount++;
                }
            }            
            strng=strng.slice(0, (-count+zeroCount-1))+(num+1);
        } else {
            strng=strng.slice(0, -count)+(num+1);
        }        
    }
    return strng;
}

// console.log(incrementString("foobar000"), "foobar001");
// console.log(incrementString("foo"), "foo1");
// console.log(incrementString("foobar001"), "foobar002");
// console.log(incrementString("foobar9"), "foobar10");
// console.log(incrementString("foobar99"), "foobar100");
// console.log(incrementString("foobar989"), "foobar990");
// console.log(incrementString("foobar099"), "foobar100");
// console.log(incrementString(""), "1");
// console.log(incrementString("foobar00999"), "foobar01000");
// console.log(incrementString("foobar00000999"), "foobar00001000");

//-----------------------------------------------

// Number of trailing zeros of N!

function zeros (n) {
    let zeros = Math.floor(n/5) + Math.trunc(n/25) + Math.trunc(n/105);  
    return zeros;
}

// console.log(zeros(0), 0, "Testing with n = 0");
// console.log(zeros(5), 1, "Testing with n = 5");
// console.log(zeros(30), 7, "Testing with n = 30");
// console.log(zeros(50), 12, "Testing with n = 50");
// console.log(zeros(99), 22, "Testing with n = 99");
// console.log(zeros(100), 24, "Testing with n = 100");
// console.log(zeros(999), 246, "Testing with n = 999");
// console.log(zeros(1000), 249, "Testing with n = 1000");

//-----------------------------------------------

//Abbreviate a Two Word Name

function abbrevName(name){
    name = name.split(' ');
    return name[0][0].toUpperCase()+"."+name[1][0].toUpperCase();    
}

//-----------------------------------------

//Is the string uppercase?

// String.prototype.isUpperCase = function() {
//     if (this.length>0) {
//         let count = 0;
//         for (let i=0; i<this.length; i++) {
//             if (this[i] === this[i].toUpperCase() || this[i] === " "){
//                 count++;
//             }       
//         }           
//         return count===this.length;      
//     } else return true;
// }

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this;
}

// console.log(''.isUpperCase() !== undefined, 'Must define the prototype isUpperCase')
// console.log('c'.isUpperCase(), false, 'c is not upper case');
// console.log('C'.isUpperCase(), true, 'C is upper case');
// console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
// console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
// console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
// console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

//-----------------------------------------------------------------

function removeEveryOther(arr){
  let newarr = [];
  for (let i=0; i<arr.length; i+=2) {
    newarr.push(arr[i]);    
  }
  return newarr;
}

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeEveryOther([[1, 2]]));
// console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));

//------------------------------------------------------------------

//Watermelon

function divide(weight){
  return weight === 2 ? false: weight%2===0;
}

// console.log(divide(4), true);
// console.log(divide(2), false);
// console.log(divide(5), false);
// console.log(divide(88), true);

//-------------------------------------------------------------------

// function noBoringZeros(n) {
//   if (n===0 || Math.abs(n%10)>0) {
//     return n;
//   }
//   let count = 1;
//   let num = n;
//   while (Math.abs(num)>1) {
//    if (num%10===0){
//       count*=10;
//    }
//    num/=10;
//   }
//   return n/(count);  
// }

function noBoringZeros(n) {
  while(n%10===0 && n!==0){
    n/=10;
  }
return n;
}


// console.log(noBoringZeros(1450), 145);
// console.log(noBoringZeros(960000), 96);
// console.log(noBoringZeros(1050), 105);
// console.log(noBoringZeros(-1050), -105);
// console.log(noBoringZeros(-105), -105);
// console.log(noBoringZeros(0), 0);

//----------------------------------------------

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let total = 0;
  for (let i=0; i<classPoints.length; i++) {
    total += classPoints[i];
  }
  let avg = total/classPoints.length;
  return avg < yourPoints;
}

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

//--------------------------------------------

// Reversed string

function solution(str){
  let newstr = '';
  for (let i=str.length-1; i>=0; i--) {
    newstr += str[i];
  }
  return newstr;
}

function solution(str){
  return str.split('').reverse().join('');  
}

//-------------------------------------------

//Convert number to reversed array of digits

function digitize(n) {
  let str = n.toString();
  str.split('').reverse().map(a => parseInt(a));
  return 
}

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

//console.log(digitize(35231),[1,3,2,5,3]);

//--------------------------------------------

// Remove First and Last Character

function removeChar(str){
  return str.slice(1, -1);
}

//---------------------------------------------

//Sum Mixed Array

function sumMix(x){
  return x.map(Number).reduce((a, b)=>a+b, 0);
}

//console.log(sumMix([9, 3, '7', '3']), 22);

//---------------------------------------------

const reverseSeq = n => {
  let arr = [];
  for (let i=n; i>0; i--) {
    arr.push[i];
  }
  return arr;
}

//console.log(reverseSeq(5), [5, 4, 3, 2, 1]);

//---------------------------------------------

//Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(a => a*2);
}

//---------------------------------------------

// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
  let arr = [];
  for (let i=1; i<=n; i++) {
    arr.push(i);
  }
  return arr;
}

//--------------------------------------------

function between(a, b) {
  let arr = [];
  for (let i=a; i<=b; i++) {
    arr.push(i);
  }
  return arr;
}

//---------------------------------------------

function calculateTip(amount, rating) {
  if (rating.toLowerCase() === "terrible") {
    return 0;
  }
  if (rating.toLowerCase() === "poor") {
    return Math.ceil(amount/100*5);
  }
  if (rating.toLowerCase() === "good") {
    return Math.ceil(amount/100*10);
  }
  if (rating.toLowerCase() === "great") {
    return Math.ceil(amount/100*15);
  }
  if (rating.toLowerCase() === "excellent") {
    return Math.ceil(amount/100*20);
  } else {
    return "Rating not recognised";
  }
}

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible": return 0;
    case "poor": return Math.ceil(amount * 0.05);
    case "good": return Math.ceil(amount * 0.1);
    case "great": return Math.ceil(amount * 0.15);
    case "excellent": return Math.ceil(amount * 0.2);
    default: return "Rating not recognised";
  }
}

// const calculateTip = (a,r) => {
//   const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase());
//   return i === -1 ? "Rating not recognised" : Math.ceil(i*a*.05);
// }

// function calculateTip(amount, rating) {
//   rating = rating.toLowerCase();
//   return rating === 'terrible' ? 0
//        : rating === 'poor' ? Math.ceil(amount * 0.05)
//        : rating === 'good' ? Math.ceil(amount * 0.1)
//        : rating === 'great' ? Math.ceil(amount * 0.15)
//        : rating === 'excellent' ? Math.ceil(amount * 0.2)
//        : "Rating not recognised";
// }
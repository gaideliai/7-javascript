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

// function fixTheMeerkat(arr) {
//     return arr.reverse();
// }

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
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
    return (text);
    
  }

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");
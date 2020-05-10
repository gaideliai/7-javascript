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
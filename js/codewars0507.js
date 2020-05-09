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

console.log(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
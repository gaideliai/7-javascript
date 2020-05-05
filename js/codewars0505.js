// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine" 
//  "Politician"	"Your tax dollars" 
//  "Rapper"	"Cristal" 
//  *anything else*	"Beer" 
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

//assuming you can't change data in const matchDriks
function getDrinkByProfession(param){
const matchDrink = {
                    "Jabroni": "Patron Tequila",
                    "School Counselor": "Anything with Alcohol",
                    "Programmer":  "Hipster Craft Beer",
                    "Bike Gang Member": "Moonshine",
                    "Politician": "Your tax dollars",
                    "Rapper": "Cristal",
                    "other": "Beer" 
                    }
param = param.toLowerCase();
param = param[0].toUpperCase() + param.slice(1);
paramList = param.split(' ');

if (paramList.length>1) {
    param = '';
    for (let i=0; i<paramList.length; i++) {
        word = paramList[i];
        param += word[0].toUpperCase() + word.slice(1)+ ' ';
    }
    param = param.slice(0, -1);
}

if (!matchDrink[param]) {
     return console.log(matchDrink.other);
} else

return console.log(matchDrink[param]);

}

//getDrinkByProfession("poLiTiCian");

// function getDrinkByProfession(param) {
//     param = param.toLowerCase();
    
//     switch(param) {
//       case "jabroni": return "Patron Tequila";
//       case "school counselor": return "Anything with Alcohol";
//       case "programmer": return "Hipster Craft Beer";
//       case "bike gang member": return "Moonshine";
//       case "politician": return "Your tax dollars";
//       case "rapper": return "Cristal";
//       default: return "Beer";
//     }
//   }
//-----------------------------------------------------------
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time/2);
  }

//------------------------------------------------------------
//   Very simple, given a number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number;
}
//------------------------------------------------------------
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
      sum += i;
    }
    
    return sum;
}

//---------------------------------------------------
// You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:

// You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.

// You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:

// the number of blue marbles you put in the bag to start
// the number of red marbles you put in the bag to start
// the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
// the number of red marbles pulled out so far (always lower than the starting number of red marbles)
// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let marblesLeft = blueStart+redStart-bluePulled-redPulled;
    let blueLeft = blueStart-bluePulled;
      return blueLeft/marblesLeft;
    }

//---------------------------------------------------
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
    let string = '';
      for (let i=0; i<one.length; i++){
        string+=one[i]+two[i]+three[i];
      }
      return string;
}
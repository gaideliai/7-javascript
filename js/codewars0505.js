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

getDrinkByProfession("poLiTiCian");

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
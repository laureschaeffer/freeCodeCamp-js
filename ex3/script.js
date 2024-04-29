const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

//if the user makes an error later
let isError = false;


//The character class \s will match any whitespace character.
//The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match. 
function cleanInputString(str) {
    const regex = /[+-\s]/g;
  }
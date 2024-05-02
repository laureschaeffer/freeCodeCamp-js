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
  return str.replace(regex, '');
}

//the i flag is for uppercase and lowercase
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  // const regex = /[0-9]+e[0-9]+/i; shorthand character class to match any digit: \d
  return str.match(regex);
}

// console.log(isInvalidInput("1e3"))

function addEntry() {
  targetId = "#" + entryDropdown.value ; //get the select entity ID that the user chose
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
  
}

function getCaloriesFromInputs(list) {
  let calories = 0;


}
// all elements 
const checkBtn = document.querySelector('#check-btn');
const txtInput = document.querySelector('#text-input');
const result = document.querySelector('#result');



checkBtn.addEventListener('click', compareStr);

//clean the input then compare 2 strings
function compareStr() {
    var inputValue = txtInput.value;

    //check if it's not empty
    if(inputValue === ""){
        alert("Please input a value");
    } else {

        //regex that only allow letters and numbers
        const regex = /[^a-zA-Z0-9]/g;
        // const regex = /[\W_]/g ;
        // replace every unwanted characters and give only lowercase
        var stringCleaned = inputValue.replace(regex, '');
        var stringLow = stringCleaned.toLowerCase();
        console.log(stringLow)
    
        //get the inversed string
        // The split() method divides the string into an array of characters, reverse() reverses the array, and join() combines the reversed characters into a new string, effectively reversing the original string
        var strRev =  stringLow.split('').reverse().join('');
    
        //check if they both match
        var output =""
        if(stringLow == strRev){
            output = " is a palindrome";
        } else {
            output = " is not a palindrome";
        }
    
        //add to the dom the result
        return result.innerHTML = `<p>"${inputValue}" ${output}</p>`

    }
  }



  
  
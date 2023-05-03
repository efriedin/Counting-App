//import html elements
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

//initialize JS variables
let count = 0;

//create function to increment count 
function increment() {
    //increment value of count by 1
    count ++;
    //store in countEL to display on screen
    countEL.innerText = count; 
}


//create function to save count
function save() {
    //created variable to save count value
    let countStr = count + " - ";
    //add count value to html
    saveEL.textContent += countStr;
    //set countEL to zero
    countEL.textContent = 0;
    //set count to zero
    count = 0;
}
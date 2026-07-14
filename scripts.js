/**** DOM BASICS ****/

/** ONE ELEMENT TO BE MANIPULATED **/

// DEMO: Declare an object representing the box element
const box =document.getElementById('box');

/*** CHANGE THE BORDER THICKNESS ***/

// DEMO: Declare objects representing the three width buttons
const four = document.getElementById('4'); //id Name is 4 -- 4 pixels wide
const eight = document.getElementById('8'); //8 pixels wide
const twelve = document.getElementById('12'); //12 pixels wide

// DEMO: Define a reusable function that manipulates the border-width property
function changeBorderWidth(width) {
    console.log('Make it ${width} pixels thick!');
    box.style.borderWidth = width + 'px';
}

// DEMO: Create listeners to change thickness of box border
four.addEventListener('click', () => changeBorderWidth(4));
eight.addEventListener('click', () => changeBorderWidth(8));
twelve.addEventListener('click', () => changeBorderWidth(12));

/* four.addEventListener('click', () =>{})
    - go to this object that represents an element and add a listener
    - anonymous function is a placeholder */

/*** CHANGE THE BORDER COLOR ***/

// DEMO: Declare objects representing the three color buttons
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

// DEMO: Define a reusable function to manipulate the border-color property
function changeBorderWidth(element, hexCode) {
    console.log(`Make it $${element.id}!`);
    box.style.borderColor = hexCode;
}

// DEMO: Create listeners to change color of border to same hex values as buttons
// Note: DOM can't access style sheets, so we must provide the color codes
red.addEventListener('click', () => changeBorderWidth('red', '#a7240d')); //should match css value
yellow.addEventListener('click', () => changeBorderWidth('red', '#ddac0a'));
blue.addEventListener('click', () => changeBorderWidth('red', '#0d64b6'));

/*** CHANGE THE BORDER STYLE ***/

// TODO: Declare objects representing the three style buttons

// TODO: Define a reusable function that manipulates the border-style property

// TODO: Create listeners to change style of box border

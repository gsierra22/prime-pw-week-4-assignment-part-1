console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function sayHello() {
console.log ('Hello World!')
}
sayHello();
 // return 'Hello World!';

// Call the function to test
//console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
//function helloName( name ) {
//  return;
//}
// Remember to call the function to test
function helloName(name){
  console.log('Hello', name);
}
helloName('Giancarlo')
helloName('Person')
// 3. Function to add two numbers together & return the result
//function addNumbers( firstNumber ) {
  // return firstNumber + secondNumber;
//}
function addition(number1, number2){
  let answer = number1 + number2
return answer;
}
console.log( addition(9, 8));


// 4. Function to multiply three numbers & return the result
//function multiplyThree( ){}

function multiply(number1, number2, number3){
  let answer = number1 * number2 * number3
return answer;
}
console.log( multiply(9, 8, 2));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
//function isPositive( number ) {
  //if ( number > 0 ){
 //   return;
 // }
 //   return;
//}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
//console.log( 'isPositive - should say true', isPositive(3) );
//console.log( 'isPositive - should say false', isPositive(0) );
//console.log( 'isPositive - should say false', isPositive(-3) );
function isPositive(number) {
  let truth = true
  if (number > 0)
  return truth;

  else ( number < 0) 
    let notTrue = false
    return notTrue
  }
console.log(isPositive(3))
console.log(isPositive(0))
console.log(isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
//function getLast( array ) {}

let colors = ['red','purple','blue']
function lastColor(){
  console.log(colors[colors.length-1])
}

let blank =[]
function blankety(){
  console.log(blank[blank-1])
}
lastColor()
blankety()
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
//function find( value, array ){}

let planets= ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
 function find(string, planets) {
for(let i= 0; i<planets.length; i++)
{
  console.log(planets[i])
if (planets[i] === string){console.log(true)}

else console.log(false)
}
 }
console.log(find('Earth', planets))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
}

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let stretch= [9, 7, 8, 2, 22]
function sumAll( ) {
  let sum=0
  for (let i = 0; i < stretch.length; i++){
    sum += stretch[i];
  }
  return sum;
}
console.log(sumAll())

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// I picked a problem to converted hours into seconds. You create a function that takes in a number.
// It then multiplies the number by 60 and then that number by 60 and returns the final answer.
//The final answer should be the number of seconds in that number of hours.
function howManySeconds(number) {
	let seconds = number * 60 * 60
	return seconds
	
}
console.log(howManySeconds(3))
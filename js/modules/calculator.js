// ADD A PRIVATE FUNCTION CALLED CALCULATE

function calculate(){};

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////

// ADD FUNCTION
function addValues(one,two){

    return one + two;

};
// SUBTRACT FUNCTION
function subtractValues(one, two){

    return one - two;
};
// MULTIPLY FUNCTION
function multiplyValues(one, two){

    return one * two;

};
// DIVIDE FUNCTION
function divideValues(one,two){

    return one / two;

};

// EXPORT THE FOUR PUBLIC FUNCTIONS

export {addValues};
export {subtractValues};
export {multiplyValues};
export {divideValues};



// The Basic Calculator (25 points)

// In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions and modules. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:

// Create a module that abstracts away the main calculation logic of your application. This module will have a private function called calculate and expose four different functions (add, subtract, multiply, and divide). The shell of this module with some basic instruction has already been outlined for you.
// In the main script, prompt the user for a number and store that in a variable. Convert that to a number.
// Then, prompt the user for a second number and store that in a variable. Convert that to a number.
// Finally, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// Use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation by calling the appropriate function from the module.
// Display the result of the calculation within an alert.
// Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
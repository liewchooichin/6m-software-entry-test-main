/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/
// To swap two variables using sum and substraction.
// At first x = 10, y = 7;
// After swap, x = 7, y = 10;
// Step 1: 
// x = x + y (x = 10 + 7 = 17)
// y = x - y (17 - 7 = 10) This is the value of y after swapping.
// x = x - y (17 - 10 = 7) This is the value of x after swapping.
function swap(x, y) {
    // Task 1: Add code here
    //console.log("typeof(x): ".concat(typeof (x), ", typeof(y): ").concat(typeof (y)));
    console.log("Before swapping: x=".concat(x, ", y=").concat(y));
    // Check for number
    if (typeof (x) !== "number" || typeof (y) !== "number") {
        //console.log("One of the parameters is not a number");
        return -1;
    }
    else {
        x = x + y;
        y = x - y;
        x = x - y;
        console.log("After swapping: x=".concat(x, ", y=").concat(y));
        return 0;
    }
}
// Task 2: Add code here
// Get the result from the swamp
var result;
// swap 1
result = swap("Apple", 10);
console.log("Result from  swap(\"Apple\", 10): ".concat(result));
// swap 2
console.log();
result = swap(9, 17);
console.log("Result from  swap(9, 17): ".concat(result));

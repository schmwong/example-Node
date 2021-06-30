let x = 12.0;

x = "Dixant";

console.log(`His name is: ${x}`);
// console.log(`Value of x: ${x}`);
// console.log("Value of x: " + x);

// Conditional Statements
let age = 10;
if(age>18){
    console.log("You can vote!");
} else {
    console.log("You cannot vote right now.");
}

// Functions
// Defining
function print_sum(a, b) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);

    console.log(`a + b = ${a + b}`);
}

function add(a, b) {
    return a + b;
}
// Calling
print_sum(2, 3);

var sum = add(2, 3);
console.log(`Sum: ${sum}`);


// Anonymous functions
// Defining
var function_to_print_sum = function(a, b) {
    console.log("a + b = " + (a + b));
};
// Invoking
function_to_print_sum(4, 4);


// Arrow Functions: Used more in Node JS
var function_to_print_sum = (a, b) => {
    console.log("a + b = " + (a + b));
};
function_to_print_sum(4, 4);

// Callback Function is tasked as a parameter
// operation is the callback function in this example
function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
}

function add(a, b) {
    return a + b
}

function product(a, b) {
    return a * b
}

print_after_operation(3, 4, add);
print_after_operation(3, 4, product);
// Anonymous function that runs only for this instance
print_after_operation(3, 4, (a, b) => {
    return a - b;
});
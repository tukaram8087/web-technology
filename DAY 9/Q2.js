"use strict";
const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const mul = (a, b) => {
    return a * b;
};
const div = (a, b) => {
    return a / b;
};
function calculator(num1, num2, operation) {
    return operation(num1, num2);
}
console.log("Sum:", calculator(10, 20, add));
console.log("multiply", calculator(10, 20, mul));

"use strict";
function getPropertyValue(obj, key) {
    return obj[key];
}
const emp = {
    firstName: "Tukaram",
    lastName: "Chate",
    age: 24,
    salary: 75000,
    email: "tukaram@cdac.in"
};
const empName = getPropertyValue(emp, "firstName");
const empAge = getPropertyValue(emp, "age");
console.log("First Name:", empName);
console.log("Age:", empAge);

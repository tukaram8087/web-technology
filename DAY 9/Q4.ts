"use strict";
interface Employee{
    firstName:string;
    lastName:string;
    age:number;
    salary:number;
    email:string;
}
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const emp : Employee = {
    firstName: "Tukaram",
    lastName: "Chate",
    age: 24,
    salary: 75000,
    email:"tukaram@cdac.in"
};
const empName = getPropertyValue(emp, "firstName");
const empAge = getPropertyValue(emp, "age");       

console.log("First Name:", empName);
console.log("Age:", empAge);

"use strict";
const emp1 = {
    firstName: "PRATHAM",
    lastName: "raje",
    age: 22,
    salary: 80000,
    city: "Pune",
    state: "Maharashtra",
    ggeolocation: [18.5204, 76.676],
    gender: "Male",
    email: "prathamraje06@gmail.com",
    dob: new Date("2002-06-15"),
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    getTAX: function () {
        return this.salary * 0.15;
    }
};
console.log("Employee Name:", emp1.getFullName());
console.log("Date of Birth", emp1.dob.toDateString());
console.log("Email :", emp1.email);
console.log("Geo-Location(Lat,Long):", emp1.ggeolocation);
console.log("Calculated Tax:", emp1.getTAX());

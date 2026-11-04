const itEngineer1 = {
    firstName: "Omkar",
    lastName: "Jaipurkar",
    age: 26,
    salary: 1200000,
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    geoLocation: [18.5204, 73.8567],
    gender: "Male",
    email: "omkar.jaipurkar@cdac.in",
    dob: new Date("2000-05-23"),
    experience: 4,
    programmingLanguage: ["TypeScript", "JavaScript", "Python"],
    getTax: function () {
        return this.salary * 0.20;
    },
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log("IT Engineer Name:", itEngineer1.getFullName());
console.log("Experience:", itEngineer1.experience, "Years");
console.log("Languages Known:", itEngineer1.programmingLanguage.join(", "));
console.log("Tax Amount:", itEngineer1.getTax());
export {};

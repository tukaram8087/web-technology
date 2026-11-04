import { Employee } from "../DAY 9/Q4";
import { Engineer } from "../Day 9/Q6";

type itEngineer = Employee & Engineer;


const itEngineer1: itEngineer = {
  
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


  getTax: function(): number {
    return this.salary * 0.20;
  },
  getFullName: function(): string {
    return `${this.firstName} ${this.lastName}`;
  }
};


console.log("IT Engineer Name:", itEngineer1.getFullName());
console.log("Experience:", itEngineer1.experience, "Years");
console.log("Languages Known:", itEngineer1.programmingLanguage.join(", "));
console.log("Tax Amount:", itEngineer1.getTax());
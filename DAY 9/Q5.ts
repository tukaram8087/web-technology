interface Emgineer{
    experience:number;
    programmingLanguage:string[];

}
const myEngineer:Emgineer={
    experience:3,
    programmingLanguage:["java","python","go","JavaScript"]
};
console.log("Years of Experience:", myEngineer.experience);
console.log("Programming Languages:", myEngineer.programmingLanguage);
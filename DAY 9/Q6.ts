type language = 'TypeScript' | 'Python' | 'Java' | 'JavaScript';

export interface Engineer{
    experience  : number,
    programmingLanguage : language[]
}


const eng1 : Engineer = {
    experience : 4,
    programmingLanguage : ["TypeScript" , "Java" , "Python" ]
}


console.log(eng1.experience);
eng1.programmingLanguage.forEach(element => {
    console.log(element);
});

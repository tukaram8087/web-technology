type MathOperation =(a:number,b:number) =>number;
const add : MathOperation=(a,b)=>{
    return a+b;
}
const sub :MathOperation=(a,b)=>{
    return a-b;
}
const mul : MathOperation=(a,b)=>{
    return a*b;
}
const div :MathOperation=(a,b)=>{
    return a/b;
}
function calculator(num1:number,num2:number,operation:MathOperation):number{
    return operation(num1,num2);
}

console.log("Sum:",calculator(10,20,add) );
console.log("multiply",calculator(10,20,mul));
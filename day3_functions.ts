function sum (a:number, b:number):number {
    return a+b;
}

let result:number = sum(10,20);

function toUpperCase (str:string):string {
    return str.toUpperCase();
}

let upper:string = toUpperCase("hello");
console.log(upper);

const add = (x:number, y:number):number => x+y;
const multply = (x:number, y:number):number => x*y;

console.log(add(10,20));

let numbers:number[] = [1,2,3,4,5];

let sumArray:number = numbers.reduce((accumulator, current) => accumulator + current, 10);

console.log(sumArray);

let User: {name: string, age: number} = {
    name: "Adam",
    age: 30
} 

let userData = (user: {name: string, age: number}): string => `Hello, ${user.name} you are ${user.age} years old`;

console.log(userData(User));
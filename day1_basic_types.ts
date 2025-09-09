let name : string;
let age : number;
let isStudent : boolean;
let album: any;

name = "Alice";
age = 25;
isStudent = true;
album = 'The Dark Side of the Moon';
album = 1973;
album = true;

console.log(`Name: ${name}, Age: ${age}, Is Student: ${isStudent}, album: ${album}`);

const sum = (a: number, b: number) => {
    return a + b;
}
 
let postID: string | number;
let isActive: number | boolean;

postID = 123;
isActive = true;
isActive = 1;

let re: RegExp = /\w+/g;
console.log(re);
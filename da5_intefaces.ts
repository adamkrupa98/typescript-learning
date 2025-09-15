interface Book {
    title: string;
    author: string;
    year: number;
}

interface EBook extends Book {
    fileSize: number;
}

let myEBook: EBook = {
    title: "Tarzan",
    author: "Nowak",
    year: 2020,
    fileSize: 200 
}
console.log(myEBook);

let printEBook = (ebook: EBook) => {
    console.log(`Title: ${ebook.title}, Author: ${ebook.author}, Year: ${ebook.year}, File Size: ${ebook.fileSize}MB`);
}

printEBook(myEBook);

interface Animal {
    type: string;
    age: number;
    name: string;
    makeSound: () => void;
}

interface Dog extends Animal{
    speed: number;
}

interface Cat extends Animal{
    livesLeft: number;
}

let myDog: Dog = {
    type: "Dog",
    age: 3,
    name: "Rex",
    makeSound: () => { console.log("Woof Woof"); },
    speed: 45,
}

let myCat: Cat = {
    type: "Cat",
    age: 2,
    name: "Mittens",
    makeSound: () => { console.log("Meow Meow"); },
    livesLeft: 9,
}

let animals: Animal[] = [myDog, myCat];

for (let animal of animals) {
    console.log(`Type: ${animal.type}, Name: ${animal.name}, Age: ${animal.age}`);
    animal.makeSound();
}
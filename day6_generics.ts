function identity <T>(arg: T): T {
    return arg;
}
console.log(identity<string>("hello"));
console.log(identity(123));

function arrayLength <T>(arg: T[]) : number {
    return arg.length;
}

let num = identity<number>(123);
let str = identity<string>("hello");
let num2 = identity(456);

interface ExampleInterface <T> {
    value: T;
    getValue: () => T;
}

let example1: ExampleInterface<number> = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

function logLength <T extends { length: number}> (arg: T): T {
    console.log(arg.length);
    return arg;
}

interface Animal {
    name: string;
    age: number;
}

class Dog implements Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let myDog = new Dog("Buddy", 3);
console.log(myDog.name);
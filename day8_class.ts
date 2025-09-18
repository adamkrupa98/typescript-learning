class Person {
    name: string;
    age: number;
    private id: number;
    constructor(name: string, age: number, id:number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce = () => console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old`)
    getId = () => {return this.id};
    setId(id: number) {
        if(id > 0 && id < 100) {
            this.id = id;
        } else {
            throw new Error ("Niepoprawne ID!");
        }
    }
}

let person1 = new Person('Adam',30,1);
console.log(person1.name);

class Student extends Person {
    grade: number;
    constructor (name:string, age:number, id:number, grade:number) {
        super(name,age,id);
        this.grade = grade;
    }
    introduce = () => console.log(`Hi, I'm ${this.name}. I'm ${this.age} years old and my grade is ${this.grade}`)
}
let student = new Student('Maciej',5,2,5);

console.log(student.grade);
//console.log(student.id);
console.log(student.getId());
try {
student.setId(90);
student.setId(110);
}catch (error){
    console.log("Błąd w setterze", (error as Error).message);
}

console.log(student.getId());
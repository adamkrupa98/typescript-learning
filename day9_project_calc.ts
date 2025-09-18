let add = (a: number, b:number): number => {return a+b};
let substract = (a:number, b:number): number => {return a-b};
let multiply = (a:number, b: number): number => {return a*b};
let divide = (a:number, b: number): number => {
    if (b != 0) {
        return a/b;
    } else {
        throw new Error('Błąd dzielenia przez 0');
    }
};

type Action = "add"|"substract"|"multiply"|"divide";

let calculate = (action: Action, a:number, b:number): number =>{
    switch (action) {
        case "add": return add(a,b);
        case "substract": return substract(a,b);
        case "multiply": return multiply(a,b);
        case "divide": return divide(a,b);
    }
}
console.log(calculate("add",5,5));
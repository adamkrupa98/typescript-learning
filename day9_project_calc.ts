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


type Operations = {
 action: Action|"power",
 symbol: string,
 run: (a:number,b:number) => number
}

let operations: Operations[] = [ {
    action: "add",
    symbol: "+",
    run: (a, b) => a+b
},
{
    action: "substract",
    symbol: "-",
    run: (a, b) => a-b
},
{
    action: "multiply",
    symbol: '*',
    run: (a, b) => a*b
},
{
    action: "divide",
    symbol: "/",
    run: (a, b) => {
        if (b != 0) {
            return a/b;
        } else {
            throw new Error("blad dzielenia przez 0");
        }
    }
},
{
    action: "power",
    symbol: "^",
    run: (a,b) => Math.pow(a, b)
}]

 let calculatev2 = (symbol:string, a:number, b:number):number => {
    let o = operations.find(o => o.symbol == symbol);
    if(!o) throw new Error("nie znaleziono operacji");
    return o.run(a,b);
 }

 console.log(calculatev2("+",5,10));
 console.log(calculatev2("-",20,5));
 console.log(calculatev2("/",10,2));
 console.log(calculatev2("^",2,4));

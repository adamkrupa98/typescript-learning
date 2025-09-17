function wrapInArray <T> (elem: T) : T[] {
    let array: T[] = [];
    array.push(elem);
    return array;
}

let numberArray = wrapInArray(5);
let stringArray = wrapInArray<string>('test');
console.log(numberArray);
console.log(stringArray);

function getFirst <T> (arr: T[]): T | undefined {
    return arr.shift();
}

console.log(getFirst<string>(['a','b','c']));

interface Box<T>{
    value: T;
}

let object:Box<string> = {
    value: 'test',
}

let object2:Box<number> = {
    value: 10,
}

console.log(object.value);
console.log(object2.value);

let boxes: Box<string|number>[] = [
    {value:"hello"},
    {value:10}
]

boxes.forEach(b => console.log(b.value));
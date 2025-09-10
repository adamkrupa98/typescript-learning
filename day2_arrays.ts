//arrays
let names: string[] = ["Alice", "Bob", "Charlie"];
let ages: number[] = [25, 30, 35];
let isActive: boolean[] = [true, false, true];
let mixed: (string | number | boolean)[] = ["Alice", 25, true, "Bob", 30, false];
let nestedArrays: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
names.push("David");
ages.push(40);
isActive.push(false);
console.log(names);
names.pop();
console.log(names);

// inference
let cities = ["New York", "Los Angeles", "Chicago"];
cities.push("Houston");
const firstCity = cities[0];
let things = [1, true, 'hello'];
const t = things[0];

//objects
let user: { name: string; age: number; id: number } = {
    name: "Alice",
    age: 25,
    id: 1 
}

user.name = "Bob";

//type inference objects
let pesrson = {
    name: "Charlie",
    age: 30,
    id: 2 
}
pesrson.name = "David";
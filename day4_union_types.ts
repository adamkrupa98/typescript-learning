let id: string | number;
id = 101; // valid
id = "202"; // valid

console.log(`ID: ${id}`);

let direction: "left" | "right" | "up" | "down";
direction = "left"; // valid
direction = "up"; // valid

console.log(`Direction: ${direction}`);

type success = {
  status: "success";
  data: string;
};
type failure = {
    status: "failure";
    message: string;
};

let response: success | failure;
response = { status: "success", data: "Data loaded successfully" };
console.log(`Response: ${response.status}, ${response.data}`);

type Cat= {type: "cat", meow: () => void};
type Dog= {type: "dog", bark: () => void};

type Animal = Cat | Dog;

function makseSound(animal: Animal) {
    if (animal.type === "cat") {
        animal.meow();
    } else {
        animal.bark();
    }   
}

makseSound({type: "cat", meow: () => console.log("Meow!")});
makseSound({type: "dog", bark: () => console.log("Bark!")});

type Res = success | failure;

let handleResponse = (res: Res) => {
    if (res.status === "success") {
        console.log(`Success: ${res.data}`);
    } else {
        console.log(`Failure: ${res.message}`);
    }
}

handleResponse({ status: "success", data: "All good!" });
handleResponse({ status: "failure", message: "Something went wrong." });

type Car = {type: "car", color: "red", drive: () => void};
type Bike = {type: "bike",color: "blue", ride: () => void};

type Vehicle = Car | Bike;

function operateVehicle(vehicle: Vehicle) {
    if (vehicle.type === "car"){
        vehicle.drive();
    } else {
        vehicle.ride();
    }
}

operateVehicle({type: "car", color: "red", drive: function () { console.log(`I drive a ${this.type} of color ${this.color}`)}});
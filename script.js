document.write("Javascript Works! <br>");
console.log("Hello Console!");
console.warn("This is only a test!");

let myName = "Matthew Wong";
let workFromHome = true;
let side = 15;
let radius = 10;

console.log("My Name is " + myName);
console.log(`I work from Home: ${workFromHome}`);
console.log("The length of each side of the square is " + side);
console.log("The radius of the circle is " + radius);

let squareArea = side ** 2;
let squarePerimeter = side * 4;
let circleArea = Math.PI * radius ** 2;
let circlePerimeter = 2 * Math.PI * radius;

console.log("The square area is " + squareArea + " and the perimeter is " + squarePerimeter);
console.log(`The circle area is ${circleArea} and the perimeter is ${circlePerimeter}`);

let travelOptions = ["foot", "bike", "car", "airplane"];
console.log("The travel options are:");
console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

let distance = 100;
let time = 0;
let cost = 0;

let travelType = prompt("How would you like to travel?");
console.log(`Travel Type: ${travelType}`);

if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
} else if (travelType === "bike") {
    let rentBike = prompt("Do you need to rent a bike? (yes/no)");
    if (rentBike === "yes") {
        console.log("Bike rental is $45. Speed is 10mph.");
        cost = 45;
    } else {
        console.log("Biking is free! Speed is 10mph.");
        cost = 0;
    }
    time = distance / 10;
} else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
} else if(travelType === "airplane") {
    let passenger = prompt("How many passengers?");
    console.log("Airplane is $0.10/mi per passenger. Speed is 400mph.");
    cost = 0.1 * distance * passenger;
    time = distance / 400;
} else {
    console.log(`Sorry, ${travelType} is not a valid option.`);
}

console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

let costBar = "Cost: ";
let timeBar = "Time: ";

for (timeBar; time > 0; time--){
    timeBar += "/";
}
for (costBar; cost > 0; cost--) {
    costBar += "$";
}
console.log(timeBar);
console.log(costBar);

/*for (let h = 0; h < 10; h++) {
    document.write(h + "<br>");
}

let i = 0;
while (i < 10) {
    document.write(i + "<br>");
    i++;
}

let j = 1;
do {
    document.write(j + "<br>");
    j++;
} while (j < 10);

function funTimes() {
    let answer = null;
    answer = prompt("Do you want a fun time?");
    while (answer === null || answer === "") {
        answer = prompt("Pretty confident you want a fun time");
    }
}*/
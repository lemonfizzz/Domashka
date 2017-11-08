// task 1
var name = "Vasya";

function getData(age) {

    return {
        name: name,
        age: age
    };
}

var newData = getData(20);
var newDataElse = getData();

console.log(newData, newDataElse); // 1) name: Vasya, age: 20 2) Vasya, undefined

// task 2
function canGoToManGym(name, age, gender) {
    if (!name) {
        console.log("Please pass your name to function");
    }

    if (!age) {
        console.log("Please pass your age to function");
    }

    if (!gender) {
        console.log("Please pass your gender to function");
    }

    // check age
    var normalAge = age > 90;
    var isMan = gender === "man";
    // the upper one is the short for: var normalAge = age > 90 ? true : false;

    return normalAge && isMan;
}

canGoToManGym("Lily", 24, "woman"); // false (age, gender, but after age false gender is not checked)
canGoToManGym("Vasya", 30, "man"); // false (didn't pass age check)

// task 3
function getName( name ) {
    name = name || "Default name";

    return name;
}

getName("Lily"); // 'Lily'
getName(); // 'Default name'

// task 4
// Example of recurtion in function, when it returns itself on some condition&
// Example how can we use isNaN function and how to write functions, that check all of the possibility of errors in it:
function getNumberInRange( rangeStart, rangeEnd, number) {
    // check if some of our arguments is not a number return the new call of this function
    if (isNaN(rangeStart) || isNaN(rangeEnd) || isNaN(number)) {
        alert("Please try again and enter the numbers in prompt input!");

        return getNumberInRange(
            +prompt("Please enter range from"),
            +prompt("Please enter range to"),
            +prompt("Please enter number to check in range")
        );
    }

    return number > rangeStart && number < rangeEnd ? `Number ${number} is in range [${rangeStart}, ${rangeEnd}]` : `Number is not in range`;
}

getNumberInRange(
    +prompt("Please enter range from"),
    +prompt("Please enter range to"),
    +prompt("Please enter number to check in range")
);
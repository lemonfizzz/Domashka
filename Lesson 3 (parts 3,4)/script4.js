// task 1
// Create function "getName" that ask user his name with promt window and alerts his name to him in format: "Hello, <his_name>".
function showName(name) {
    alert('Hello, ' + name);
}
showName(prompt('Tell me your name, please!')); // "Hello, Lily";

// task 2
// Create function double(x) that returns the number passed to it as an argument, multiply with 2

function double(x) {
    return x * 2;
}
double(6); // logs in console => 12

// task 3
// Create function range(x, y) that returns a sum of digits in the range of numbers [x, y];
function range(x, y) {
    var res = 0;
    for(var i  = x; i <= y; i ++){
        res += i;
    }
    return res;
}

range(1,3); // logs in console => 6

// task 4
// Напишите функцию которая будет находить сумму простых чисел меньших переданному в нее значению. Пример работы:

// don't know how to do this((

// task 5
// Create a function that returns true if number is odd, and false if even;
var num;
function oddOrEven() {
    if (num % 2 !== 0) {
        return 'false'
    }
    else {
        return 'true'
    };

}
oddOrEven(5);

// task 6
// Create a function that returns all odd numbers in range, use the previous function inside this one;



// task 7
//Create a function that will call promt window that will ask for a number to user, until he enters 9;


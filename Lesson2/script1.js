// task 1

var t = {
    y: 9
};
var number = t.y;
number += 5;
console.log(t.y, number); // false ?? why false we have t.y === 9, so we will have 9, 9 + 5 === 14

// task 2
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];
for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number); //  5, and we didn't learn cycles)))
// it's because number === 5, but the cycle change array  but it don't change the number variable because 5 value is number so it's simple type, so the value pass by value not by reference

// task 3
var t = 9;
var obj = {
    number: t
};
obj.number++;
console.log(obj.number, t); // 9 ?? and what will be the value of t?

// task 4
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;
obj.number++;

var str = object1.str;

object1.str.name = "Kolya";

console.log(str, object1.str.number); // Kolya, 67

// task 5
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;

object2.str.number++;

console.log(object2.str.number); // undefined


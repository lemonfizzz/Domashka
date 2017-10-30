// 1

var one = "1" + 2 + 3; // '123'
var two = 4 + false + "5" + 6; // '456'
var three = 7 + true + 6 + "8"; // '148'
var four = false + true; // 1

// 2

var t = 0;
var h = 8;

t && h && console.log(9); //

// 3

var pr = 9;
var g = 0;

(g || pr) && console.log(9); // 9

// 4

var i = '1';
var j = 8;
var m = 7;

(m - j) == j; // false
(m - j) === j; // false

(m - 6) && j && console.log('Hi'); // Hi
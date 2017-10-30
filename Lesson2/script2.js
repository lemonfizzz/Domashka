// 1

var r = '9' + 0; // type string, result '90'

var r = 9 + '0'; // type string, result '90'

var r = 4 + 9; // type number, result 13

var r = null + 7; // type number, result 7

var r = '6' + null; // type string, result '6null'

var r = '6' + []; // type string, result '6'

var r = '6' + undefined; // type string, result '6undefined'

// 2

2/3 + 1 + 1/3 == 2 // true, because '/' has priority - 0.666+1+0.333=2

// 3

var r;
var t = ++2; // 3
var u = 1++; // 1
var w = 2--; // 2

r = 6 && 0 && 7; // 0

r = -9 && -8; // -8

r = 6 && 0 && 7; // 0

r = "string" && 0; // 0

r = [] && {} && 7; // 7

r = [] || 7; // []

r = {} || 0; // {}

r = false || true; // true

r = "2" > "3"; // false

r = "ab" <= "fg"; // true

r = "2k" <= "8l"; // true

r = "2" != 2; // false

r = "2" !== 2; // true

r = t + 2; // 5

r = t + 2--; // 5

r = u - w; // -1



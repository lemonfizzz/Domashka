// task 1
var a = 1; // 0, -1
if (a === 0) {
    console.log(a);
    alert('true');
} else {
    console.log(a);
    alert('false')
}
// for a=1 answer is false, for 0 - true, for -3 - false

// task 2
var a = 'test'; // 'тест', 3
if (a === 'test') {
    console.log(a);
    alert('true');
}
else {
    console.log(a);
    alert('false');
}
// for a='test' answer is true, for 'тест' - false, for 3 - false

// task 3
var test = 'true';
if (test === 'true') {
    console.log(test);
    alert('true');
}
else {
    console.log(test);
    alert('false');
}
// for test='true' answer is true, for test='false' answer is false

var test = prompt('guess - true or false?');
test == true ? console.log("true") : console.log('false');

// task 4
var a = 2;
var b = 5;
var result = a+b;
if(result > 5) {
    result = 5;
}
else {
    result *= 10;
}
console.log(result); // 5
// for a=3, b=1 answer is 40

// task 5
var a = 5;
if(a === 0 || a === 2) {
    a %= 10;
}
else {
    a += 7;
}
console.log(a);
// if a=0 - 0, if a=-3 - 4, if a=2 - 2

// task 6
var a = 1;
var b = 3;
var result = a+b;
if(a <= 1 && b >=3) {
    console.log(result);
}
else {
    alert('false');
}  // 4, for 0 and 6 - 6, for 3 and 5 - false

// task 7

var a = 15;
var b = 10;
if(a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log(a + 2);
}
else {
    console.log(a + 5);
}
// 17

// task 8
var num = +prompt('enter one digit from 1 to 4');
switch(num) {
    case 1:
        alert('zima');
        break;
    case 2:
        alert('leto');
        break;
    case 3:
        alert('osen');
        break;
    case 4:
        alert('vesna');
        break;
}

// task 9

// if
var lang = prompt('choose your language from: ru, en, de');
var array = [];
if(lang == 'ru') {
    console.log(arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']);
}
else if(lang == 'en') {
    console.log(arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']);
}
else if(lang == 'de') {
    console.log(arr = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag", "samstag", "sonntag"]);
}
else {
    console.log('wrong answer')
}

// switch

var lang = prompt('choose your lsnguage from: ru, en, de');
var array = [];
switch (lang) {
    case 'ru': console.log(arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']);
        break;
    case 'en': console.log(arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']);
        break;
    case 'de': console.log(arr = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag", "samstag", "sonntag"]);
        break;
    default: console.log('wrong answer');
        break;
}


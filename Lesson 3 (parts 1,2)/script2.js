// task 1

var number = 1;
while(number <= 50) {
    console.log(number);
    number++;
}

// task 2

var array = [1, 2, 3, 4, 5];
for (var a = 0; a < array.length; a++) {
    console.log(array[a]);
}

// task 3

var arr = [2, 3, 4, 5];
var mult = 1;
for (var x = 0; x < arr.length; x++) {
    mult *=arr[x];
}
console.log(mult);

// task 4

var obj = {
    Minsk: 'Belarus',
    Moscow: 'Russia',
    Kyiv: 'Ukraine'
}
for(var x in obj) {
    alert(x + ' is ' + obj[x]);
}

// task 5

var a = 1000;
do { a/2;
} while (a < 50);

var num = a;
console.log(num);

// task 6

var arr = [2, 5, 9, 15, 0, 4];
for( var x = 0 ; x <= arr.length; x++){
    if(arr[x] > 3 && arr[x] < 10){
        console.log(arr[x]);
    }
}

// task 7
// Составьте массив месяцев.
// С помощью цикла for выведите все месяцы, а текущий месяц выведите жирным.
// Текущий месяц должен храниться в переменной month.
// var arr = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// for (var prop in arr) {
//     console.log(prop);
//     if (prop == 'november') {
//         console.log('*november*')
//     }
// }
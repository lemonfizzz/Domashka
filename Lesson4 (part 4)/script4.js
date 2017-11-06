// 1 task
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
var str = 'aaa@bbb@ccc';
str.replace(/@/g, '!');

// 2 task
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var str = 'aaa bbb ccc';
str.substr(3, 5);
str.slice(4, 7);
str.substring(4, 7);

// 3 task
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
var date = '2025-12-31';
var newDate = date.split('-').reverse().join('/'); // код работает, но я не понимаю почему он возвращает нужный вид, а не 13/21/5202

// 4 task
// Дана строка 'js'. Сделайте из нее строку 'JS'.
var str = 'js';
str.toUpperCase();

//5 task
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

var str = 'я учу javascript!';
str.length;

// 6 task
// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.

var str = 'blablabla  blabla  bla blablablabla';
str.length;
var n = 15;
if (str.length > 15) {
    var result = str.slice(0, 15);
    console.log(result+'...');
} else {
    var result = str;
    console.log(result);
}

// 7 task
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

var str = 'я учу javascript!';
str.split(' ');

// 8 task
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

var arr = ['я', 'учу', 'javascript', '!'];
arr.join('+');

// 9 task
// Преобразуйте первую букву строки в верхний регистр.

var str = 'abc';
var str1 = str.replace(str.charAt(0), str.charAt(0).toUpperCase());

// 10 task
// Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = 'я учу javascript!';
str.indexOf('я'); // 0
str.indexOf('у'); // 2
str.indexOf('j'); // 6
var arr = str.split(' ');
arr[0].replace(str.charAt(0), str.charAt(0).toUpperCase());
arr[1].replace(str.charAt(2), str.charAt(2).toUpperCase());
arr[2].replace(str.charAt(6), str.charAt(6).toUpperCase());
arr.join(' ');

// 11 task
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.



// 12 task
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.



// 13 task
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца.
// То есть у нас должно получится '12 345 678'. Число, конечно же, может быть любым.


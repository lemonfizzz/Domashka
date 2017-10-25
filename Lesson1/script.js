// task 1
var str = 'have a good day';
console.log(str);

// task 2
var age = 25;
console.log(age);
var age = undefined;
console.log(age);

// task 3
var info = {};
info.name = 'Anna';
info.age = 32;

console.log(info.name);
console.log(info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

// task 4
var customArray = [3,7,11]
console.log(customArray);
var customArray = 0; // приравниваю массив к 0
console.log(customArray);

// task 5
var student = 'Anna';
console.log(student);
var student = 'Anna Alekseeva';
console.log(student);

// task 6
var complex = [];
var complex = ['My name is',7,null,info];
console.log(complex[3]);

// task 7
var complexObj = {};
complexObj.name = 'Anya';
complexObj.age = 32;
complexObj.friends = 'Kenny';
var soc_links = {
    facebook: 'facebook.com',
    googlePlus: 'google.com.ua'
}
var shab = `My name is ${complexObj.name}, I am ${complexObj.age} years old`;
console.log(shab);
var shab1 = `I have a lot of friends, but the best one is ${complexObj.friends}.`;
console.log(shab1);
var shab2 = `You can find me on facebook: ${soc_links.facebook} or on google Plus: ${soc_links.googlePlus}`;
console.log(shab2);

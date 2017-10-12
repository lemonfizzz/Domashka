console.log(9);
var name = 'Anna';
console.log(name);
var t = 'Anna'
console.log(t);
// name='';
var age = 32;
console.log(age);
var str = 'blablabla';
console.log(str);
var shab = `My name is ${name}. I am ${age} years old`; // type template
console.log(shab);
var logic = true;
console.log(logic);
logic = false;
console.log(logic);
var nothing = null;
console.log(null);
var x;
console.log(x);

var last_name = 'Alekseeva';
var shab1 = `My last name is ${last_name}.`
console.log(shab1);
var w = 88;
console.log(w);
var crime = false;
console.log(crime);
var shab2 = `My name is ${name}, I am ${age} years old, and my answer is: ${logic}. My true age is ${w})))`;
console.log(shab2);
var person = {
    name: 'Vasya',
        age: age
}
person.job = 'developer';
person['address'] = 'Kyiv';
console.log(person);
// "name" in person - check if it exists
delete person.job;
console.log(person);
var list = [10,20];
console.log(list);
list[0] = 5;
console.log(list);

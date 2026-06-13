// document.write('to show on web-page');
// console.log(10+20);
// alert('Hello today is 8-6-2025')

// ----------VARIABLES-------
// old and function-scope
// var ==> Redclare, Reassign

// var $username = 'Syeda Rida';    // Declare
// console.log($username);

// var $username = 'Syeda Atruba';  //Redeclare
// console.log($username);

// $username = 'Syed Muqsit'        // Reassign
// console.log($username);


// Block-scope let
// let $name = 'rida';
// console.log($name);
// we never do Reclare in javascript with

//
// $name = 'Muhib';              //Reassign
// console.log($name);


// Block-scope means scope ke bahir nhi chalyga scope ke ander run hoga
// {
//     let a = 12;
//     console.log(a);
// }

// interview question
// let b;  // scope yahan decide ho gayi
// {
//     b = 13;  // sirf value assign hui
// }
// console.log(b);



// Const cannot be Reassign Always Constant , variable name and its value don't use again
// const $value = 20;
// console.log($value);
// always give type error cause never reassign
// $value = 10;
// console.log($value);

// interviw question
// Const also a block-scope
// {
//     const n = 5;
//     console.log(n);
// }

// var n = 3;
// console.log(n);

// hosting work only var not let, const

// just variable name define krta hai uski value assign nhi krta
// console.log(n);    //undefined
// var n = 4;



// Template Literals
// let $userName = 'Rida Abid';
// console.log(`Hello your trainer is ${$userName}`); // Template Literals easy
// console.log('Hello your trainer is ' + $userName); //Concatination hard to use


// Data Types => variables store which type of value
// primitive data type => store single value

// string
// let n = 'Rida Abid';
// console.log(n, typeof n);

// number
// let age = 21;
// console.log(age, typeof age);

// Boolean
// let check = true;   // true = 1, false = 0
// console.log(check, typeof check);

// Null
// let ba = null;
// console.log(ba, typeof ba);  // type of null => Object

// undefined
// let aa;
// console.log(aa, typeof aa);

// Symbol
// let $unique = Symbol('Rida Abid');
// console.log($unique, typeof $unique);
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 === id2);

// Bigint
// let _num = 100000000000000000000000000000000000000000000n;
// console.log(_num, typeof _num);

// primitive data type => store Multiple values


//  Array
// let $array =[10,23,40];
// console.log($array, typeof $array);

// Object
// let contact = {
//     name:'rida',
//     age: 22
// }
// console.log(contact, typeof contact);

// Function
// function checkType(){

// }
// console.log(checkType, typeof checkType);


// emplicit conversion
// let n = 10;
// console.log(n*20);
// console.log(n-20);
// console.log(n/20);
// console.log(n%20);
// console.log(n+'20');  //Append 1020 not calculate plus
// console.log('hello'-222);  //Nan => not a number

// Convert into Number
// take user value
// let a = parseInt(prompt('enter the first value'));
// let a = parseFloat(prompt('enter the first value'));
// let a = Number(prompt('enter the first value'));

// let a = +prompt('enter the first value');
// let b = +prompt('enter the second value');
// console.log(a+b);

// console.log(a, typeof a );

// Practice Question 1
// let $name = 'Rida Abid';
// let $age = 21;
// let isStudent = true;
// console.log(`
//        Name = ${$name}
//        Age = ${$age}
//        isStudent = ${isStudent}
//         `);


// Practice Question 2
// let task = 'done';
// document.write(task);

// task = 'almost';
// document.write(task);


// Practice Question 3
// let count = 10;
// count = count+5;
// document.write(count);
// count+=5;
// console.log(count);


// Practice Question 4
// let a = 5;
// let b = 10;
// let c = a;
// a = b;
// b = c;
// console.log(`${a} ${b} ${c}`);


// let a = 5;
// let b = 10;
// a = a + b;  // 5 + 10 = 15
// console.log(a);
// b = a - b;  // 15 - 10 = 5
// console.log(b);
// a = a - b;  // 15 - 5 = 10
// console.log(a);

// Practice Question 5
// console.log(`

//         hello
//         i'm
//         multi line of code


//     `);

// Arithematic Operators
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// // post increment
// a++
// console.log(a);
// b--
// console.log(b);
// // pre increment
// ++a
// console.log(a);
// --b
// console.log(b);
// console.log(a ** b);

// Assignment Operators
// let a = 10;
// let b = 5;
// console.log(a+=2); // a = a + 2
// console.log(a-=2);
// console.log(a*=2);
// console.log(a/=b);
// console.log(a%=2);

// interview question
//swap
// let a = 10;
// let b = 5;
// let c = a;
// a = b;
// b = c;
// console.log(a,b);

// a = a+b;  // 15
// b = a-b   // 5
// a = a-b   // 10
// a-=b
// console.log(a,b);

// Comparison Operators
// let a = 10;
// let b = 10;
// console.log(a == b);
// console.log(a == '10');  // not check type
// console.log(a === b);
// console.log(a === '10'); // check type
// console.log(a != 5);
// console.log(a != '10');  // not check type
// console.log(a !== 5);
// console.log(a !== '10');  // check type
// console.log(7>6);
// console.log(5<6);
// console.log(8>=6);
// console.log(4<=6);

// interview question
// true+5 1+5=6
// console.log((60>50)+5);
// let a = 10;
// let b = 20;
// let c = 5;
// console.log(a<b<c); // 10<20 = true = 1<5 true

// Logical Operator's
// let a = 10;
// let b = 5;
// console.log(a > b && b < a);   //both true
// console.log(a > 20 || b < a);   // atleast one true
// console.log(!(20 !== 20));     // reverse if true = false

// String Operators
// let str1 = 'Rida';
// let str2 = ' Abid';
// str2 += '!'
// console.log(str1 + str2);
// console.log(10+ ' world');


// Ternary Operator
// let age = +prompt('Enter your age....?😊');
// let result = (age >= 18) ? "Eligible For Code" : "Not Eligible";
// console.log(result);

// task
// let num1 = +prompt('enter first number....');
// let num2 = +prompt('enter second number....');
// let outPut = num1 > num2 ? `Num1 ${num1} is greater than NUm2 ${num2}` : `Num2 ${num2} is greater than NUm1 ${num1}`;
// console.log(outPut);


// Conditional Statement
// if statement
// if (true) {
//     console.log('hello world');
// }
//task
// let score = 60;
// if (score > 50) {
//     console.log('you passed!');
// }
// if..else statement
// let score = 50;
// if (score >= 50) {
//     console.log('you passed!');
// } else {
//     console.log('you fail!');
// }

//task
// let num1 = +prompt('enter any num you want to see even or odd');
// if (num1 % 2 === 0) {
//     console.log(num1, 'that is even num');
// } else {
//     console.log(num1, 'that is odd num');
// }

// if..else if else statement
// when we check two or more condition, comparison use if else if else
// let marks = +prompt('enter number to check grade');
// if (marks >= 90) {
//     console.log('A Grade 😊');

// } else if (marks >= 75) {
//     console.log('B Grade 😊');

// } else if (marks >= 60) {
//     console.log('C Grade 😊');

// } else {
//     console.log('Fail..😒');
// }

// Nested if else statement
// let userName = prompt('enter the user name..');
// if (userName === 'admin') {
//     let password = +prompt('enter the password..');
//     if (password === '1234') {
//         console.log('you are login');

//     } else {
//         console.log('encorrect password');

//     }
// } else {
//     console.log('encorrect username');
// }

// Switch case statement
// let signal = prompt('enter the traffic light color 🟢🔴🟡');
// switch (signal) {
//     case 'red':
//         console.log('Stop');
//         break;
//     case 'yellow':
//         console.log('Ready');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//     default:
//         console.log('Invalid Signal....');
//         break;
// }

// task mini calculator by using switch statement
// let num1 = +prompt('enter num one..');
// let num2 = +prompt('enter num two..');
// let opr = prompt(`enter any operater
//                    "+" Adtition
//                    "-" Subtraction
//                    "*" Multiplication
//                    "/" Division`);
// switch (opr) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;

//     default:
//         console.log(`Invalid operater ${opr}`);
//         break;
// }

// task mini calculator by using if  else if  else statement
// if (opr == '+') {
//     console.log(num1 + num2);
// } else if (opr == '-') {
//     console.log(num1 - num2);
// } else if (opr == '*') {
//     console.log(num1 * num2);
// } else if (opr == '/') {
//     console.log(num1 / num2);
// } else {
//     console.log(`Invalid operater ${opr}`);
// }

// task 1
// let num = +prompt('enter any num..');
// if (num> 100) {
//     console.log(`your number is greater than 100 ${num}`);
// }
// task 2
// let year = +prompt('enter the year...');
// if (year % 4 == 0 && year % 100 != 0) {
//     console.log('Leap year');
// } else if (year % 400 == 0) {
//     console.log('Leap year');
// } else {
//     console.log('Not a Leap year');
// }

// if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//     console.log('Leap year');
// } else {
//     console.log('Not a Leap year');
// }

// task 3
// let num = +prompt('enter the number check positive even , positive odd & negative');
// if (num > 0) {
//     if (num % 2 === 0) {
//         console.log('The number is Positive Even');
//     } else {
//         console.log('The number is Positive Odd');
//     }
// } else if (num === 0) {
//     console.log('The number is Zero');
// } else {
//     console.log('The number is negative ');
// }

// task 4
// let amount = +prompt('enter num to check discount');
// if (amount > 1000) {
//     console.log('20% discount');
// } else if (amount > 500) {
//     console.log('10% discount');
// } else {
//     console.log('no discount at all');
// }

// task 5
// let weather = +prompt('enter the number to check weather');
// if (weather > 35) {
//     console.log('Very hot');
// } else if (weather > 25 && weather < 35) {
//     console.log('hot');
// } else if (weather > 15 && weather < 25) {
//     console.log('Pleasent');
// } else if (weather > 5 && weather < 15) {
//     console.log('Cold');
// } else {
//     console.log('Very Cold');
// }

// task 6
// let num = +prompt(`enter the number for the bank infor
//                    ATM Action Menu
//                    1 Check Blance
//                    2 withdraw
//                    3 Deposit
//                    4 Exit`);
// switch (num) {
//     case 1:
//         alert('Check Blance');
//         break;
//     case 2:
//         alert('withdraw');
//         break;
//     case 3:
//         alert('Deposit');
//         break;
//     case 4:
//         alert('Exit');
//         break;
//     default:
//         alert('Invalid num');
//         break;
// }


// Loops in javascript
// for loop = when you know how many times run the loop

// for (let i = 1; i <= 5; i++) {
//     console.log(i,'hello summer');
// }
// // console.log(i);
// // let
// console.log(i); //error


// for (let i = 10; i >= 1; i--) {
//     console.log(i,'hello summer');
// }
// // console.log(i);
// // let
// console.log(i); //error


// task 1
// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i,` is even`);
//     }
// }

// for (let i = 2; i <= 100; i = i + 2) {
//     console.log(i, ` is even`);
// }

// While loop
// when we don't know how many time run loop

// let w = 1;
// while (w <= 5) {
//     console.log('while loop', w);
//     w++;
// }
// console.log(w);

// while(true){
//  infinite
// }

// when we don't know how many time user give password

// let pin = "";

// while (pin !== "1234") {
//     pin = prompt("Enter PIN");
// }

//do...While loop
// firstly execute body then condition check or if condition false atleast one time run
// let s = 1;
// do {
//     console.log('hellow do-while', s);
//     s++
// } while (s <= 10);

// console.log(s);

// false condition
// let s = 11;
// do {
//     console.log('hellow do-while', s);
//     s++
// } while (s <= 10);

// console.log(s);


//break => leave the loop
// for (let i = 1; i <= 8; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log('hello', i);
// }
// contine => skip current condition
// for (let i = 1; i <= 8; i++) {
//     if (i == 5 || i == 6) {
//         continue;
//     }
//     console.log('hello', i);
// }

// for...of loop
//  for..of iteration karta hai string pr or array pr split krke value deta
// let s = 'rida abid';
// for(let i of s){
//     console.log(i);
// }
// let s = ['one','two','three'];
// for(let i of s){
//     console.log(i);
// }

// for in loop
// for...in object ki keys ko ek ek karke access karta hai. or index and key nikalta hai

// index
// let s = ['one','two','three'];
// for(let i in s){
//     console.log(i);
// }

// key and key value
// const person = {
//     name: 'rida',
//     age: 21
// }
// for (let key in person) {
//     console.log(`${key}:${person[key]}


//         ${person.name}      // direct access
//         ${person["name"]}  // string ke zariye access
//         ${person[key]}      // variable ke zariye access`);
// }

// task 1
// for (let n = 1; n <= 10; n++) {
//     document.write(2, ' x ', n, '=', n * 2, '<br>')
// }
// task 2
// let sum = 0;
// for (n = 1; n <= 5; n++) {
//     sum = sum + n;
//     console.log(n);
// }
// // 0 + 1 = 1
// // 1 + 2 = 3
// // 3 + 3 = 6
// // 6 + 4 = 10
// // 10 + 5 = 15
// console.log(sum);

//Nested loof => a loop inside the loop
// for(let i = 1; i <=5; i++){
//     for(j = 1; j <=5; j++){
//         document.write(`*`);
//     }
//      document.write(` ${i} <br>`);
// }


// example multiplication
// for(let i = 1; i <=3; i++){

//     for(j = 1; j <=3; j++){
//         document.write(`${i} x ${j} = ${i*j} <br>`);
//     }

//      document.write(`<br>`);
// }


// example
// *
// **
// ***

// for (let i = 1; i<= 3; i++) {
//     for(let j = 1; j <= i; j++){
//        document.write(`*`);
//     }
//      document.write(` ${i}  <br>`);
// }

// task 1
// for (let n = 1; n <= 50; n++) {
//     if (n % 2 == 0) {
//         document.write(`even number ${n} <br>`)
//     }
// }

// let n = 1;
// while (n <= 50) {
//     if (n % 2 == 0) {
//         document.write(`even number ${n} <br>`)
//     }
//     n++;
// }
// task 2
// for(n = 20; n >= 1; n--){
//     console.log(n);
// }

// task 3
// let user = +prompt('enter any number to check prime num');
// let midValue = parseInt(user / 2);
// console.log(midValue);

// let isPrime = true;

// for (let n = 2; n <= midValue; n++) {
//     if (n % 2 == 0) {
//         console.log(user, n);
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log(`prime number ${user}`);
// } else {
//     console.log(`is not prime number ${user}`); //yani jeetni bhi mid values se divide hore hain wo prime num nhi hai
// }

// let user = +prompt('enter any number to check prime num');

// let isPrime = true;

// for (let n = 2; n <= user; n++) {
//     if (n % 2 == 0) {
//         console.log(user, n);
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime) {
//     console.log(`prime number ${user}`);
// } else {
//     console.log(`is not prime number ${user}`);
// }

// task 4
// let user = +prompt('enter any num to check a num is perfect');
// let midValue = parseInt(user / 2);   //6=>3

// let sum = 0;
// for (let i = 1; i <= midValue; i++) {
//     if (user % i == 0) {
//         sum += i;
//         console.log(i, sum);
//     }
// }
// if (sum == user) {
//     console.log('perfect number', sum, user);
// } else {
//     console.log('not perfect  number', sum, user);
// }

// task 4
// interview question => reverse a number
// '12345' => '54321'

// let num = 12345;
// let reverse = 0;

// while (num > 0) {
//     let lastDigit = num % 10;
//     reverse = reverse * 10 + lastDigit;
//     num = parseInt(num / 10);
// }
// console.log(reverse);

//Round 1
// lastDigit = 12345 % 10 = 5
// reverse = 0 * 10 + 5 = 5
// num = 12345 / 10 = 1234

//Round 2
// lastDigit = 1234 % 10 = 4
// reverse = 5 * 10 + 4 = 54
// num = 1234 / 10 = 123

//Round 3
// lastDigit = 123 % 10 = 3
// reverse = 54 * 10 + 3 = 543
// num = 123 / 10 = 12

//Round 4
// lastDigit = 12 % 10 = 2
// reverse = 543 * 10 + 2 = 5432
// num = 12 / 10 = 1

//Round 5
// lastDigit = 1 % 10 = 1
// reverse = 5432 * 10 + 1 = 54321
// num = 1 / 10 = 0.1 = 0




// task 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// let sum = 1;
// for (let i = 1; i <= 5; i++) {
//     for (n = 1; n <= i; n++) {
//         document.write(sum," ");
//         sum ++;
//     }
//     document.write(' <br>');
// }


// ARRAY => an array store multiple values in a single array
// example
// let fruits = ['apple','mango','banana'];
// console.log(fruits[2]); // find index value

// multi diemensional array an array inside array
// let fruits = ['apple','mango','banana',['cherry','orange']];
// console.log(fruits[3][0]);

// let fruits = ['apple','mango','banana'];
// let t = fruits.length;
// for(let i =0; i< t; i++){
//    console.log(i,fruits[i]);
// }

// reverse nikalna
// let fruits = ['apple', 'mango', 'banana'];
// let t = fruits.length;  // 3 - 2
// for (let i = t - 1; i >= 0; i--) {
//     console.log(i, fruits[i]);
// }

// let v = [10, 20, 30, 40]
// let sum = 0;
// for (let i of v) {
//     sum += i; // i mean v ki value
//     console.log(i);
// }
// console.log(sum);


// for (let i in v) {
//     console.log(i,v[i]);
// }

// let c = [10, 20, 23, 55, 99, 77, 66, 44, 56, 21];
// for(let d of c){
//     console.log(d);
//     if(d % 2 == 0)  {
//      console.log('even numbers',d);
//     }
// }

// let l = [10, 20, 30];
// console.log(l);
// // change value on 2 position
// l[2] = 40
// console.log(l);

// let l = [10, 20, 30];
// // push method add array values at the end and change original array also adding multiple values
// l.push(94);
// l.push(99,77,55);
// // pop method delete from the last and return value
// // l.pop()
// // l.pop()
// console.log(l.pop());
// // shift delete value from the start and return the delete value
// l.shift()
// console.log(l.shift());
// // unshift add values from the start or multiple values
// l.unshift(22,33)
// console.log(l);

// splice add , remove , replace at a specified index -1 right se start + left and return karta hai delete value
// let l = [10, 20, 30];
// // l.splice(1,1,40,50,60);

// // l.splice(-1,1,40,50,60);
// console.log(l.splice(-1, 0, 40, 50, 60));

// sort values ko sequenced dena
// let l = [10,30,50,20,100];
// let l = ['a','c','e','b','d'];
// l.sort();
// //  reverse mean order change kardena ['e', 'd', 'c', 'b', 'a']
// l.reverse()
// // fill mean kisi bhi element ko fill kardena
// // (2, start index, end index 1 zada den)
// l.fill(2,0,3)
// console.log(l);


// task 1
// let l = [1,2,3,4];
// for(let i of l){
//     l.pop();
//     console.log(l);
// }

// task 2
// let l = [1, 2, 3, 4];
// for (let i of l) {
//     l[3] = i
//     console.log(l);
//     console.log(i);
// }
// round 1  l[3] = 1  [1, 2, 3, 1]
// round 2  l[3] = 2  [1, 2, 3, 2]
// round 1  l[3] = 3  [1, 2, 3, 3]
// round 1  l[3] = 3  [1, 2, 3, 3]


// slice original array ki copy bana deta hai or return krta hai copy array
// let i =[10,20,30,40,50];
// // let copyArray = i.slice(1,4);
// let copyArray = i.slice(-3);
// console.log(copyArray);

// concat mean join karna two or more array and returning new array
// let a =['a','b','c','d','u'];
// let i =[10,20,30,40,50];
// let c =[100,400,500];

// let newArray = i.concat(a,c);
// console.log(newArray);


// inculdes mean find the value true if not return false
// let a =['a','b','c','d','u'];
// // true
// console.log(a.includes('a'));
// // false
// console.log(a.includes('v'));


// indexOf find the index of the value if not found give -1
// let a =['a','b','c','d','u'];
// // find
// console.log(a.indexOf('b'));
// // not found
// console.log(a.indexOf('v'));


// join means array's value convert into string or separate
// let a =['a','b','c','d','u'];
// // true
// console.log(a.join('^'));


// toString mean give , separated values
// let a =['a','b','c','d','u'];
// console.log(a.toString());


// Task 1
// let i = [1, 2, 3, 4];
// let o = [3, 4, 8, 0];

// for (let v of i) {
//     if (o.includes(v)) {
//         console.log(v);
//     }
// }

// Task 2
// let i = [1,2,3,3,4,5,6,5,7,7];
// let finalArray =[];

// for(let v of i){
//     if(!finalArray.includes(v)){
//         console.log(finalArray.push(v));
//     }
// }

// round 1 [].includes(1) => ! false = true finalArray[1];
// round 2 [].includes(2) => ! false = true finalArray[1,2];
// round 1 [].includes(3) => ! false = true finalArray[1,2,3];
// round 1 [].includes(3) => ! true = false finalArray[1,2,3];
// round 1 [].includes(4) => ! false = true finalArray[1,2,3,4];
// round 1 [].includes(5) => ! false = true finalArray[1,2,3,4,5];
// round 1 [].includes(6) => ! false = true finalArray[1,2,3,4,5,6];
// round 1 [].includes(5) => ! truse = false finalArray[1,2,3,4,5,6];
// round 1 [].includes(7) => ! false = true finalArray[1,2,3,4,5,6,7];
// round 1 [].includes(7) => ! true = false finalArray[1,2,3,4,5,6,7];


// Task 3
// find greater value
// let m = [33, 100, 23, 67];
// let maxValue = [0];
// for (let v of m) {
//     if (v > maxValue) {
//         maxValue = v
//         console.log(maxValue);
//     }
// }
// console.log(maxValue);

// Round 1 v 33 > 33 false maxValue = 88
// Round 2 v 100 > 33 true maxValue = 100
// Round 1 v 23 > 100 false maxValue = 100
// Round 1 v 67 > 100 false maxValue = 100

// Task 4
// let m = [33, 100, 23, 67];
// let final = [];
// for(let v of m){
//     final.unshift(v)
// }
// console.log(final);

// let m = [33, 100, 23, 67];
// let l = m.length
// let final = [];
// console.log(m);

// for(i = l - 1; i>=0; i--){
//     final.push(m[i])
// }
// console.log(final);


// Function => a function is a reusable block of code designed to perform a particular task;

// function definition
// function hello(){
//     console.log('hello');
// }

// // function call, invoke
// hello();

// it's a hosting concept
// hi()
// function hi(){
//     console.log('hello');
// }

// function greetUser(name){
//     console.log('welcome'+name);
// }
// greetUser(' rida');
// greetUser(' Abid');

// function sum(a,b){
//     // when a num with undefined => NaN
//     console.log(a,b);

//     console.log(a+b);
//     console.log(a-b);
// }
// sum(12);
// sum(100,10);

// default value
// function sum(a,b=1){
//     console.log(a+b);
//     console.log(a-b);
// }
// sum(12); //utilize default value
// sum(100,10); // orderide default value

// interview
// spread operator all staf in one place ... mean give answer in array
// function sum(...allParams) {
//     console.log(allParams);
// }
// sum(1, 2, 5, 8, 3)

// return means give the result on the particular work just hold value but not print and after return no execute code
// function sum(a, b) {
//     return a + b
// }
// let result = sum(10, 40);
// console.log(result);


// Example of return
// return price * .10;
// function texCal(price) {
//     //0.10
//     console.log(price * .10);

// }
// let productPrice = 50000;
// let total = texCal(productPrice) + productPrice;
// console.log(total);

// Anonymouse function => an anonymouse function has no name it's stored in a variable and used it directly as a callback

// const showMe = function(){
//     console.log('anonymouse function');
// }
// showMe();
// showMe();

// callback function => function passed to another function as a argument and executed code later
// function showMessage(callback) {
//     console.log('helloe everyone');
//     callback()
// }
// function saybye() {
//     console.log('byee');
// }
// showMessage(saybye)

// function addtion(num1, num2) {
//     return num1 + num2
// }
// function subtract(num1, num2) {
//     return num2 - num1
// }
// function calculate(num1, num2, callback) {
//     console.log('final calculation', callback(num1, num2));
// }
// calculate(10, 30, subtract)

// Arrow function offer a shorter syntax than the regular function
// let add = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(add(20, 40));


// arrow function by default return if we dont add curly bracket
// let add = (num1, num2) => num1 + num2;
// console.log(add(20, 40));

// also u have one parameter don't use round bracket
// const square = x => x*x;
// console.log(square(5));

// const square = x => {
//    return  x*x
// };
// console.log(square(5));


// Task 1
// let vowelsletters = 'aeiouAEIOU';
// let findVowels = (str) => {
//     let count = 0;
//     for (let v of str) {
//         if (vowelsletters.includes(v)) {
//             count++;
//             console.log('its vowels', v, count);
//         }
//     }
//     return count
// }
// console.log(findVowels('welcomeneria'));


// Task 2
// let factorial = (x) =>{
//     let fact =1;
//     for(let i = 1; i<=x; i++){
//     fact*=i;
//     // console.log(i,fact);
//     }
//     return fact
// }
// console.log(factorial(5));


// task 3
// let countwords = (str) => {
//     let count = 0;
//     for (let i = 1; i <= str.length; i++) {
//         count++;
//     }
//     return count
// }
// console.log(countwords('diiuwnooowwbv'));



// split() covert string into array The split() method breaks a string into parts and returns them as an array.

// const fruits = "apple,banana,mango";
// console.log(fruits.split(","));

// const str = "I am learning JavaScript";
// console.log(str.split(" "));

// let countwords = (str) => {
//     return str.split(" ").length;
//         // console.log( str.split(" "));
//     }

// console.log(countwords('diiuwnooowwbv hui iam helo'));


// let countwords = (str) => {
//     let words = 1;
//     for (let i of str) {
//         if (i === ' ') {
//             console.log('space');
//             words++;
//         }
//     }
//     return words;
// }
// console.log(countwords('diiuwnooowwbv hui iam helo'));

// OBJECTs is collection of key-values pair;
// let user = {
//     'userEmail': 'example.@com',
//     userPhone: 5555,
//     userStatus: true,
//     userAddress: 'karachi',
//     1: 10
// }
// key with  . 1 give error dont access
// console.log(user.1);

// Dot notation
// console.log(user.userEmail);
// console.log(user.userPhone);
// // Square notation
// console.log(user['userAddress']);
// console.log(user[1]);


// Adding Key in user  inserting and updating if the key already in user
// user.age = 32;
// console.log(user);

//  updating
// user.userEmail = 'hi@gmail.com';
// console.log(user);
// user['userAddress'] = 'islamabad';
// console.log(user);

// // delete
// delete user.userAddress;
// console.log(user);

// let userName = 'rida';
// let user = {
//     'userEmail': 'example.@com',
//     userPhone: 5555,
//     userStatus: true,
//     userAddress: 'karachi',
//     1: 10,
//     student: {
//         one: 'SMIT',
//         two: 'ILMA'
//     },
//     userName
// }
// console.log(user);


// Destructuring
// userEmail key work as a variable now
// let {userEmail,userAddress} = user
// console.log(userEmail,userAddress);

// Nesting Destructuring
// let { student : { one, two } } = user
// // console.log(student);
// console.log(one);
// console.log(two);


// Renaming variable
// let {userEmail:email} = user
// console.log(email);
// console.log(user);

// What is rest operator
// let {userEmail,...restKeys} = user;
// console.log(userEmail);
// console.log(restKeys);  //give in object


// Array Destructuring
// let  colors =['🟡','🔴','🔵','🟢'];
// const [one,two,three] = colors;
// console.log(one);
// console.log(two);
// console.log(three);

// Skipping item
// let  colors =['🟡','🔴','🔵','🟢'];
// const [ , ,three] = colors;
// console.log(three);

// Rest Operator
// let  colors =['🟡','🔴','🔵','🟢'];
// const [a,...rest] = colors;
// console.log(a,rest);


// Deep copy
// let l =[1,2,3,4];
// let m = l;
// console.log(l);
// console.log(m);
// m.push(34,56);
// // Ater Push
// console.log(l);
// console.log(m);


// let l =[1,2,3,4];
// let m = [...l];
// console.log(l);
// console.log(m);
// m.push(34,56);
// // Ater Push
// console.log(l);
// console.log(m);

// Task 1
// let score = [90, 85, 88];
// let findScore = [first, , third] = score
// console.log(first, third);

// Task 2
// const user = {
//     name : 'rida',
//     age : 21,
//     address : {
//         city : 'karachi',
//     }
// }
// let {address :{ city}} = user;
// console.log(city);


// Task 3
// let a = [1, 2];
// let b = [3, 4];
// console.log([...a, ...b]);

// a = [23,10, ...a, 30];
// console.log(a);

// Task 4
// const [first,...second] = [10,20,30];
// console.log(first,second);


// map => work on array do not change original array transform each element an return array and always use callback function and callback function give value,index and give two parameter do not change length
// let l = [1,2,3,4];
//  function simple and arrow function
// l.map((v,i)=>{
//   console.log(v,i);
// });
// console.log(l);

// when you give in variable then return array
// let returnArray = l.map((v,i)=>{
//   console.log(v,i);
//   return v+5
// })
// returnArray = [6,7,8,9]
// console.log(returnArray);

// If we dont give curly brackets use like this not need for return
// and give one parameter just take value not index
// let l = [1,2,3,4];
// let newArray = l.map((v) => v+2); //automatic give
// console.log(newArray);


// example
// const num = [1,2,3];
// const square = num.map(v => v*v);
// console.log(square);

// const num = [1,2,3];
// const square = (v) => v**2; // 1x1 = 1, 2x2=4, 3x3=9
// const squareArray = num.map(square);
// console.log(squareArray);


// filter create new array and works on the conditions in a callback; change length according to the coditions
// let ages =[19,12,18,10];
// let adults = ages.filter(age => age >= 18);
// console.log(adults);

// let ages =[19,12,18,10];
// let adults = ages.filter((v) =>{
//     if(v >= 18){
//         return true
//     }
// });
// console.log(adults);


// example
// let user = [
//     {
//         name : 'atruba',
//         age : 22
//     },
//     {
//         name : 'rida',
//         age : 21
//     },
//     {
//         name : 'raza',
//         age : 20
//     },
//     {
//         name : 'mutib',
//         age : 14
//     },
//     {
//         name : 'muhib',
//         age : 12
//     },
// ]
// console.log(user);
// let fillterArray = user.filter(obj => obj.age >= 18);
// console.log(fillterArray);


// reduce add or combine all values in an array into one single value. not give array
// let l = [1,2,3,4];
// let total = l.reduce((sum,num) => sum+num,0);
// console.log(total);

// find give first match value in an array that true the condition
// let num = [3, 7, 12, 4, 15];
// let firstEven = num.find(v => v % 2 === 0);
// console.log(firstEven);


// forEach() => array ke element ko print karta hai value or index bata ta hai koi array return nhi karta koi calculation nhi krta koi single value nhi deta
//  let l= [3, 7, 12, 4, 15];
// let firstEven = l.forEach(v => console.log(v));
// console.log(firstEven);


// let user = [
//     {
//         name : 'atruba',
//         age : 22
//     },
//     {
//         name : 'rida',
//         age : 21
//     },
//     {
//         name : 'raza',
//         age : 20
//     },
//     {
//         name : 'mutib',
//         age : 14
//     },
//     {
//         name : 'muhib',
//         age : 12
//     },
// ]
// user.forEach((value,index) =>{
//     console.log(value,index);
//     console.log(user[0].age);
// });

// Task 1
// const num = [1,2,3,4];
// const sum = num.map(n => n+n);
// console.log(sum);

// Task 2
// const num = [2, 4, 6, 8, 10, 15];
// const filterEven = num.filter(n => n % 2 === 0);
// console.log(filterEven);

// Task 3
// let students = [
//     { name: 'rida', marks : 70 },
//     { name: 'raza', marks : 30 },
//     { name: 'mutib', marks : 25 }
// ]
// let findFirst = students.find((v) => v.marks < 35);
// console.log(findFirst);


// =========DOM=========
// DOM is like a tree structure through DOM we target any element
// console.log(window); // windo in built object in javascript
// console.log(document);  // window document ki key hai


// let heading = document.getElementById('demo');
// console.log(heading);

// // Change Content of the tag whose have some content inside the tag
// console.log(heading.innerHTML); // give content and tag => welcome <ul>hi</ul>
// console.log(heading.innerText); // just give text => welcome hi


// querySelector take,class,id,tag using # .
// let input = document.querySelector('#username');  // by ID
// console.log(input.placeholder);
// console.log(input.type);
// input.placeholder = 'Enter your name 😉';   // updated placeholder value
// console.log(input.placeholder)
// // input.type = 'password';                    // updated type
// // console.log(input.type);
// input.value = 'Rida Abid';                  // change value



// let para = document.querySelector('.para');       // by class
// let p = document.querySelector('p');              // by tag name P // if we have two tag with same same target only one
// console.log(input);
// console.log(para);
// console.log(p);



// querySelectorAll select all matching elements and returns a nodelist, Array work on (Tag,Class)
// let li = document.querySelectorAll('li');
// console.log(li);
// console.log(li[0].innerHTML);
// console.log(li[1].innerHTML);
// console.log(li[2].innerHTML);
// console.log(li[3].innerHTML);

// let li = document.querySelectorAll('li');
// li.forEach((items, index) => {items.innerText = ` li ${index + 1}` 
//     console.log(items.innerText);
// });


// Event means button pr event laga kr function chalana jis se koi kam perform hon
// function showAlert(){
//     alert('helloe events')
// }




// let password = document.querySelector('#password');
// let btn = document.querySelector('#btn');
// function show(){
//     if(btn.innerHTML == 'show'){
//         password.type = 'text';
//         btn.innerHTML = 'hide'
//     }else{
//         password.type = 'password';
//         btn.innerHTML = 'show';
//     }
// }


// addEventListener => When this event happens, run this code.
// element → the HTML element you want to watch
// event → what should happen (click, mouseover, keydown, etc.)
// function → code that runs when the event occurs

// let btn = document.querySelector('#btn');
// btn.addEventListener('click',() => {
//     alert('hello');
// });

// btn.addEventListener('click', function(){
//     alert('hello devs');
// });



// let password = document.querySelector('#password');
// let btn = document.querySelector('#btn');
// function show(){
//     if(btn.innerHTML == 'show'){
//         password.type = 'text';
//         btn.innerHTML = 'hide'
//     }else{
//         password.type = 'password';
//         btn.innerHTML = 'show';
//     }
// }
// btn.addEventListener('click',show);



// let btn = document.querySelector('#btn');
// btn.addEventListener('click',()=>{
//      if(btn.innerHTML == 'show'){
//         password.type = 'text';
//         btn.innerHTML = 'hide'
//     }else{
//         password.type = 'password';
//         btn.innerHTML = 'show';
//     }
// })





// Example swap h1 and p content
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let h1 = document.querySelector('h1');
// console.log(btn, p, h1);

// btn.addEventListener('click', () => {
//     pData = p.innerText;
//     h1Data = h1.innerText;

//     p.innerText = h1Data;
//     h1.innerText = pData

// })




// Applying css using js
//  let btn = document.querySelector('button');
// let p = document.querySelector('p');

// btn.addEventListener('click',()=>{
//    if(p.style.color == 'black'){
//      p.style.color = 'blue';
//     p.style.fontSize = '20px'
//    }
//    else{
//     p.style.color = 'black';
//     p.style.fontSize = '10px'
//    }
// })

// Create enquiryModel

// Classes Classlist add,delete,toggle 
// let btnadd = document.querySelector('#add');
// let btndelete = document.querySelector('#delete');
// let btnToggle = document.querySelector('#toggle');
// let p = document.querySelector('p');
// btnadd.addEventListener('click', () => {
//     p.classList.add('active');
// });

// btndelete.addEventListener('click', () => {
//     p.classList.remove('active');
// });

// btnToggle.addEventListener('click', () => {
//     p.classList.toggle('active');
// });

// math method
// console.log(Math.random());
// console.log(Math.floor(5.3));
// console.log(Math.floor(-5.4));
// console.log(Math.ceil(6.7));
// console.log(Math.ceil(-6.7));
// console.log(Math.round(5.2));
// console.log(Math.round(-6.7));


// Event Object => the browser send an object to the event handler with information about what happen

// let div = document.querySelector('div');
// div.addEventListener('click',(e)=>{
//      if(e.target.tagName == 'BUTTON'){
//     alert('hi')

//      }

//     // console.log(e.type);
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     // console.log(e.clientX);
//     // console.log(e.clientY);
    
// })

// event delegation

// event bubling and stoppropagaion() means prevent the event from bubbling futher up the DOM tree;
// document.querySelector('div').addEventListener('click',()=>{
//     console.log('div click');
// });

// document.querySelector('button').addEventListener('click',(e)=>{
//     console.log('button click');
//     e.stopPropagation();
// });
























































































































































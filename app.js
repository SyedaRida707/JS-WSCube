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
//  for..of iteration karta hai string pr or arry pr split krke value deta
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
// let midValue = parseInt(user / 2);

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

// interview question => reverse a number 
// '1234' => '4321'



















































































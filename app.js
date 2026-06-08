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
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
// post increment
a++
console.log(a);
b--
console.log(b);
// pree increment
++a
console.log(a);
--b
console.log(b);
console.log(a**b);












































//typeof
// let user = "Jack";
// console.log(typeof user);

// let age = 18;
// console.log(typeof age);

// let age = null;
// console.log(typeof age);

// "?."
// let user = {};
// alert(user.address ? user.address.street : undefind);

// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

// let user = {};
// alert(user.address && user.address.street && user.address.street.name);

// Array
// let arr = new Array(); // 1
// let arr = [];          // 2

// let fruits = ["Apple", "Orange", "Plum"];


// alert(fruits[0]);// Apple
// alert(fruits[1]);// Orange
// alert(fruits[2]);// Plum

// fruits[2] = "Pear";// ["Apple", "Orange", "Pear"]

// fruits[3] = "Lemon";// ["Apple", "Orange", "Pear", "Lemon"]

// //length
// alert(fruits.length);// 3

// let arr = [
//     'Apple',
//     { name: 'Bill' },
//     true,
//     function () { alert('Hello world!'); }
// ];

// alert(arr[1].name);// Bill
// arr[3]();// Hello world!

let fruits = ["Apple", "Orange", "Plum"];

//alert(fruits[fruits.length - 1]);// Plum
alert(fruits.at(-1)); // Plum

// pop/push, shift/unshift

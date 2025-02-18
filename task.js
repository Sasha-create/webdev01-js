//task 1
//camelize("background-color") == 'backgroundColor'
// function camelize(str) {
//     return str
//         .split('-')// ['background', 'color']
//         .map(
//             //convert ['background', 'color'] in ['background', 'Color']
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');// ['background', 'Color'] => 'backgroundColor'
// }

//task2
// let arr = [5, 2, 1, -10, 8];//8,5,2,1,-10

// arr.sort((a, b) => b - a);
// alert(arr);

//HOMEWORK1
// //1. Using .slice() – Extract the first 3 elements from an array without modifying the original array.
// let numbers = [1, 2, 3, 4, 5];
// let firstThree = ...your code

// //2.Using .splice() – Remove the third element from an array and insert two new elements in its place.
// let fruits = ["apple", "banana", "cherry", "date"];
// ...your code

// //3.Using .shift() – Remove the first element from an array and store it in a variable.
// let queue = ["first", "second", "third"];
// ...your code

// //4.Using .unshift() – Add a new element at the beginning of an array.
// let colors = ["blue", "green"];
// ...your code

// //5.Using .find() – Find the first number greater than 10 in an array.
// let numbers = [4, 9, 12, 15];
// let firstGreaterThanTen = ...your code


//HOMEWORK2
//Task1: Given an array of numbers, use map to create a new array where each number is squared.
const numbers = [2, 4, 6, 8];
// Expected output: [4, 16, 36, 64]


//Task2: Convert an array of words into a sentence using join.
const words = ["JavaScript", "is", "awesome"];
// Expected output: "JavaScript is awesome"


//Task3: Remove the third element from an array using splice.
const fruits = ["Apple", "Banana", "Cherry", "Date"];
// Expected output: ["Apple", "Banana", "Date"]


//Task4: Create a new array containing only the last two elements using slice.
const colors = ["Red", "Green", "Blue", "Yellow"];
// Expected output: ["Blue", "Yellow"]


//Task5: Find the first number greater than 10 in an array using find.
const numbers = [3, 7, 12, 5, 20];
// Expected output: 12

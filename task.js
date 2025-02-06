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

//HOMEWORK
//1. Using .slice() – Extract the first 3 elements from an array without modifying the original array.
let numbers = [1, 2, 3, 4, 5];
let firstThree = ...your code

//2.Using .splice() – Remove the third element from an array and insert two new elements in its place.
let fruits = ["apple", "banana", "cherry", "date"];
...your code

//3.Using .shift() – Remove the first element from an array and store it in a variable.
let queue = ["first", "second", "third"];
...your code

//4.Using .unshift() – Add a new element at the beginning of an array.
let colors = ["blue", "green"];
...your code

//5.Using .find() – Find the first number greater than 10 in an array.
let numbers = [4, 9, 12, 15];
let firstGreaterThanTen = ...your code

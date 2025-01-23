// let fruits = ["Apple", "Orange", "Plum", "Banana", "Strawberry"];

// pop/push, shift/unshift
// fruits.push(...items) //adds items to the end
// fruits.pop()          // extracts an item from the end
// fruits.shift()        // extracts an item from the beginning
// fruits.unshift(...items) // adds items to the beginning


// slice, splice, concat, forEach
// fruits.splice  
// delete fruits[1]

// fruits.splice(1, 1)
//["Apple", "Plum"]

// fruits.splice(0, 3, "Lemon", "Kiwi");
// alert(fruits) // ["Lemon", "Kiwi", "Banana", "Strawberry"]

// fruits.slice(1, 3);
// alert(fruits);
// fruits.slice(-2);

// let fruits = ["Apple", "Orange"];
// alert(fruits.concat(["Banana", "Lemon"])); // ["Apple", "Orange", "Banana", "Lemon"]

// alert(fruits.concat(["Banana", "Lemon"], ["Kiwi", "Strawberry"])); 
// alert(fruits.concat(["Banana", "Lemon"], "Kiwi", "Strawberry")); 

// arr.forEach(function (item, index, array) {
    // ...
// })

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     console.log(`${item} have position ${index} in array ${array}`);
// });

//indexOf/lastIndexOf/includes

// arr.indexOf(item, from)
// arr.includes(item, from)

// let arr = [1, 0, false];
// alert(arr.indexOf(0)); //1
// alert(arr.indexOf(false)); // 2
// alert(arr.indexOf(null)); //-1

// alert(arr.includes(1)); //true

// let arr = ["Bilbo", "Gandalf", "Nazgul", "Bilbo"];
// alert(arr.indexOf("Bilbo")); //0
// alert(arr.lastIndexOf("Bilbo")); //3

//  find/findIndex/findLastIndex
let result = arr.find(item, index, array)

let users = [
    { id: 1, name: "Bilbo" },
    { id: 2, name: "Gandalf" },
    { id: 3, name: "Nazgul" },
    { id: 4, name: "Bilbo" }
];

// let user = users.find(item => item.id == 1);

// alert(user.name); // Bilbo

alert(users.findIndex(user => user.name == "Bilbo"));     // 0
alert(users.findLastIndex(user => user.name == "Bilbo")); // 3
//object
// let user = {
//     name: "John",
    
//     isAdmin: false,
   
// };

// alert(user.name); // John
// alert(user.age);  // 30

// delete user.age;

// user["like dogs"] = true;

// alert(user["like dogs"]); // true

// delete user["like dogs"];

// let key = "like dogs";
// user[key] = true;
// user.key = true; // undefined


// let fruit = prompt("What types of fruits buying?", "apple");

// let bag = {
//     [fruit]: 5
// }

// alert(bag.apple); // 5

// function makeUser(name, age) {
//     return {
//         name,
//         age
//         // ... another properties
//     }
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// let user = {
//     name,
//     age: 30
// }


// "for", "let", "return"
// let object = {
//     for: 1,
//     let: 2,
//     return: 3
// }

// alert(object.for + object.let + object.return);  //6

// let object = {
//     0: "test" // = "0": "test"
// }

// alert(object[0]); //test
// alert(object["0"]); //test

// let user = {};

// alert(user.noProperty === undefined);  //true


//in
// "key" in object

// let user = { name: "John", age: 30 };
// alert("age" in user); //true
// alert("weight" in user); //false

// let user = { age: 30 };

// let key = "age";
// alert(key in user); //true


// let object = {
//     test: undefined
// }

// alert(object.test);// undefined
// alert("test" in object); //true

// for ... in
// for (key in object) {
//     // body 
// }

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

// for (let key in user) {
//     alert(key); // name, age, isAdmin
//     alert(user[key]); // John, 30, true
// }

for (let prop in user) {
    alert(prop); // name, age, isAdmin
    alert(user[prop]); // John, 30, true
}
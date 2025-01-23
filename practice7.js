//Copy objects
// let message = "Hello!";
// let phrase = message;


// let user = {
//     name: "John"
// };
// let admin = user;// copy link

// let a = {};
// let b = a;// copy link

// alert(a == b);//true
// alert(a === b);//true

// let a = {};
// let b = {};

// alert(a == b);//false


//Clone, Object.assign
// let user = {
//     name: "Bob",
//     age: 30
// };

// let clone = {};

// for (let key in user) {
//     clone[key] = user[key]
// }

// clone.name = "Jack";

// alert(clone.name);

// Object.assign(dest, ...sources)

// let user = { name: "Bob" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// Object.assign(user, permissions1, permissions2)

// alert(user.name);//Bob
// alert(user.canView);//true
// alert(user.canEdit);//true
// //user = {name: "Bob", canView: true, canEdit: true}

// let user = {
//     name: "Bob",
//     age: 30
// };

// let clone = Object.assign({}, user);

// alert(clone.name);//Bob
// alert(clone.age);//30

// let user = {
//     name: "Bob",
//     size: {
//         tall: 185,
//         weight: 85
//     }
// };

// //alert(user.size.tall);//185

// //let clone = Object.assign({}, user);
// let clone = structuredClone(user);

// alert(user.size === clone.size);//true

// user.size.weight = 100;
// alert(clone.size.weight);//85

//"this"

// let user = {
//     name: "Bob",
//     age: 30
// };

// user.sayHi = function () {
//     alert("Hello!");
// };

// user.sayHi();//Hello!

// user = {
//     sayHi: function () {
//         alert("Hello!");
//     }
// };

// user = {
//     sayHi() {
//         alert("Hello!");
//     }
// };

// let user = {
//     name: "Bob",
//     age: 30,

//     sayHi() {
//         alert(user.name);//this.name
//     }
// };

// let admin = user;
// user = null;

// admin.sayHi();//TypeError
// // user.sayHi();//Bob

// let user = { name: "Bob" };
// let admin = { name: "Admin" };
// let superAdmin = {name: "Super Star"}

// function sayHi() {
//     alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;
// superAdmin.f = sayHi;

// user.f();//Bob
// admin.f();//Admin
// superAdmin.f();//Super Star

// let user = {
//     name: "Bill",
//     sayHi() {
//         let arrow = () => alert(this.name);
//         arrow();
//     }
// };
// user.sayHi();//Bill

//"new"
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Bill");

// alert(user.name);//Bill
// alert(user.isAdmin);//false

// function MainUser() {
//     this.name = "Bill";
//     return { name: "Jack" };
// }

// alert(new MainUser().name);//Jack

// function SecondUser() {
//     this.name = "Bill";
//     return;
// }

// alert(new SecondUser().name);//Bill

function User() {
    this.name = name;
    
    this.sayHi = function () {
        alert("My name is: " + this.name);
    }
}

let bill = new User("Bill");

bill.sayHi();//My name is: Bill